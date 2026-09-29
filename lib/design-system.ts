/** Token values live in app/design-tokens.css. This module documents their roles for the /design-system page. */
export const colorRoles = [
  { name: 'Fond principal', token: 'background', usage: 'Fond de page et grands espaces.' },
  { name: 'Surface secondaire', token: 'card', usage: 'Cartes, panneaux, terminal.' },
  { name: 'Surface tertiaire', token: 'secondary', usage: 'État survolé et contenu imbriqué.' },
  { name: 'Texte principal', token: 'foreground', usage: 'Titres et information prioritaire.' },
  { name: 'Texte secondaire', token: 'muted-foreground', usage: 'Descriptions et texte courant.' },
  { name: 'Texte tertiaire', token: 'tertiary', usage: 'Dates, légendes et métadonnées.' },
  { name: 'Action principale', token: 'primary', usage: 'Bouton principal ; citron sur fond encre.' },
  { name: 'Lien', token: 'link', usage: 'Texte souligné ; aucune flèche décorative.' },
  { name: 'Lien au survol', token: 'link-hover', usage: 'Citron sur encre, olive foncé sur papier.' },
  { name: 'Accent secondaire', token: 'secondary-foreground', usage: 'Informations de soutien et badges.' },
  { name: 'Séparateur', token: 'border', usage: 'Structure discrète, sans rôle interactif.' },
  { name: 'Contour interactif', token: 'input', usage: 'Limite visible des contrôles.' },
  { name: 'Focus', token: 'ring', usage: 'Contour clavier de 2 px, décalé de 5 px.' },
] as const;
export const componentInventory = [
  { page: 'Toutes les pages', components: 'Header mw, navigation, footer, titre de page, liens et boutons', implementation: 'SiteHeader, SiteFooter, PageIntro, TextLink, Button' },
  { page: 'About', components: 'Portrait, texte éditorial, 5 échelles de personnalité, 7 étapes de parcours', implementation: 'MediaFrame, TraitScale, JourneyTimeline, narrative' },
  { page: 'Lab', components: '8 cartes, descriptions complètes, dates, tags, accès restreint, lien externe', implementation: 'GalleryCard sans image, Tag, GalleryGrid lab' },
  { page: 'Projects', components: '13 couvertures, titres, rôle, année, description et catégories', implementation: 'GalleryCard, GalleryGrid, GallerySkeleton, Tags' },
  { page: '13 études de cas', components: 'Hero image ou vidéo, résumé, parcours au scroll ou au clic, décisions, résultats, projet suivant', implementation: 'CaseStudyTemplate, ExperienceWalkthrough, MediaFigure ; contenu Markdown structuré' },
  { page: 'Médias des projets', components: 'Captures complètes, formats portrait, zoom et vidéos intégrées au récit', implementation: 'MediaFigure, Dialog, CaseStudyVideo' },
  { page: 'Landing', components: 'Hero, terminal, sélection de projets, étapes, témoignages et expérience', implementation: 'ProductionHero, Accordion, LandingRecommendations ; socle partagé' },
] as const;
