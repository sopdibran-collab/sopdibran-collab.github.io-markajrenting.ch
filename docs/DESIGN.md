---
version: alpha
name: Markaj Renting
description: >
  Proposition de système de design pour markajrenting.ch (plâtrerie, peinture, faux-plafonds, Fribourg).
  Valeurs « current » mesurées sur le site en ligne le 12.11.2026. Valeurs « target » uniquement là où
  la valeur actuelle enfreint les règles (lisibilité, AA, 44 px, 60–75 car./ligne). Structure inspirée
  du format DESIGN.md (getdesign.md / spec Google) ; aucune valeur de marque tierce reprise.
colors:
  primary: "#0a2b5e"          # marine : texte, CTA principal, header, bandeaux
  primary-deep: "#071f45"     # ombre décalée des CTA marine
  crepi: "#dbcfb0"            # accent : H1 hero accueil, CTA sur fond marine, ombres décalées
  crepi-light: "#e8e3d3"      # surface alternée des sections, bouton secondaire, chips zones
  surface: "#fafaf8"
  white: "#ffffff"
  mineral: "#8c929d"          # décoratif uniquement (jamais du texte sur blanc : 3.2:1)
  tex-warm: "#ece7e0"
  tex-sand: "#d5cfc9"
  tex-stone: "#afa8a3"
  text: "#0a2b5e"
  text-muted: "rgba(10,43,94,0.9)"      # OK ≈ 11:1 sur blanc
  text-on-primary-muted: "rgba(255,255,255,0.75)"  # OK ≈ 8:1 sur marine
  border-input: "rgba(10,43,94,0.25)"   # current ≈ 1.7:1 → FAIL
  border-input-target: "rgba(10,43,94,0.55)"  # target ≥ 3:1
  placeholder: "#9ca3af"                # current ≈ 2.5:1 → FAIL
  placeholder-target: "#6b7280"         # target ≥ 4.5:1
  focus-ring: "#0a2b5e"
typography:
  display:   { fontFamily: "Playfair Display", fontSize: 48px, fontWeight: 400, lineHeight: 1.15, letterSpacing: -0.02em, mobile: { fontSize: 28px, lineHeight: 1.25 } }   # H1, inchangé
  heading-2: { fontFamily: "Playfair Display", fontSize: 36px, fontWeight: 400, lineHeight: 1.2, letterSpacing: -0.01em, mobile: { fontSize: 26px, lineHeight: 1.25 } }  # current 40 ou 24 desktop / 20 ou 24 mobile
  heading-3: { fontFamily: "Playfair Display", fontSize: 24px, fontWeight: 400, lineHeight: 1.3, letterSpacing: 0, mobile: { fontSize: 21px, lineHeight: 1.35 } }        # current 32/24/20 desktop, 24/20 mobile
  heading-4: { fontFamily: "Source Sans 3", fontSize: 18px, fontWeight: 600, lineHeight: 1.4, letterSpacing: 0 }   # nouveau niveau pour titres de cartes / étapes
  lead:      { fontFamily: "Source Sans 3", fontSize: 20px, fontWeight: 400, lineHeight: 1.7, maxWidth: 37rem, mobile: { fontSize: 18px } }
  body:      { fontFamily: "Source Sans 3", fontSize: 18px, fontWeight: 400, lineHeight: 1.7, maxWidth: 34rem }   # current OK sauf largeur (672–768 px → 84–95 car.)
  body-sm:   { fontFamily: "Source Sans 3", fontSize: 16px, fontWeight: 400, lineHeight: 1.6 }  # current 16/1.65 OK ; 14/1.5 stats OK (≥15 conseillé)
  caption:   { fontFamily: "Source Sans 3", fontSize: 13px, fontWeight: 600, lineHeight: 1.45, letterSpacing: 0.06em, textTransform: uppercase }  # current 11px crédits photo → 13
  eyebrow:   { fontFamily: "Source Sans 3", fontSize: 13px, fontWeight: 600, lineHeight: 1.45, letterSpacing: 0.08em, textTransform: uppercase }  # « Fribourg · Suisse romande », dates de blog (13–14 OK)
  button:    { fontFamily: "Source Sans 3", fontSize: 14px, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0.06em, textTransform: uppercase, mobile: { fontSize: 15px } }  # current 12–13 px, tracking 0.11–0.12em
  label:     { fontFamily: "Source Sans 3", fontSize: 16px, fontWeight: 600, lineHeight: 1.4 }   # current OK
  ui-min:    { fontSize: 12px }  # plancher absolu (current 10.4 px pastille « 2018 »)
