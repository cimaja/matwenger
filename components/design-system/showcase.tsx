'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { colorRoles, componentInventory } from '@/lib/design-system';
import { personalityTraits, journeyMilestones } from '@/lib/data/about';
import type { GalleryImage } from '@/lib/get-project-content';
import { labProjects } from '@/components/lab/lab-projects-data';
import { LabProjectCard } from '@/components/lab/lab-project-card';
import { MediaGallery } from './media-gallery';
import { MediaFrame } from './media-frame';
import { GalleryCard, GalleryGrid, GallerySkeleton, JourneyTimeline, Tag, TextLink, TraitScale } from './studio';
import styles from './showcase.module.css';

const sections = [['principles', 'Principes'], ['colors', 'Couleurs'], ['type', 'Typographie'], ['actions', 'Actions'], ['patterns', 'Composants'], ['images', 'Images & galeries'], ['inventory', 'Inventaire']] as const;

function Chapter({ id, number, title, children }: { id: string; number: string; title: string; children: ReactNode }) {
  return <section id={id} className={styles.chapter}><div className={styles.chapterTitle}><span>{number}</span><h2>{title}</h2></div>{children}</section>;
}

export function DesignSystemShowcase({ project }: { project: { id: string; title: string; description: string; cover: string; year: string; tags: string[]; gallery: GalleryImage[] } }) {
  const [theme, setTheme] = useState<'ink' | 'paper' | 'acid'>('ink');
  const [values, setValues] = useState<Record<string, string>>({});
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const colorPanel = useRef<HTMLDivElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);
  useEffect(() => {
    const next: Record<string, string> = {};
    colorPanel.current?.querySelectorAll<HTMLElement>('[data-color]').forEach(chip => {
      const rgb = getComputedStyle(chip).backgroundColor.match(/\d+/g);
      next[chip.dataset.color!] = rgb ? '#' + rgb.slice(0, 3).map(value => Number(value).toString(16).padStart(2, '0')).join('') : '';
    });
    setValues(next);
  }, [theme]);
  async function copy(token: string) {
    try { await navigator.clipboard.writeText(`hsl(var(--${token}))`); setMessage(`Token --${token} copié.`); }
    catch { setMessage(`À copier : hsl(var(--${token}))`); }
  }
  function demo() { setLoading(true); timer.current = setTimeout(() => { setLoading(false); setMessage('Démonstration terminée.'); }, 900); }

  return <div className={styles.guide}>
    <header className={styles.hero}>
      <div className={styles.kicker}>MW / DESIGN SYSTEM / 2026</div>
      <h1>Une même<br /><em>signature.</em></h1>
      <div className={styles.heroBottom}><p>La charte du portfolio, traduite en composants. Une base commune pour concevoir, construire et faire évoluer chaque page.</p><div className={styles.signature}><span>Inter</span><em>Fraunces</em><code>JetBrains Mono</code></div></div>
    </header>
    <nav className={styles.index} aria-label="Chapitres de la charte">{sections.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
    <div className={styles.content}>
      <Chapter id="principles" number="01" title="Le caractère, puis la cohérence.">
        <div className={styles.principles}>{[
          ['Une hiérarchie claire', 'Inter structure la lecture. Fraunces apporte une inflexion dans les titres et les citations. Le monospace reste réservé aux repères.'],
          ['Trois fonds, des rôles précis', 'Encre pour le récit. Papier pour les témoignages et la respiration. Citron pour un moment d’action, utilisé avec parcimonie.'],
          ['Des interactions discrètes', 'Les liens sont soulignés. Les flèches servent à naviguer, pas à décorer. Les contenus et les images restent au premier plan.'],
        ].map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
      </Chapter>
      <Chapter id="colors" number="02" title="Des couleurs qui ont un rôle.">
        <div className={styles.chapterLead}><p>Les couleurs s’adaptent au fond. Choisis un contexte, puis sélectionne une couleur pour copier son token.</p><div className={styles.switcher} role="group" aria-label="Fond de démonstration">{(['ink', 'paper', 'acid'] as const).map(value => <Button key={value} variant={theme === value ? 'default' : 'outline'} size="sm" aria-pressed={theme === value} onClick={() => setTheme(value)}>{value === 'ink' ? 'Encre' : value === 'paper' ? 'Papier' : 'Citron'}</Button>)}</div></div>
        <div ref={colorPanel} data-studio-theme={theme} className={styles.themePanel}>
          <div className={styles.themeSample}><div><span className={styles.smallLabel}>EXEMPLE EN CONTEXTE</span><h3>Du sens.<br /><em>Du caractère.</em></h3><p>Un texte lisible, des accents mesurés et des surfaces qui donnent de la structure.</p></div><div><Button onClick={demo} disabled={loading}>{loading ? 'Chargement…' : 'Action principale'}</Button><TextLink href="#images">Explorer les images</TextLink><Tag tone="accent">Accent secondaire</Tag></div></div>
          <div className={styles.swatches}>{colorRoles.map(role => <button type="button" className={styles.swatch} key={role.token} onClick={() => copy(role.token)} aria-label={`Copier ${role.name}, --${role.token}`}><span className={styles.colorChip} data-color={role.token} style={{ background: `hsl(var(--${role.token}))` }} /><span className={styles.colorName}>{role.name}</span><code>{values[role.token] || `--${role.token}`}</code><small>{role.usage}</small></button>)}</div>
          <div className={styles.statuses}><Tag tone="success">Succès</Tag><Tag tone="warning">Attention</Tag><Tag tone="danger">Erreur</Tag><Tag tone="info">Information</Tag><p>Les états sont toujours nommés : la couleur ne suffit pas.</p></div>
        </div>
        <p className={styles.note}>Palette de marque : encre #141511 · papier #f1f2eb · citron #d4fc79 · secondaire #bccf98 · tertiaire #9b9f92. Les textes et les contrôles utilisent les rôles adaptés à chaque fond.</p>
      </Chapter>
      <Chapter id="type" number="03" title="Trois voix, une seule lecture.">
        <div className={styles.typeSample}><div><code>DISPLAY / INTER + FRAUNCES</code><p className={styles.display}>Made with<br /><em>intention.</em></p></div><div className={styles.typeRules}><h3>Inter</h3><p>Navigation, titres, descriptions et interfaces. Titres à 450–500, texte à 400.</p><h3><em>Fraunces</em></h3><p>Une courte expression en italique dans un titre. Citations et grands chiffres.</p><h3 className={styles.mono}>JetBrains Mono</h3><p>Dates, indices, tags et terminal. Pas de paragraphe courant en monospace.</p></div></div>
        <div className={styles.tableWrap}><table><thead><tr><th>Usage</th><th>Échelle</th><th>Règle</th></tr></thead><tbody>{[['Hero','48–108 px','Inter 450 · interligne 1,04'],['Titre de page','40–80 px','Inter 450 · accent Fraunces'],['Titre de section','32–56 px','Inter 450 · interligne 1,15'],['Titre de carte','22 px','Inter 500 · interligne 1,35'],['Introduction','17–20 px','Inter 400 · interligne 1,8'],['Texte courant','16 px','Inter 400 · interligne 1,75'],['Liens et légendes','14 px','Inter 400–500 · soulignement 6 px'],['Repères et tags','12 px','Mono · interligne 1,6']].map(row => <tr key={row[0]}>{row.map((cell, i) => i === 0 ? <th key={i}>{cell}</th> : <td key={i}>{cell}</td>)}</tr>)}</tbody></table></div>
      </Chapter>
      <Chapter id="actions" number="04" title="Une action. Le bon niveau.">
        <div className={styles.actionGrid}><article><span className={styles.smallLabel}>PRIMAIRE</span><Button size="lg" onClick={demo} disabled={loading} aria-busy={loading}>{loading ? 'Chargement…' : 'Tester le chargement'}</Button><p>Une action dominante. Fond citron sur encre ; fond encre sur papier ou citron.</p></article><article><span className={styles.smallLabel}>SECONDAIRE</span><Button variant="outline" onClick={() => setMessage('Action secondaire testée.')}>Action secondaire</Button><p>Contour visible et fond neutre. Pour une alternative de même contexte.</p></article><article><span className={styles.smallLabel}>TERTIAIRE</span><Button variant="ghost" onClick={() => setMessage('Action tertiaire testée.')}>Action tertiaire</Button><p>Action discrète, fond visible au survol, zone cliquable de 44 px minimum.</p></article><article><span className={styles.smallLabel}>LIEN TEXTE</span><TextLink href="/lab">Inside the lab</TextLink><p>Un soulignement fin et permanent, sans icône décorative.</p></article></div>
        <div className={styles.states}><Button disabled>Indisponible</Button><Button variant="destructive" onClick={() => setMessage('Exemple d’action destructive uniquement : aucune donnée supprimée.')}>État destructif</Button><p>Tab pour parcourir les contrôles : le focus reste visible sur les trois fonds.</p></div>
        <p role="status" className={styles.feedback}>{message || 'Les actions de cette page sont des démonstrations.'}</p>
      </Chapter>
      <Chapter id="patterns" number="05" title="Les composants du portfolio.">
        <div className={styles.patternGrid}>
          <article><h3>Accordéon</h3><p>Replié par défaut. Le chevron indique une action, il reste donc présent.</p><Accordion type="single" collapsible>{[['research','Research & strategy','Partir des personnes et des usages avant de prototyper.'],['build','Design & build','Transformer une intention en expérience testable.']].map(([id,title,text]) => <AccordionItem value={id} key={id}><AccordionTrigger>{title}</AccordionTrigger><AccordionContent>{text}</AccordionContent></AccordionItem>)}</Accordion></article>
          <article><h3>Personnalité</h3><p>Des échelles descriptives, pas des curseurs à manipuler.</p><div className={styles.stack}>{personalityTraits.slice(0,3).map(trait => <TraitScale key={trait.left} {...trait} />)}</div></article>
          <article><h3>Parcours</h3><JourneyTimeline items={journeyMilestones.slice(-2)} /></article>
          <article><h3>Tags et chargement</h3><div className={styles.states}><Tag>Prototype</Tag><Tag tone="accent">AI</Tag><Tag tone="success">+42 NPS</Tag><Tag tone="warning">Restricted access</Tag></div><p>Des tags sobres. Le badge d’accès restreint informe ; il ne remplace pas un contrôle d’accès.</p><GallerySkeleton /></article>
        </div>
      </Chapter>
      <Chapter id="images" number="06" title="Laisser parler le travail.">
        <p className={styles.lead}>Deux colonnes pour les projets, trois pour le Lab, une seule sur mobile. La landing garde une couverture principale large, suivie de deux projets. Pas de flèche en surimpression.</p>
        <GalleryGrid><GalleryCard href={`/projects/${project.id}`} title={project.title} description={project.description} meta={project.year} tags={project.tags} media={{ src: project.cover, alt: project.title, tone: 'muted' }} /><LabProjectCard project={labProjects[0]} /></GalleryGrid>
        <div className={styles.mediaRules}><article><MediaFrame src="/images/Applogo/profil.jpeg" alt="Mathias Wendlinger" ratio="square" tone="portrait" crop={10} sizes="(max-width: 760px) 88vw, 25vw" /><h3>Portrait</h3><p>Noir et blanc, cadrage centré. Le recadrage de 10 px est une option locale, sans modifier le fichier original.</p></article><article><MediaFrame src={project.cover} alt={project.title} fit="cover" /><h3>Couverture</h3><p>Ratio 16:9 et recadrage proportionnel. Position du sujet réglable ; saturation douce au repos.</p></article><article><MediaFrame src={project.gallery[0]?.src || project.cover} alt="Capture d’interface en entier" fit="contain" /><h3>Capture d’interface</h3><p>Image entière, couleurs fidèles. Pas de recadrage, de filtre ni de zoom au survol.</p></article></div>
        <h3 className={styles.subheading}>Galerie interactive</h3><p className={styles.lead}>Défilement manuel, zoom au clic, Échap pour fermer et flèches clavier pour naviguer. Les commandes restent sous les images et le focus revient à la miniature.</p>
        <MediaGallery images={project.gallery.slice(0,3)} />
        <div className={styles.mediaNotes}><p><strong>Images.</strong> Dimensions réservées pour éviter les sauts de mise en page. Un texte alternatif utile ; la légende apporte du contexte. Une image absente ne masque jamais le projet.</p><p><strong>Vidéos.</strong> Ratio 16:9, affiche de prévisualisation et commandes explicites. Pas de lecture automatique avec du son. Les vidéos locales et YouTube utilisent leurs lecteurs existants.</p><p><strong>Mouvement.</strong> Survol 180 ms, apparition 360 ms, zoom de couverture limité à 1,025. La préférence de mouvement réduit est respectée.</p></div>
      </Chapter>
      <Chapter id="inventory" number="07" title="Ce que le système couvre.">
        <p className={styles.lead}>Les <TextLink href="/projects">12 projets</TextLink> utilisent le même template : ouverture image ou vidéo, parcours illustré, décisions et résultats. Les sections s’adaptent aux médias disponibles, de <TextLink href="/projects/power-apps-copilot">Power Apps Copilot</TextLink> à <TextLink href="/projects/xbox-support">Xbox Support</TextLink>.</p>
        <div className={styles.tableWrap}><table><thead><tr><th>Page</th><th>Composants inventoriés</th><th>Base réutilisable</th></tr></thead><tbody>{componentInventory.map(item => <tr key={item.page}><th>{item.page}</th><td>{item.components}</td><td>{item.implementation}</td></tr>)}</tbody></table></div>
        <div className={styles.principles}><article><h3>Rythme</h3><p>Échelle de 4 px : 4, 8, 12, 16, 24, 32, 48, 64. Gouttières 4,5 % sur ordinateur et 6 % sur mobile. Lecture longue limitée à 720 px.</p></article><article><h3>Surfaces</h3><p>Images éditoriales à angles droits. Panneaux et terminal à 12 px. Boutons en pilule ; tags à 4 px. Bordures discrètes pour séparer, contrastées pour agir.</p></article><article><h3>Évolution</h3><p>Modifier les tokens avant de créer une nouvelle couleur. Utiliser les composants communs pour ajouter une page. Conserver les contenus, les liens et les images sources.</p></article></div>
        <div className={styles.destinations}><TextLink href="/">Landing</TextLink><TextLink href="/about">About</TextLink><TextLink href="/lab">Lab</TextLink><TextLink href="/projects">Tous les projets</TextLink></div>
      </Chapter>
    </div>
  </div>;
}
