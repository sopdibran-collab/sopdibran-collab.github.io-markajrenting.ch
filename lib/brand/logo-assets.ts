export type LogoVariant = "full" | "white" | "monogram" | "vertical" | "text";

type LogoAsset = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export const logoAssets = {
  full: {
    src: "/brand/markaj-horizontal.svg",
    width: 4000,
    height: 1532,
    alt: "Markaj Renting SA",
  },
  white: {
    src: "/brand/markaj-horizontal-white.svg",
    width: 4000,
    height: 1532,
    alt: "Markaj Renting SA",
  },
  monogram: {
    src: "/brand/markaj-favicon.svg",
    width: 2313,
    height: 2391,
    alt: "Markaj Renting SA",
  },
  vertical: {
    src: "/brand/markaj-vertical.svg",
    width: 4000,
    height: 2702,
    alt: "Markaj Renting SA",
  },
  text: {
    src: "/brand/markaj-textonly.svg",
    width: 4000,
    height: 948,
    alt: "Markaj Renting SA",
  },
} as const satisfies Record<LogoVariant, LogoAsset>;

export const brandFavicon = {
  svg: "/brand/markaj-favicon.svg",
  png32: "/brand/markaj-favicon-32.png",
  appleTouch: "/brand/markaj-apple-touch-icon.png",
} as const;