rounded:
  none: 0px      # current et target : tout est à angle droit, à conserver
spacing:
  unit: 4px
  scale: [4, 8, 12, 16, 24, 32, 40, 48, 64, 88]   # current : 8/10/12/14/16/24/32/40/48/56/64 → supprimer 10, 14, 56
  section-y: { desktop: 88px, tablet: 64px, mobile: 48px }   # current OK
  hero-y:    { desktop: 96px, mobile: 56px }                # current OK
  block-gap: { desktop: 32px, mobile: 24px }
  container: { maxWidth: 1152px, paddingX: { desktop: 32px, mobile: 16px } }
elevation:
  offset-crepi: "5px 5px 0 #dbcfb0"     # CTA marine
  offset-deep:  "5px 5px 0 #071f45"     # CTA crépi sur marine
  offset-hover: "2px 2px 0"             # état survol (current OK)
components:
  button-primary:   { backgroundColor: "{colors.primary}", textColor: "{colors.white}", typography: "{typography.button}", rounded: "{rounded.none}", height: 48px, paddingX: 32px, shadow: "{elevation.offset-crepi}" }
  button-primary-on-dark: { backgroundColor: "{colors.crepi}", textColor: "{colors.primary}", typography: "{typography.button}", height: 48px, shadow: "{elevation.offset-deep}" }
  button-secondary: { backgroundColor: "{colors.crepi-light}", textColor: "{colors.primary}", borderColor: "rgba(10,43,94,0.55)", typography: "{typography.button}", height: 48px }
  button-header:    { backgroundColor: "{colors.primary}", textColor: "{colors.white}", typography: "{typography.button}", height: 44px, paddingX: 16px }   # current 12px → 14px
  chip-zone:        { backgroundColor: "{colors.crepi-light}", textColor: "{colors.primary}", borderColor: "rgba(10,43,94,0.2)", fontSize: 16px, height: 44px }
  input:            { backgroundColor: "{colors.white}", textColor: "{colors.text}", borderColor: "{colors.border-input-target}", height: 50px, fontSize: 16px, padding: "12px 16px", rounded: "{rounded.none}" }
  input-focus:      { borderColor: "{colors.primary}", ring: "0 0 0 2px #fff, 0 0 0 4px #0a2b5e" }
  cookie-banner:    { maxHeight: { mobile320: 64px, mobile: 64px }, fontSize: 14px }   # current 100 px à 320
---

# Markaj Renting : DESIGN.md (proposition)

## Overview
Markaj Renting a déjà une identité « chantier soigné » : marine profond, crépi sable, serif Playfair pour les titres, sans-serif Source Sans 3 pour le texte, angles droits, ombres décalées pleines et fond quadrillé. Ce document **garde cette direction**. Il fixe des tokens uniques pour des valeurs qui varient aujourd'hui d'un gabarit à l'autre, et corrige les valeurs qui enfreignent les règles de lisibilité. Les colonnes « actuel » sont mesurées en ligne (tokens.json, 7 pages × desktop 1440 et mobile 390).

## Colors
### Brand & Accent
- **Marine #0a2b5e** (`--markaj-primary`) : texte, CTA principal, header, bandeaux de confiance, footer.
- **Crépi #dbcfb0** : accent sur fond marine (H1 de l'accueil, CTA hero), ombres décalées.
### Surface
- Blanc #fff et **crépi clair #e8e3d3**, en alternance d'une section à l'autre.
- #fafaf8 et les textures (#ece7e0, #d5cfc9, #afa8a3) servent de fonds secondaires.
### Hairlines & Borders
- Séparateurs à rgba(10,43,94,.2) : décoratifs, ça va.
- **Bordure des champs : à corriger.** Elle est aujourd'hui à rgba(10,43,94,.25), soit ≈ 1,7:1. Cible : rgba(10,43,94,.55), soit ≥ 3:1.
### Text
- Marine à 100 % ou 90 % sur blanc ou crépi clair : ≥ 10:1.
- Blanc à 75–80 % sur marine : ≈ 8:1.
- Placeholder : #9ca3af (≈ 2,5:1) → **#6b7280**.
- `mineral` #8c929d ne doit jamais servir de texte sur blanc.
### Semantic
- Pas de couleur d'erreur ni de succès mesurée : le formulaire n'a pas été soumis. À définir, ≥ 4.5:1 sur blanc, avec un message texte et pas seulement une couleur.

