import { z } from 'zod';

const heading = z.object({ title: z.string(), emphasis: z.string().optional() });
const imageIndex = z.number().int().positive();
const summary = z.object({ label: z.string(), title: z.string(), body: z.string() });

// Media references are one-based positions in the existing Markdown galleries.
export const caseStudySchema = z.object({
  headline: heading,
  introduction: z.string(),
  links: z.array(z.object({ label: z.string(), href: z.string().regex(/^(https?:\/\/|\/(?!\/))/), note: z.string().optional() })).optional(),
  leadMedia: z.discriminatedUnion('kind', [
    z.object({ kind: z.literal('video'), index: imageIndex, caption: z.string().optional() }),
    z.object({ kind: z.literal('image'), index: imageIndex, caption: z.string().optional() }),
  ]).optional(),
  overview: z.array(summary).min(1),
  experience: heading.extend({
    description: z.string(),
    steps: z.array(z.object({
      label: z.string(),
      title: z.string(),
      body: z.string(),
      image: imageIndex,
      caption: z.string(),
    })).min(1),
  }).optional(),
  decisions: heading.extend({
    description: z.string(),
    items: z.array(z.object({
      title: z.string(),
      body: z.string(),
      image: imageIndex.optional(),
      video: imageIndex.optional(),
      caption: z.string().optional(),
    }).refine(item => !(item.image && item.video), 'Choose an image or a video for a decision, not both.')).min(1),
  }).optional(),
  outcomes: heading.extend({
    description: z.string(),
    items: z.array(summary).min(1),
  }).optional(),
});

export type CaseStudy = z.infer<typeof caseStudySchema>;

export function parseCaseStudy(value: unknown, imageCount: number, videoCount: number): CaseStudy {
  const study = caseStudySchema.parse(value);
  const references = [
    ...(study.experience?.steps.map(step => step.image) ?? []),
    ...(study.decisions?.items.flatMap(item => item.image ? [item.image] : []) ?? []),
    ...(study.leadMedia?.kind === 'image' ? [study.leadMedia.index] : []),
  ];
  if (references.some(index => index > imageCount)) {
    throw new Error('Case study references an image outside the project gallery.');
  }
  const videoReferences = [
    ...(study.leadMedia?.kind === 'video' ? [study.leadMedia.index] : []),
    ...(study.decisions?.items.flatMap(item => item.video ? [item.video] : []) ?? []),
  ];
  if (videoReferences.some(index => index > videoCount)) {
    throw new Error('Case study references a video outside the project videos.');
  }
  return study;
}
