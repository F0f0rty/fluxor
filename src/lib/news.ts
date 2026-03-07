import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const newsDir = path.join(process.cwd(), 'content/news');

export interface NewsPost {
  slug: string;
  title: string;
  titleRu?: string;
  date: string;
  excerpt: string;
  excerptRu?: string;
  category: string;
  categoryRu?: string;
  content: string;
}

export function getAllNews(): NewsPost[] {
  if (!fs.existsSync(newsDir)) return [];

  const files = fs.readdirSync(newsDir).filter((f) => f.endsWith('.mdx') || f.endsWith('.md'));

  const posts = files.map((filename) => {
    const filePath = path.join(newsDir, filename);
    const raw = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(raw);

    return {
      slug: filename.replace(/\.mdx?$/, ''),
      title: data.title ?? '',
      titleRu: data.titleRu,
      date: data.date ?? '',
      excerpt: data.excerpt ?? '',
      excerptRu: data.excerptRu,
      category: data.category ?? '',
      categoryRu: data.categoryRu,
      content,
    } as NewsPost;
  });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getNewsBySlug(slug: string): NewsPost | undefined {
  return getAllNews().find((p) => p.slug === slug);
}
