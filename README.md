# Portfolio Website

A Next.js-based portfolio website showcasing design projects and case studies.

## Project Structure

```
project/
├── app/                  # Next.js app directory
├── components/          # React components
├── content/            # Markdown content
│   └── projects/      # Project markdown files
├── lib/               # Utility functions
├── public/            # Static assets
│   └── images/       # Image assets
│       └── projects/ # Project-specific images
└── types/             # TypeScript type definitions
```

## Version Control

This project uses Git for version control and is hosted on GitHub. The repository can be found at: https://github.com/cimaja/matwenger

### Getting Started with Git

1. Clone the repository:
   ```bash
   git clone https://github.com/cimaja/matwenger.git
   cd matwenger
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Git Workflow

Follow these best practices for contributing to the project:

1. Create a new branch for each feature or fix:
   ```bash
   git checkout -b feature/feature-name
   # or
   git checkout -b fix/bug-name
   ```

2. Make your changes and commit them with meaningful messages:
   ```bash
   git add .
   git commit -m "feat: add new feature description"
   ```
   
   Commit message prefixes:
   - `feat:` for new features
   - `fix:` for bug fixes
   - `docs:` for documentation changes
   - `style:` for formatting changes
   - `refactor:` for code refactoring
   - `test:` for adding tests
   - `chore:` for maintenance tasks

3. Push your changes:
   ```bash
   git push origin feature/feature-name
   ```

4. Create a Pull Request on GitHub for review

### Keeping Your Branch Updated

Stay in sync with the main branch:
```bash
git checkout main
git pull origin main
git checkout your-branch
git merge main
```

## Adding Projects

Projects are stored as markdown files in the `content/projects` directory. Each project should have its own `.md` file with the following structure:

```markdown
---
title: "Project Title"
description: "A brief description of the project"
image: "/images/projects/project-name/main/cover.jpg"  # Path to project image
tags: ["Design", "UX", "Research"]
year: "2023"
role: "Product Designer"
company: "Company Name"
videoId: "dQw4w9WgXcQ"  # Optional: single YouTube video ID
videos: # Optional: multiple YouTube video IDs
  - id: "dQw4w9WgXcQ"
    title: "Overview Video"  # Optional
    description: "A brief overview of the project"  # Optional
  - id: "xvFZjo5PgG0"
    title: "Technical Demo"
    description: "Detailed walkthrough of technical features"
gallery:
  - src: "/images/projects/project-name/gallery/image1.jpg"
    alt: "Image Alt Text"
    caption: "Optional caption describing the image"  # Optional
  - src: "/images/projects/project-name/gallery/image2.jpg"
    alt: "Second Image"
    caption: "Another caption"
---

## Overview

Project overview content...

## Key Responsibilities

- Responsibility 1
- Responsibility 2

## Impact

Impact content...
```

### Required Fields

- `title`: Project title
- `description`: Brief project description
- `image`: Path to project cover image (see Image Guidelines below)
- `tags`: Array of relevant tags
- `year`: Year of project completion
- `role`: Your role in the project
- `company`: Company or organization

### Optional Fields

#### Adding Videos

Projects can include multiple videos with titles and descriptions. Add them to your project's frontmatter like this:

```markdown
---
title: "Project Title"
# ... other fields ...
videos:
  - id: "dQw4w9WgXcQ"
    title: "Overview Video"  # Optional
    description: "A brief overview of the project"  # Optional
  - id: "xvFZjo5PgG0"
    title: "Technical Demo"
    description: "Detailed walkthrough of technical features"
---
```

To get a YouTube video ID:

1. **From a standard YouTube URL:**
   ```
   https://www.youtube.com/watch?v=dQw4w9WgXcQ
                                  └──────┬──────┘
                                     video ID
   ```

2. **From a shortened YouTube URL:**
   ```
   https://youtu.be/dQw4w9WgXcQ
                    └──────┬──────┘
                       video ID
   ```

3. **From a YouTube embed URL:**
   ```
   https://www.youtube.com/embed/dQw4w9WgXcQ
                                └──────┬──────┘
                                   video ID
   ```

The video gallery will automatically:
- Display a single video if only one is provided
- Show navigation arrows and dots for multiple videos
- Support keyboard navigation (left/right arrows)
- Animate smoothly between videos
- Display optional titles and descriptions

#### Adding a Gallery

Projects can include a gallery of images with captions. Add them to your project's frontmatter:

```markdown
---
title: "Project Title"
# ... other fields ...
gallery:
  - src: "/images/projects/project-name/gallery/image1.jpg"
    alt: "Image Alt Text"
    caption: "Optional caption describing the image"  # Optional
  - src: "/images/projects/project-name/gallery/image2.jpg"
    alt: "Second Image"
    caption: "Another caption"
---
```

The gallery will automatically:
- Display images in a responsive grid
- Support lightbox view on click
- Show captions in lightbox view
- Enable keyboard navigation (left/right arrows)
- Animate smoothly between images

#### Image Organization

Each project should have its own directory for images, organized like this:
```
public/
└── images/
    └── projects/
        └── project-name/    # Project folder
            ├── main/        # Main project images
            │   └── cover.jpg    # Main project image
            └── gallery/     # Gallery images
                ├── image1.jpg
                ├── image2.jpg
                └── image3.jpg
```

#### Main Project Image
- Store the main project image in the `main` folder
- Use `cover.jpg` as the filename
- Reference it in your markdown as:
  ```markdown
  image: "/images/projects/project-name/main/cover.jpg"
  ```

#### Gallery Images
- Store gallery images in the `gallery` folder
- Use descriptive filenames
- Reference them in your markdown as:
  ```markdown
  gallery:
    - src: "/images/projects/project-name/gallery/image1.jpg"
      alt: "Image Description"
      caption: "Optional caption"
  ```

### Image Guidelines

#### Image Formats
- Use `.jpg` for photographs and general images
- Use `.png` for screenshots or images with transparency
- Use `.webp` for better compression (with .jpg/.png fallbacks)

#### Best Practices
- Keep main project images consistent in aspect ratio (16:9 recommended)
- Optimize images for web before uploading
- Use meaningful, descriptive filenames
- Include alt text for accessibility
- Add captions to provide context

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Technologies

- Next.js 13 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- gray-matter (Markdown parsing)
- marked (Markdown to HTML conversion)

## Running the Website

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The website will be available at http://localhost:3000

Let me know if you'd like to make any changes to the content or design, or if you need help with anything specific!
