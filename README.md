# markajrenting.ch

Site web de **Markaj Renting SA** — plâtrerie, peinture, faux-plafonds, isolation et rénovation en Suisse romande.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (design system Markaj)
- Déploiement Vercel
- SEO / AEO / JSON-LD / IndexNow

## Développement local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Build production

```bash
npm run build
npm start
```

## IndexNow (Bing / Yandex)

IndexNow accélère la prise en compte des URLs par Bing et moteurs compatibles. Ce n’est **pas** un substitut à Google Search Console.

### Fichier clé (public, obligatoire)

- Clé : `a9fd595d-cd70-4d5d-ae86-48aaeeac42e9`
- Fichier servi : [`/{key}.txt`](https://markajrenting.ch/a9fd595d-cd70-4d5d-ae86-48aaeeac42e9.txt)
- Source repo : `public/a9fd595d-cd70-4d5d-ae86-48aaeeac42e9.txt`

### Quand / comment soumettre

Après un deploy important (nouveaux contenus services / zone siège), soumettre au minimum : homepage, `/services/*`, `/zones/fribourg`.

```bash
# Depuis la machine ou CI (après que le site soit live)
npm run indexnow

# Dry-run (affiche le payload JSON sans appeler l’API)
INDEXNOW_DRY_RUN=1 npm run indexnow
```

Ou via l’API sécurisée (secret serveur uniquement — jamais dans le bundle client) :

1. Dans Vercel → Project → Settings → Environment Variables, ajouter `INDEXNOW_SUBMIT_SECRET` (ex. `openssl rand -hex 24`). Voir `.env.example`.
2. Après deploy :

```bash
curl -X POST "https://markajrenting.ch/api/indexnow" \
  -H "Authorization: Bearer $INDEXNOW_SUBMIT_SECRET" \
  -H "Content-Type: application/json"
```

Optionnel : Deploy Hook / cron Vercel qui appelle `GET /api/indexnow?secret=…` après promotion production.

### Bing Webmaster (manuel — Dibran)

IndexNow ne remplace pas la vérification de propriété Bing. Si ce n’est pas déjà fait :

1. [Bing Webmaster Tools](https://www.bing.com/webmasters) → ajouter `https://markajrenting.ch`
2. Vérifier la propriété (DNS / meta / fichier)
3. Soumettre le sitemap : `https://markajrenting.ch/sitemap.xml`

## Structure

- `app/(marketing)/` — pages publiques
- `app/api/indexnow` — soumission IndexNow (auth `INDEXNOW_SUBMIT_SECRET`)
- `components/` — UI, sections, layouts, SEO
- `lib/content/` — contenus (services, zones, FAQ, blog)
- `lib/seo/` — metadata, JSON-LD, IndexNow
- `scripts/submit-indexnow.mjs` — ping CLI post-deploy

## Contact entreprise

Markaj Renting SA — Route de Schiffenen 40, 1700 Fribourg  
info@markajrenting.ch — 079 430 18 13
