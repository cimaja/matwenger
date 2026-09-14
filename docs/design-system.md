# mw — Charte graphique et design system

Version du 13 septembre 2026. Cette charte remplace l’ancienne direction violet / émeraude. Elle formalise la landing validée et sert de référence aux pages About, Lab, Projects et aux prochains composants.

Référence interactive locale : [Design system](http://127.0.0.1:3001/design-system).

## 1. Sources et responsabilités

- **Valeurs de référence** : `app/design-tokens.css`. Couleurs, rôles par fond, typographie, espacement, rayons et durées.
- **Accès depuis TypeScript** : `lib/design-system.ts`. Références sémantiques, rôles documentés et inventaire.
- **Composants partagés** : `components/design-system/` ; styles dans `studio.module.css`.
- **Contrôles accessibles** : composants existants de `components/ui/`, notamment Button, Accordion et Dialog.
- **Documentation vivante** : `/design-system`. Elle utilise les mêmes composants que les pages et des contenus réels du portfolio.

Changer un token avant d’ajouter une valeur locale. Une variante doit répondre à un usage identifiable ; elle ne doit pas servir à recréer une couleur presque identique.

## 2. Direction

Une composition éditoriale, des titres généreux, des images lisibles et peu de décor. Le fond encre porte le récit. Le fond papier met les témoignages en valeur. Le citron signale l’action. La typographie apporte le caractère ; les interactions restent discrètes.

- Header : logo **mw**, navigation alignée, sans nom développé ni compteur. Un seul header est rendu par le layout global : « Projects » ouvre `/projects`, « About » ouvre `/about`, « Lab » ouvre `/lab` et « Let’s talk » ouvre `/#contact`, quelle que soit la page.
- Libellés de section : un repère à gauche ; pas d’accroche opposée à droite. Numérotation seulement pour une suite de sections, jamais dans le menu.
- Pas de flèche décorative sur les liens, les cartes ou les images.
- Les chevrons d’accordéon et les commandes précédent / suivant restent présents : ils décrivent une action.
- Aucun changement des textes sources d’About, des fiches du Lab ou des contenus de projets n’est nécessaire pour adopter la charte.

## 3. Palette de marque

| Primitive | Valeur | Usage |
| --- | --- | --- |
| `--studio-ink` | `#141511` | Fond principal |
| `--studio-surface` | `#1b1d17` | Surface secondaire, terminal, cartes |
| `--studio-elevated` | `#23261e` | Surface tertiaire, éléments imbriqués |
| `--studio-paper` | `#f1f2eb` | Texte principal sur encre, fond clair |
| `--studio-acid` | `#d4fc79` | Accent principal et fond d’action |
| `--studio-secondary` | `#bccf98` | Accent secondaire discret, résultats positifs |
| `--studio-muted` | `#9b9f92` | Texte tertiaire sur encre |
| `--studio-line` | `#34362f` | Séparateurs décoratifs sur encre |

**Secondaire** décrit deux rôles différents : `--secondary` est une surface ; `--secondary-foreground` est son texte. Ne pas utiliser un nom de teinte comme équivalent automatique d’un rôle.

### Rôles selon le contexte

Les thèmes sont des contextes de section, pas une préférence globale clair / sombre.

| Rôle | Encre | Papier | Citron |
| --- | --- | --- | --- |
| Fond `--background` | `#141511` | `#f1f2eb` | `#d4fc79` |
| Surface `--card` | `#1b1d17` | `#e5e8dc` | `#e4ffa2` |
| Texte `--foreground` | `#f1f2eb` | `#141511` | `#141511` |
| Texte secondaire `--muted-foreground` | `#b1b5a7` | `#4b5840` | `#465432` |
| Texte tertiaire `--tertiary` | `#9b9f92` | `#5e6853` | `#536639` |
| Action `--primary` | `#d4fc79` | `#141511` | `#141511` |
| Texte du bouton `--primary-foreground` | `#141511` | `#f1f2eb` | `#d4fc79` |
| Lien `--link` | `#f1f2eb` | `#141511` | `#141511` |
| Lien au survol `--link-hover` | `#d4fc79` | `#405d20` | `#405d20` |
| Contour interactif `--input` | `#7b826e` | `#6d765f` | `#637344` |
| Focus `--ring` | `#d4fc79` | `#405d20` | `#141511` |

`--border` sépare des surfaces ; il n’identifie pas à lui seul un bouton ou un champ. Utiliser `--input` pour un contour interactif. Le citron clair ne sert pas de texte sur le papier : le rôle de lien y devient encre ou olive foncé.

### États

`--success`, `--warning`, `--destructive`, `--info` se déclinent pour chaque contexte. Ils sont réservés au sens d’un état, accompagnés d’un libellé. Les catégories de projets n’utilisent plus une couleur par technologie : des tags neutres assurent la cohérence.

### Utilisation

```tsx
<section data-studio-theme="paper">
  <TextLink href="/lab">Inside the lab</TextLink>
  <Button>Action principale</Button>
</section>
```

```css
.description { color: hsl(var(--muted-foreground)); }
.panel { background: hsl(var(--card)); border: 1px solid hsl(var(--border)); }
```

Les utilitaires `accent-purple` et `accent-green` restent des alias de compatibilité pour les anciens composants. Leur valeur suit les nouveaux rôles. Ne pas utiliser ces noms pour du nouveau code.

## 4. Typographie

| Usage | Famille | Taille | Poids / interligne |
| --- | --- | --- | --- |
| Hero | Inter + accent Fraunces | 48–108 px, fluide | 450 / 1,04 |
| Titre de page | Inter + accent Fraunces | 40–80 px, fluide | 450 / 1,06 |
| Titre de section | Inter + accent Fraunces | 32–56 px, fluide | 450 / 1,15 |
| Titre de carte | Inter | 22 px | 500 / 1,35 |
| Introduction, récit | Inter | 17–20 px, fluide | 400 / 1,8–1,85 |
| Texte courant | Inter | 16 px | 400 / 1,75 |
| Liens, navigation, légendes | Inter | 14 px | 400–500 / 1,6 |
| Repères, dates, tags | JetBrains Mono | 12 px | 400 / 1,6 |
| Citations | Fraunces | 32–54 px, 28–36 px sur mobile | 400 / 1,45 |

- Un `h1` par page ; des `h2` pour les sections et `h3` pour les cartes.
- Les titres restent en sans-serif ; `<em>` ajoute une courte inflexion Fraunces, sans passer tout le texte en italique.
- Aucun point final dans les titres, y compris avant un saut de ligne ou à la fin d’une expression en italique. Les paragraphes, citations, légendes et libellés conservent leur ponctuation.
- Texte courant à 16 px minimum. 12 px réservé aux métadonnées secondaires.
- Limiter la lecture longue à 720 px. Éviter les hauteurs fixes sur les textes et les descriptions tronquées du Lab.
- Les valeurs sont exprimées en rem ou en `clamp()` pour conserver le zoom du navigateur.

## 5. Boutons et liens

| Composant | Usage | Traitement |
| --- | --- | --- |
| `Button` default | Action dominante | Plein, citron sur encre, encre sur fonds clairs |
| `Button` outline | Alternative | Contour `--input`, fond neutre |
| `Button` secondary | Action de soutien | Surface secondaire |
| `Button` ghost | Action discrète | Sans fond au repos, surface au survol |
| `Button` destructive | Action de suppression réelle | Rôle destructif et libellé explicite |
| `TextLink` / Button link | Navigation textuelle | Soulignement permanent, épaisseur 1 px, décalage 6 px |
| Bouton icon | Commande de galerie / lecture | 44 × 44 px minimum et nom accessible |

Une navigation est un lien ; une modification d’état est un bouton. Pas de bouton imbriqué dans une carte-lien. Les actions principales n’ont pas besoin d’une flèche.

Les cibles ont au moins 44 px de haut (48 px par défaut, 64 px pour une action large). État désactivé natif, focus visible de 2 px, contour décalé et état de chargement annoncé. Utiliser `Button asChild` pour présenter une navigation comme bouton.

```tsx
<Button asChild size="lg"><Link href="/projects">View all projects</Link></Button>
<TextLink href="/about">A little more about me</TextLink>
```

## 6. Espacement, surfaces et responsive

- Unité de base 4 px : **4 / 8 / 12 / 16 / 24 / 32 / 48 / 64**.
- Sections : 56–104 px verticalement. Gouttières : 4,5 % sur ordinateur ; 6 % sous 760 px.
- Conteneur de liste : 1440 px maximum. Conteneur éditorial : 720 px.
- Projet : image puis légende, sans boîte décorative autour du tout.
- Prototype sans image : panneau de 12 px de rayon et 28 px de padding.
- Terminal, modal et panneau : rayon 12 px. Contrôles principaux : pilule. Tags : 4 px.
- La structure change à 760 px et 1100 px. Ne pas résoudre un débordement en réduisant le texte à 10–11 px.

## 7. Galeries et images

### Grilles

| Cas | Ordinateur | Tablette | Mobile | Média |
| --- | --- | --- | --- | --- |
| Tous les projets | 2 colonnes | 2 colonnes | 1 colonne | Couvertures 16:9 |
| Lab | 3 colonnes | 2 colonnes | 1 colonne | Pas d’image inventée ; cartes éditoriales existantes |
| Landing | 1 projet large puis 2 projets | Composition actuelle | 1 colonne | Lead 2,15:1 ; couvertures existantes |
| Galerie de détails | Bande défilante manuelle | Toucher / boutons | Balayage natif | Images entières, `contain` |

Les vignettes sont directement cliquables. Pas de bouton rond ni de flèche en surimpression. Le titre se souligne au survol et au focus. Le lien vers la collection complète se place après la galerie de la landing, dans un bouton visible.

### MediaFrame

| Paramètre | Règle |
| --- | --- |
| `ratio` | `landscape` 16:9, `wide` 2,15:1, `square` 1:1, `portrait` 4:5 |
| `fit="cover"` | Couverture ou photo : recadrage proportionnel possible |
| `fit="contain"` | Interface, schéma, tableau : image entière, sans rognage |
| `tone="color"` | Par défaut : respecter les couleurs du produit |
| `tone="muted"` | Couverture éditoriale légèrement désaturée, couleur au survol |
| `tone="portrait"` | Noir et blanc, contraste modéré |
| `position` | Point focal explicite, `center` par défaut |
| `crop` | Marge de recadrage en px ; 10 px pour le portrait de la landing. Aucun effet sur `contain` |
| `sizes`, `priority` | Taille d’affichage prévue ; priorité uniquement aux images initialement visibles |

```tsx
<MediaFrame src={cover} alt={title} ratio="landscape" fit="cover" tone="muted" />
<MediaFrame src={screenshot} alt="Détail de l’interface" fit="contain" />
<MediaFrame src={portrait} alt="Mathias Wendlinger" ratio="square" tone="portrait" crop={10} />
```

- Garder les fichiers originaux ; le cadrage est effectué dans le composant.
- Réserver le ratio avant le chargement pour éviter les déplacements de contenu.
- Fournir un texte alternatif descriptif. `alt=""` seulement pour un élément décoratif ou redondant.
- La légende contextualise l’image ; elle ne répète pas mécaniquement l’alt.
- Le projet reste visible si son image manque ou échoue : fallback explicite et carte accessible.
- Pour les futures livraisons d’assets : WebP / AVIF pour les photos et couvertures, PNG ou WebP sans perte pour les interfaces détaillées. Préparer les largeurs utiles (960 / 1600 / 2400 px selon l’usage) et éviter les sources plus petites que l’affichage.
- Le site utilise un export Next.js statique avec images non optimisées côté serveur : la compression des fichiers doit être préparée avant publication. `sizes` ne compresse pas à lui seul les assets existants.

### Visionneuse

`MediaGallery` remplace la galerie automatique précédente : pas de défilement imposé ni de duplication des images. Boutons de navigation sous les vignettes, clavier gauche / droite dans la visionneuse, fermeture Échap, piège de focus assuré par Radix Dialog et retour au bouton d’ouverture. Les images agrandies restent intégralement visibles avec leur légende.

### Vidéo

Les études de cas utilisent `CaseStudyVideo`, avec le lecteur `YouTube` existant pour ce format. Ratio 16:9, affiche de prévisualisation, commandes de lecture accessibles. Pas de lecture avec son déclenchée automatiquement. Les vidéos sont intégrées à l’ouverture et aux décisions qu’elles illustrent. Prévoir sous-titres ou transcription pour les futures vidéos parlées. Ne pas transformer une vidéo de contenu en arrière-plan décoratif. Les autres lecteurs restent disponibles dans la bibliothèque de composants.

## 8. Autres composants

- **Accordéon** : structure Radix existante, fermeture par défaut pour les étapes et les rôles de la landing. Chevron fonctionnel, activation clavier, taille de texte 16 px.
- **TraitScale** : jauge descriptive de personnalité, pas un contrôle éditable. Valeur et deux extrémités exposées aux technologies d’assistance.
- **JourneyTimeline** : liste ordonnée, année, lieu, titre, texte et badge de résultat facultatif.
- **Tag / Tags** : catégories neutres ; états nommés et couleur sémantique. Un statut « Restricted access » indique le caractère protégé d’un prototype, sans prétendre appliquer une authentification locale.
- **GallerySkeleton** : ratio et rythme de la carte finale. Pas d’animation continue nécessaire.
- **Terminal** : monospace, hiérarchie entre commande, année, détail et résultat. Animation brève, rejouable, désactivée en mouvement réduit.
- **Témoignages** : highlights uniquement sur la landing, verbatim centré, attribution, précédent / suivant. Pas de rangée d’avatars ni de lecture automatique.

## 9. Mouvement et accessibilité

- Couleurs et survol : 180 ms. Apparition : 360 ms. Courbe `cubic-bezier(.2,.7,.2,1)`.
- Témoignages : sortie de 180 ms puis entrée de 360 ms, fondu et déplacement horizontal discret dans le sens de navigation. Citation et attribution restent groupées, sans lecture automatique.
- Chiffres d’impact : incrémentation sur 900 ms à leur première apparition, avec un décalage de 160 ms entre les colonnes de gauche à droite. Les unités restent visibles et les lecteurs d’écran reçoivent directement les valeurs finales.
- Personnalité : chaque point part du centre vers sa valeur sur 850 ms, avec 90 ms de décalage entre les lignes d’About. `TraitScale` partage ce comportement avec le design system. Sans animation, la valeur finale reste affichée.
- Zoom de couverture : 1,025 maximum ; aucune transformation d’une capture `contain`.
- Respect de `prefers-reduced-motion`. La lecture d’un contenu ne doit pas dépendre d’une animation.
- Vérifier au minimum 4,5:1 pour les textes courants et 3:1 pour les contours de contrôles et le focus. Les séparateurs décoratifs ne sont pas des contours de contrôle.
- Tous les liens textuels sont identifiables sans dépendre uniquement de leur couleur.
- Les commandes sans texte visible ont un nom accessible. Les états ne reposent jamais seulement sur une teinte.

## 10. Inventaire réalisé et adoption

L’inventaire est fondé sur les composants actifs des routes du dépôt correspondant au site de production. Les composants historiques non importés par ces routes ne sont pas traités comme des besoins nouveaux. Les pages distantes n’ont pas pu être récupérées pendant cette passe ; le code source actif fait référence.

| Page / source | Composants existants | Adoption de la charte |
| --- | --- | --- |
| `app/about/page.tsx` | Portrait, introduction, récit | PageShell, PageIntro, MediaFrame, style de lecture commun |
| `components/about/personality.tsx` | 5 traits | TraitScale, valeurs inchangées |
| `components/about/journey.tsx` | 7 étapes de parcours | JourneyTimeline, lieux / résultats conservés |
| `app/lab/page.tsx` | 8 prototypes et expériences | Grille 3 / 2 / 1, cartes sans image, textes complets |
| `components/lab/lab-project-card.tsx` | Titre, description, date, tags, lien externe, verrou | GalleryCard, Tags, statut d’accès explicite |
| `app/projects/page.tsx` | Collection de 12 projets | Grille 2 / 1, PageIntro, cartes et skeletons partagés |
| `components/projects/project-card.tsx` | Couverture, rôle, année, description, catégories | GalleryCard et MediaFrame, aucune flèche décorative |
| `components/projects/image-gallery.tsx` | Carrousel, zoom, navigation | MediaGallery partagé et Dialog accessible |
| `components/projects/video-gallery.tsx` | Vidéo locale ou YouTube, précédent / suivant | Lecteurs conservés, boutons communs et noms accessibles |
| `components/projects/case-study/` | 12 études de cas, image ou vidéo, parcours, décisions, résultats | CaseStudyTemplate commun, médias intégrés au récit, captures portrait et paysage |
| Navigation et footer | Versions différentes entre landing et pages internes | SiteHeader / SiteFooter partagés, logo mw, liens soulignés |
| Landing | Hero, galerie, méthode, expérience, témoignages, contact | Palette partagée, header / footer communs ; composition validée conservée |

Les 12 pages de détails utilisent le template éditorial décrit ci-dessous. Chaque fiche fournit son propre récit, avec des médias associés aux explications. Les notes Markdown d’origine, les liens et tous les fichiers médias sont conservés. Les descriptions des captures ont été ajustées d’après les assets, notamment pour distinguer les écrans produits des explorations et spécifications de design. Les anciens composants non montés restent dans le dépôt.

## 11. Ajouter une page

1. Utiliser PageShell et PageIntro pour la structure.
2. Choisir un contexte encre, papier ou citron ; utiliser les rôles sémantiques.
3. Réutiliser Button / TextLink / Tag / GalleryGrid / GalleryCard / MediaFrame.
4. Pour une capture, choisir `contain` ; pour une couverture, valider le cadrage `cover`.
5. Préserver la hiérarchie des titres, les contenus et la navigation clavier.
6. Ajouter toute variante réutilisable à `/design-system` et à cette documentation.
7. Vérifier les types, la compilation, les contrastes concernés et les routes modifiées.

## 12. Template d’étude de cas — les 12 projets

Exemple local : `/projects/power-apps-copilot`. Le composant `components/projects/case-study/case-study-template.tsx` est commun : aucune condition liée au nom du projet ni texte Copilot dans le template.

### Rythme éditorial

1. **Ouverture** : titre Inter / Fraunces, introduction, rôle / entreprise / année, puis grand média. La couverture peut présenter une vidéo, déclenchée volontairement au clic. Commandes natives ensuite, y compris pendant la pause. Les projets sans vidéo utilisent une capture ou leur couverture.
2. **Résumé** : problème, contribution, résultat. Trois colonnes sur ordinateur, empilées sur mobile.
3. **Parcours** : étapes courtes associées à des captures complètes. Sur un écran d’au moins 1 024 × 650 px, avec animations autorisées, le média reste visible pendant le défilement. Les boutons permettent aussi d’aller à une étape. Le défilement de la page reste natif.
4. **Décisions** : texte + image, texte + vidéo, ou texte seul. Le rôle du designer et du manager est expliqué sans attribuer le travail de toute l’équipe à une seule personne.
5. **Résultats** : surface papier, résultats documentés ou jalons. Les chiffres ne sont pas obligatoires.
6. **Fin de page** : notes Markdown d’origine dans un accordéon fermé, puis prochain projet dans l’ordre du portfolio. La section « A closer look » est supprimée de toutes les études de cas.

Les parties parcours, décisions, résultats et média d’ouverture sont facultatives. La numérotation s’adapte aux parties présentes. Sur mobile, petite hauteur ou préférence de mouvement réduit, les captures sont empilées avec leur texte ; aucun média ne dépend du défilement pour être consulté.

Exemples de variantes :

- **Power Apps Copilot, AI Recorder, Self-healing, NL2flow, AI Builder, Fraud Protection** : démonstration en ouverture et trois étapes illustrées.
- **Dynamics 365** : vidéo avant / après, décisions textuelles et lien visible vers le prototype protégé. Aucun parcours fictif n’est ajouté en l’absence de captures.
- **Microsoft Books** : vidéos associées aux décisions sur la typographie et les annotations.
- **Music Taste Profile, Your Groove** : parcours de découverte musicale et place donnée aux explorations de design.
- **Xbox Music** : ouverture sur une capture et parcours illustré sans vidéo.
- **Xbox Support** : couverture photographique et captures de téléphone au format portrait.

### Réutiliser le template

Ajouter une propriété `caseStudy` au front matter du fichier `content/projects/<slug>.md`. Sans cette propriété, le projet conserve son rendu actuel. Les galeries, vidéos et notes Markdown existantes restent la source du contenu.

```yaml
caseStudy:
  headline:
    title: "Une transformation concrète"
    emphasis: "en quelques mots"
  introduction: "Le contexte et ma contribution en deux phrases."
  leadMedia:
    kind: image # image ou video
    index: 1    # position dans gallery ou videos, à partir de 1
    caption: "Ce que ce média permet de comprendre."
  overview:
    - label: "The challenge"
      title: "Le problème à résoudre"
      body: "Une explication courte et factuelle."
  experience:
    title: "Un parcours"
    emphasis: "à découvrir"
    description: "La tâche suivie dans cet exemple."
    steps:
      - label: "Ask"
        title: "Une intention"
        body: "Ce que fait la personne à cette étape."
        image: 1
        caption: "Une légende qui explique la capture."
  decisions:
    title: "Les choix"
    emphasis: "qui comptent"
    description: "Mon rôle dans la direction du projet."
    items:
      - title: "Une décision concrète"
        body: "Pourquoi ce choix et ce qu’il change."
        # image: 2, ou video: 2 ; jamais les deux
        # caption facultative
  outcomes:
    title: "Ce que le travail"
    emphasis: "a rendu possible"
    description: "Des résultats étayés par le contenu du projet."
    items:
      - label: "Un jalon"
        title: "Un résultat"
        body: "Une preuve ou un apprentissage documenté."
```

`lib/project-case-study.ts` définit et valide le schéma, y compris les références aux images et vidéos. Toutes les fiches fournissent des exemples de contenu en anglais. Pour un nouveau projet, modifier la fiche Markdown suffit ; aucun JSX supplémentaire n’est nécessaire.

Une propriété facultative `links` dans `caseStudy` contient des liens d’action `{ label, href, note? }`. Elle sert par exemple au lien vers le prototype Dynamics 365, avec la mention visible de sa protection par mot de passe. Les liens externes sont nommés comme tels pour les lecteurs d’écran.

### Médias

- `MediaFigure` : capture `contain`, légende, agrandissement via Radix Dialog, Échap et retour du focus. Aucune flèche décorative ni recadrage des interfaces.
- Chaque entrée de `gallery` peut préciser `ratio: portrait`, `square`, `landscape` ou `wide`. Les captures verticales gardent leur format, avec une largeur limitée dans le parcours fixe et la galerie pour rester lisibles sans déborder de l’écran.
- `CaseStudyVideo` : lecteur local avec bouton de lecture nommé, affiche et contrôles natifs ; reprend également le lecteur YouTube existant. Pas de lecture automatique avec son. Fournir une transcription ou des sous-titres pour les futures vidéos parlées.
- Les pages présentent les médias associés à l’ouverture, au parcours et aux décisions. Les autres fichiers et leurs références restent conservés dans les fiches sources pour un usage ultérieur. `MediaGallery` et `CaseStudyVideoGallery` restent disponibles comme composants, mais ne sont pas montés dans le template d’étude de cas.
- Les transitions du parcours durent 360 ms et sont désactivées en mouvement réduit. La couleur et le soulignement identifient ensemble l’étape sélectionnée.
