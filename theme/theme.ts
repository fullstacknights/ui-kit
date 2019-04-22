import { Colors, colors } from "./colors";
import { Shadows, shadows } from "./shadows";
import { space, radii } from "./units";
import {
  TypographyElement,
  fontSizes,
  lineHeights,
  FontWeights,
  fontWeights
} from "./typography";
import { Variant, buttons } from "./variants";

interface BaseTheme {
  colors: Colors;
  shadows: Shadows;
  fontSizes: TypographyElement;
  fontWeights: FontWeights;
  lineHeights: TypographyElement;
  buttons: Variant;
  space: number[];
  radii: number[];
}

const Theme: BaseTheme = {
  colors,
  shadows,
  fontSizes,
  fontWeights,
  lineHeights,
  buttons,
  space,
  radii
};

export { Theme };
