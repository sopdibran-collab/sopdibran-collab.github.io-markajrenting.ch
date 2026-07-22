import Link from "next/link";

/**
 * Premier focus clavier : saute le chrome sticky pour atteindre le contenu.
 * Visible uniquement au focus (accessibilité QC Obsidian).
 */
export function SkipLink() {
  return (
    <Link href="#contenu-principal" className="skip-link">
      Aller au contenu
    </Link>
  );
}