## Typography
### Font Family
- **Playfair Display 400** : titres H1–H3.
- **Source Sans 3** : corps, interface et boutons.
- Les deux sont chargées via next/font.
### Hierarchy (actuel mesuré → cible)

| Rôle | Desktop actuel | Mobile actuel | **Desktop cible** | **Mobile cible** |
|---|---|---|---|---|
| H1 / display | 48 / 1.15, −0.96 px | 28 / 1.25 | 48 / 1.15 (inchangé) | 28 / 1.25 (inchangé) |
| H2 | **40 / 1.2** (accueil, zones, contact, blog) · **24 / 1.3** (services) | **20 / 1.4** (accueil, zones, blog, contact) · 24 (services) | **36 / 1.2** partout | **26 / 1.25** partout |
| H3 | 32 (accueil) · 24 (zones) · 20 (services) | **24** (accueil, zones) · 20 (services) | **24 / 1.3** | **21 / 1.35** |
| H4 | absent | absent | 18 / 1.4 Source Sans 600 | 18 / 1.4 |
| Chapô | 20 / 1.7 | 18–20 / 1.7 | 20 / 1.7, max 37 rem | 18 / 1.7 |
| Corps | 18 / 1.7 ✔ | 18 / 1.7 ✔ | 18 / 1.7, **max 34 rem** | 18 / 1.7 |
| Petits blocs | 16 / 1.65 ✔ · 14 / 1.5 (stats) | idem | 16 / 1.6 (stats ≥ 15 / 1.5) | idem |
| Eyebrow / méta | 13–14 / 600, capitales | 13 ✔ | 13 / 1.45, 0.08 em | idem |
| Légende / crédit | **11 px** | **11 px** | **13 / 1.45** | 13 / 1.45 |
| Boutons | **12–13 px**, tracking 0.11–0.12 em | **12–13 px** | **14 px**, 0.06 em | **15 px**, 0.06 em |
| Labels | 16 / 600 ✔ | 16 ✔ | 16 | 16 |
| Plancher | 10.4 px (pastille « 2018 ») | idem | **≥ 12 px** | ≥ 12 px |

### Principles
1. **60–75 caractères par ligne.** Aujourd'hui, les paragraphes de 672–768 px de large font 84–95 car. sur desktop (89/91/90 sur Peinture). À 18 px de Source Sans 3, 1 caractère ≈ 7,4 px : `max-width: 34rem` donne ≈ 73 car. Le chapô à 20 px passe à `37rem`. Sur mobile (41–51 car.), rien ne change.
2. **Une seule échelle de titres pour tous les gabarits.** H2 > H3 > H4 à chaque taille d'écran. Il n'y aura plus de H2 mobile plus petit que H3.
3. **Pas de texte en capitales sous 13 px.** Les boutons sont l'action principale : 14 px minimum, tracking réduit.
4. Interlignages : corps ≥ 1.6 (1.7 actuel conservé), petits blocs ≥ 1.5, légendes ≥ 1.45. Titres : 1.15–1.35.
5. Pas d'italique décoratif, pas de troisième famille.
### Note on Font Substitutes
Repli : Georgia pour Playfair, system-ui pour Source Sans 3. Garder `font-display: swap` (next/font).

## Layout
### Spacing System
- Base 4 px. Échelle : 4 · 8 · 12 · 16 · 24 · 32 · 40 · 48 · 64 · 88.
- Supprimer les valeurs isolées 10, 14 et 56 relevées dans les gaps.
### Grid & Container
- Conteneur max 1152 px, marges 32 px en desktop et 16 px en mobile (actuel OK).
- Colonne de texte limitée à 34 rem à l'intérieur du conteneur.
### Whitespace Philosophy
- Sections : 88 px en desktop, 64 px en tablette, 48 px en mobile (actuel OK).
- Hero : 96 / 56 px.
- Entre blocs d'une même section : 32 px en desktop, 24 px en mobile.
### Responsive Strategy
- Breakpoints Tailwind sm 640, md 768, lg 1024.
- 0 débordement horizontal mesuré à 390 et à 320 : à conserver.

