/**
 * Dates de repli des fichiers de page (YYYY-MM-DD).
 * Elles servent quand git blame ne voit pas de commit fiable : clone
 * superficiel Vercel (`--depth=10`), ou dépôt absent au build.
 * À avancer en même temps que le fichier quand cette date doit rester
 * la référence sans historique git.
 */
export const pageFileUpdated = {
  "app/(marketing)/page.tsx": "2026-10-10",
  "app/(marketing)/services/page.tsx": "2026-10-10",
  "app/(marketing)/services/[slug]/page.tsx": "2026-10-08",
  "app/(marketing)/zones/page.tsx": "2026-10-09",
  "app/(marketing)/zones/[slug]/page.tsx": "2026-10-10",
  "app/(marketing)/realisations/page.tsx": "2026-10-10",
  "app/(marketing)/a-propos/page.tsx": "2026-10-09",
  "app/(marketing)/professionnels/page.tsx": "2026-10-09",
  "app/(marketing)/faq/page.tsx": "2026-10-08",
  "app/(marketing)/qualite-normes/page.tsx": "2026-10-09",
  "app/(marketing)/blog/page.tsx": "2026-10-09",
  "app/(marketing)/blog/[slug]/page.tsx": "2026-10-10",
  "app/(marketing)/contact/page.tsx": "2026-10-11",
  "app/(marketing)/plan-du-site/page.tsx": "2026-08-23",
  "app/(marketing)/mentions-legales/page.tsx": "2026-10-09",
  "app/(marketing)/politique-confidentialite/page.tsx": "2026-10-11",
} as const;

export type PageSourceFile = keyof typeof pageFileUpdated;
