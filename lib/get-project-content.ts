import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import type { Renderer, Tokens } from 'marked';
import { parseCaseStudy, type CaseStudy } from './project-case-study';

const projectsDirectory = path.join(process.cwd(), 'content/projects');

// Configure marked to add target="_blank" to links
const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

// Only allow http(s), mailto, and relative/anchor URLs in rendered links
const isSafeHref = (href: string) => /^(https?:|mailto:|[/#.])/i.test(href.trim());

marked.use({
  renderer: {
    link(this: Renderer, token: Tokens.Link) {
      const href = token.href || '';
      const title = token.title || null;
      const text = token.text || '';
      if (!isSafeHref(href)) return escapeHtml(text);
      return `<a href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer"${title ? ` title="${escapeHtml(title)}"` : ''}>${escapeHtml(text)}</a>`;
    }
  }
});

export interface Video {
  id?: string;
  type?: 'youtube' | 'local';
  src?: string;
  thumbnail?: string;
  captions?: string;
  title?: string;
  description?: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
  ratio?: 'landscape' | 'wide' | 'square' | 'portrait';
}

export interface ProjectContent {
  id: string;
  title: string;
  description: string;
  image?: string;
  cover?: string;
  tags: string[];
  year: string;
  role: string;
  company: string;
  order?: number;
  content: string;
  videos?: Video[];
  gallery?: GalleryImage[];
  caseStudy?: CaseStudy;
}

export async function getProjectContent(id: string): Promise<ProjectContent | null> {
  try {
    const fullPath = path.join(projectsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // Parse the markdown file
    const { data, content } = matter(fileContents);
    
    // Convert markdown to HTML
    const htmlContent = await marked(content);

    return {
      id,
      title: data.title,
      description: data.description,
      image: data.image,
      cover: data.cover,
      tags: data.tags,
      year: String(data.year),
      role: data.role,
      company: data.company,
      order: Number.isFinite(data.order) ? data.order : undefined,
      videos: data.videos,
      gallery: data.gallery,
      caseStudy: data.caseStudy ? parseCaseStudy(data.caseStudy, data.gallery?.length ?? 0, data.videos?.length ?? 0) : undefined,
      content: htmlContent,
    };
  } catch (error) {
    console.error(`Error reading project ${id}:`, error);
    return null;
  }
}

export async function getAllProjects(): Promise<ProjectContent[]> {
  // Get all .md files from the projects directory asynchronously
  const fileNames = await fs.promises.readdir(projectsDirectory);
  const projects = await Promise.all(
    fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(async fileName => {
        const id = fileName.replace(/\.md$/, '');
        return await getProjectContent(id);
      })
  );

  // Projects without an explicit order sort after ordered ones within a year.
  const UNORDERED = Number.MAX_SAFE_INTEGER;

  return projects
    .filter((project): project is ProjectContent => project !== null)
    .sort((a, b) => {
      if (a.year !== b.year) return a.year > b.year ? -1 : 1;
      const orderDiff = (a.order ?? UNORDERED) - (b.order ?? UNORDERED);
      if (orderDiff !== 0) return orderDiff;
      return a.id.localeCompare(b.id);
    });
}