## Elevation & Depth
- Pas de flou : uniquement des ombres pleines décalées de 5 px (crépi sous un CTA marine, #071f45 sous un CTA crépi).
- Survol : décalage ramené à 2 px.
- C'est la signature du site, à conserver telle quelle.

## Shapes
- **Rayon 0 partout** (boutons, champs, cartes, images). À conserver.

## Components
- **Navigation**
  - Header collant, 69–82 px.
  - Desktop : logo, 5 liens, téléphone et bouton devis.
  - Mobile : logo, « DEVIS » et burger ; le menu plein écran contient téléphone et devis.
  - Cible : texte du bouton à 14 px, hauteur 44 px.
- **Hero**
  - Accueil : photo et voile marine. Alléger le voile en haut sur mobile.
  - Services avec photo : quadrillage et photo à droite.
  - 4 services, zones et pages secondaires : quadrillage seul.
  - Ne pas mélanger deux gabarits pour des pages de même rang. Si une photo Markaj réelle existe, l'utiliser ; aucune banque d'images.
- **Buttons**
  - Primaire marine, secondaire crépi clair avec bordure ≥ 3:1, 48 px, 14–15 px en capitales à 0.06 em.
  - Le bouton secondaire n'a qu'une variante : décider « avec » ou « sans » équerres d'angle.
  - Tous les CTA « Devis » d'une page service préremplissent `?service=`.
- **Inputs & Forms**
  - Hauteur 50 px, texte 16 px (pas de zoom iOS), label 16 px / 600 au-dessus du champ.
  - Bordure ≥ 3:1, placeholder ≥ 4.5:1.
  - Focus : bordure marine et anneau 2 px blanc + 4 px marine (déjà présent).
  - Erreurs : texte sous le champ et `aria-describedby`.
- **Chips zones** : 16 px, 44 px de haut (actuel OK).
- **Avis** : bloc « Avis Google », note et nombre réel d'avis, lien vers Google. Ne jamais arrondir ni compléter.
- **Bandeau cookies**
  - ≤ 64 px de haut sur mobile, texte 14 px, Refuser et Accepter de même poids.
  - Il ne doit pas recouvrir les CTA hero à 320 px.
- **Footer** : CTA « Devis gratuit » à 14 px minimum (actuellement 12 px).

## Responsive Behavior / Touch Targets
- Cibles ≥ 44 × 44 px pour les boutons, les chips et les liens du menu (actuel OK).
- Exceptions tolérées : les liens en ligne dans le texte. Le lien « En savoir plus » du bandeau (81 × 18 px) reçoit un padding vertical.
- Pas de barre CTA collante en bas : le header collant porte déjà « DEVIS ». À garder ainsi, pour ne pas ajouter une deuxième couche fixe en plus du bandeau cookies.

## Do's and Don'ts
- ✅ Garder marine/crépi, Playfair/Source Sans, les angles droits et les ombres décalées.
- ✅ Garder une seule échelle de titres et une colonne de texte de 34 rem maximum.
- ✅ Utiliser de vraies photos Markaj, avec leur crédit à 13 px.
- ❌ Pas de texte sous 12 px, pas de capitales sous 13 px.
- ❌ Pas de bordure de champ sous 3:1, pas de placeholder sous 4.5:1.
- ❌ Pas de H2 plus petit qu'un H3.
- ❌ Pas de photos de banque, d'avis ou de chiffres ajoutés.
- ❌ Ne pas toucher aux titres, H1 ni termes SEO : ce document ne règle que la forme.

## Known Gaps
- États d'erreur et de succès du formulaire : non observés, aucun envoi.
- Contraste du texte sur la photo du hero : contrôlé à l'œil, pas mesuré au pixel.
- Pas de mode sombre, pas de tokens tablette dédiés : ni mesurés ni nécessaires.

*Structure : format DESIGN.md (getdesign.md, VoltAgent/awesome-design-md, spec Google). Méthode de diagnostic : heydamir/unslop (CC BY 4.0).*
