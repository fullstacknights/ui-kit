import { Sizes, Headers } from "./constants";

interface TypographyElement {
  [Sizes.xs]: number;
  [Sizes.sm]: number;
  [Sizes.rg]: number;
  [Sizes.md]: number;
  [Sizes.lg]: number;
  [Sizes.xl]: number;
  [Headers.subheader2]?: number;
  [Headers.subheader]?: number;
  [Headers.header]?: number;
}

interface FontWeights {
  lite: number;
  normal: number;
  bold: number;
}

// Line height scale
const LINE_HEIGHTS_SCALE = [19, 23, 26, 32, 39, 49];

// Line height scale object
const lineHeights: TypographyElement = {
  [Sizes.xs]: LINE_HEIGHTS_SCALE[0],
  [Sizes.sm]: LINE_HEIGHTS_SCALE[1],
  [Sizes.rg]: LINE_HEIGHTS_SCALE[2],
  [Sizes.md]: LINE_HEIGHTS_SCALE[3],
  [Sizes.lg]: LINE_HEIGHTS_SCALE[4],
  [Sizes.xl]: LINE_HEIGHTS_SCALE[5]
};

// Font size scale
const FONT_SIZES_SCALE = [12, 14, 16, 20, 24, 30, 36, 48, 60];

// Font size scale object
const fontSizes: TypographyElement = {
  [Sizes.xs]: FONT_SIZES_SCALE[0],
  [Sizes.sm]: FONT_SIZES_SCALE[1],
  [Sizes.rg]: FONT_SIZES_SCALE[2],
  [Sizes.md]: FONT_SIZES_SCALE[3],
  [Sizes.lg]: FONT_SIZES_SCALE[4],
  [Sizes.xl]: FONT_SIZES_SCALE[5],
  [Headers.subheader2]: FONT_SIZES_SCALE[6],
  [Headers.subheader]: FONT_SIZES_SCALE[7],
  [Headers.header]: FONT_SIZES_SCALE[8]
};

const fontWeights: FontWeights = {
  lite: 300,
  normal: 400,
  bold: 600
};

export { TypographyElement, fontSizes, lineHeights, FontWeights, fontWeights };
