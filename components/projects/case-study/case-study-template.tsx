import Link from 'next/link';
import { MediaFrame } from '@/components/design-system/media-frame';
import { MediaFigure } from '@/components/design-system/media-figure';
import { SectionLabel, TextLink } from '@/components/design-system/studio';
import type { ProjectContent } from '@/lib/get-project-content';
import type { CaseStudy } from '@/lib/project-case-study';
import { ExperienceWalkthrough } from './experience-walkthrough';
import { CaseStudyVideo } from './case-study-video';
import { CaseStudyNotes } from './case-study-notes';
import styles from './case-study.module.css';

function Heading({ title, emphasis }: { title: string; emphasis?: string }) {
  return <>{title}{emphasis && <><br /><em>{emphasis}</em></>}</>;
}

type NextProject = Pick<ProjectContent, 'id' | 'title' | 'cover' | 'image' | 'company' | 'year'>;

export function CaseStudyTemplate({ project, study, nextProject }: { project: ProjectContent; study: CaseStudy; nextProject?: NextProject }) {
  const images = project.gallery ?? [];
  const leadVideo = study.leadMedia?.kind === 'video' ? project.videos?.[study.leadMedia.index - 1] : undefined;
  const leadImage = study.leadMedia?.kind === 'image' ? images[study.leadMedia.index - 1] : undefined;
  const sections = ['overview', study.experience && 'experience', study.decisions && 'decisions', study.outcomes && 'outcomes'].filter(Boolean);
  const label = (section: string, title: string) => `${String(sections.indexOf(section) + 1).padStart(2, '0')} / ${title}`;

  return <article className={styles.caseStudy}>
    <header className={`${styles.container} ${styles.hero}`}>
      <TextLink href="/projects" className={styles.backLink}>All projects</TextLink>
      <div className={styles.heroHeading}>
        <p className={styles.projectName}>{project.title}</p>
        <h1><Heading {...study.headline} /></h1>
      </div>
      <div className={styles.heroDetails}>
        <div><p className={styles.introduction}>{study.introduction}</p>{study.links?.length ? <div className={styles.projectLinks}>{study.links.map(link => <div key={link.href}><TextLink href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}>{link.label}{link.href.startsWith('http') && <span className="sr-only"> (opens in a new tab)</span>}</TextLink>{link.note && <span>{link.note}</span>}</div>)}</div> : null}</div>
        <dl className={styles.metadata}>
          <div><dt>Role</dt><dd>{project.role}</dd></div>
          <div><dt>Company / Year</dt><dd>{project.company} / {project.year}</dd></div>
        </dl>
      </div>
      <div className={styles.heroMedia}>
        {leadVideo ? <figure><CaseStudyVideo video={leadVideo} poster={project.cover || leadVideo.thumbnail} priority /><figcaption className={styles.filmCaption}>{study.leadMedia?.caption || leadVideo.title}</figcaption></figure>
          : leadImage ? <MediaFigure image={leadImage} caption={study.leadMedia?.caption} priority />
          : <MediaFrame src={project.cover || project.image} alt={project.title} ratio="wide" priority sizes="91vw" />}
      </div>
    </header>

    <section className={`${styles.container} ${styles.overview}`} aria-label="The project at a glance">
      <SectionLabel>{label('overview', 'At a glance')}</SectionLabel>
      <div className={styles.overviewGrid}>{study.overview.map(item => <div key={item.label}><p className={styles.metaLabel}>{item.label}</p><h2>{item.title}</h2><p>{item.body}</p></div>)}</div>
    </section>

    {study.experience && <section className={styles.experience} id="experience" aria-labelledby="experience-title">
      <div className={styles.container}>
        <SectionLabel>{label('experience', 'The experience')}</SectionLabel>
        <div className={styles.sectionIntro}><h2 id="experience-title"><Heading {...study.experience} /></h2><p>{study.experience.description}</p></div>
        <ExperienceWalkthrough key={project.id} steps={study.experience.steps} images={images} />
      </div>
    </section>}

    {study.decisions && <section className={`${styles.container} ${styles.decisions}`} aria-labelledby="decisions-title">
      <SectionLabel>{label('decisions', 'Design & leadership')}</SectionLabel>
      <div className={styles.sectionIntro}><h2 id="decisions-title"><Heading {...study.decisions} /></h2><p>{study.decisions.description}</p></div>
      <div className={styles.decisionList}>{study.decisions.items.map((item, index) => <div key={item.title} className={styles.decision} data-has-image={Boolean(item.image || item.video)}>
        <div className={styles.decisionCopy}><span className={styles.metaLabel}>{String(index + 1).padStart(2, '0')}</span><h3>{item.title}</h3><p>{item.body}</p></div>
        {item.image && <MediaFigure image={images[item.image - 1]} caption={item.caption} />}
        {item.video && project.videos?.[item.video - 1] && <figure><CaseStudyVideo video={project.videos[item.video - 1]} poster={project.videos[item.video - 1].thumbnail ? undefined : project.cover} /><figcaption className={styles.filmCaption}>{item.caption || project.videos[item.video - 1].description}</figcaption></figure>}
      </div>)}</div>
    </section>}

    {study.outcomes && <section className={styles.outcomes} data-studio-theme="paper" aria-labelledby="outcomes-title">
      <div className={styles.container}>
        <SectionLabel>{label('outcomes', 'What changed')}</SectionLabel>
        <div className={styles.sectionIntro}><h2 id="outcomes-title"><Heading {...study.outcomes} /></h2><p>{study.outcomes.description}</p></div>
        <div className={styles.outcomesGrid}>{study.outcomes.items.map(item => <div key={item.label}><p className={styles.metaLabel}>{item.label}</p><h3>{item.title}</h3><p>{item.body}</p></div>)}</div>
      </div>
    </section>}

    <div className={`${styles.container} ${styles.archive}`}>
      <CaseStudyNotes html={project.content} />
    </div>

    {nextProject && <section className={styles.nextProject} aria-labelledby="next-project-title">
      <div className={styles.container}>
        <div className={styles.nextHeading}><SectionLabel>Keep exploring</SectionLabel><TextLink href="/projects">All projects</TextLink></div>
        <Link href={`/projects/${nextProject.id}`} className={styles.nextCard}>
          <div><p className={styles.metaLabel}>{nextProject.company} / {nextProject.year}</p><h2 id="next-project-title">{nextProject.title}</h2><span className={styles.nextLink}>View project</span></div>
          <MediaFrame src={nextProject.cover || nextProject.image} alt={nextProject.title} ratio="landscape" tone="muted" sizes="(max-width: 760px) 88vw, 45vw" />
        </Link>
      </div>
    </section>}
  </article>;
}
