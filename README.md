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

Chaque push sur `main` lance [`.github/workflows/indexnow.yml`](.github/workflows/indexnow.yml). Le job attend que le déploiement Vercel **Production** de ce commit soit en succès, vérifie le fichier clé (dans le repo et en HTTPS), puis envoie **toutes** les URL de `https://markajrenting.ch/sitemap.xml` à IndexNow. Aucun secret GitHub n’est requis : la clé est publique.

Lancement manuel, quand la production est déjà en ligne : GitHub → Actions → **IndexNow** → **Run workflow**. Ce déclencheur (`workflow_dispatch`) n’attend pas un nouveau déploiement.

```bash
# Dry-run : vérifie la clé et affiche les URL, sans appeler l’API
npm run indexnow -- --dry-run
INDEXNOW_DRY_RUN=1 npm run indexnow
```

Soumission ciblée via l’API sécurisée (secret serveur uniquement — jamais dans le bundle client). Le workflow ne passe pas par cette route :

1. Dans Vercel → Project → Settings → Environment Variables, ajouter `INDEXNOW_SUBMIT_SECRET` (ex. `openssl rand -hex 24`). Voir `.env.example`.
2. Après deploy :

```bash
curl -X POST "https://markajrenting.ch/api/indexnow" \
  -H "Authorization: Bearer $INDEXNOW_SUBMIT_SECRET" \
  -H "Content-Type: application/json"
```

L’endpoint accepte aussi un corps `{ "urls": ["https://markajrenting.ch/..."] }` pour limiter la liste. Sans corps, il envoie le jeu local historique (accueil, services, zone Fribourg), pas le sitemap entier.

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
- `scripts/ping-indexnow.mjs` — ping CLI du sitemap complet (workflow + `npm run indexnow`)
- `.github/workflows/indexnow.yml` — déclenchement après le déploiement Production

## Contact entreprise

Markaj Renting SA — Route de Schiffenen 40, 1700 Fribourg  
info@markajrenting.ch — 079 430 18 13
