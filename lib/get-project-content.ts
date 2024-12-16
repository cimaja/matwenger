import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const projectsDirectory = path.join(process.cwd(), 'content/projects');

export interface Video {
  id: string;
  title?: string;
  description?: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectContent {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  year: string;
  role: string;
  company: string;
  content: string;
  videos?: Video[];
  gallery?: GalleryImage[];
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
      tags: data.tags,
      year: data.year,
      role: data.role,
      company: data.company,
      videos: data.videos,
      gallery: data.gallery,
      content: htmlContent,
    };
  } catch (error) {
    console.error(`Error reading project ${id}:`, error);
    return null;
  }
}

export async function getAllProjects(): Promise<ProjectContent[]> {
  // Get all .md files from the projects directory
  const fileNames = fs.readdirSync(projectsDirectory);
  const projects = await Promise.all(
    fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(async fileName => {
        const id = fileName.replace(/\.md$/, '');
        return await getProjectContent(id);
      })
  );

  return projects
    .filter((project): project is ProjectContent => project !== null)
    .sort((a, b) => (a.year > b.year ? -1 : 1));
}
