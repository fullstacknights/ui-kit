import { States, Variants } from "./constants";
import { palette } from "./palette";

interface ColorPalette {
  [States.default]: string;
  [States.hover]: string;
  [States.pressed]: string;
}

interface BackgroundPalette {
  [States.default]: string;
  [States.hover]: string;
  [States.disabled]: string;
}

interface TextPalette {
  [Variants.primary]: string;
  [Variants.secondary]: string;
  [States.disabled]: string;
  [States.pressed]: string;
}

interface Colors {
  brand: string;
  [Variants.primary]: ColorPalette;
  [Variants.secondary]: ColorPalette;
  success: string;
  warning: string;
  danger: string;
  stroke: string;
  background: BackgroundPalette;
  text: TextPalette;
  common: {
    white: string;
  };
}

const colors: Colors = {
  brand: palette.BRAND_COLOR,
  primary: {
    default: palette.PRIMARY_COLOR,
    hover: palette.PRIMARY_COLOR_HOVER,
    pressed: palette.PRIMARY_COLOR_PRESSED
  },
  secondary: {
    default: palette.SECONDARY_COLOR,
    hover: palette.SECONDARY_COLOR_HOVER,
    pressed: palette.SECONDARY_COLOR_PRESSED
  },
  success: palette.SUCCESS_COLOR,
  warning: palette.WARNING_COLOR,
  danger: palette.DANGER_COLOR,
  stroke: palette.STROKE_LINE_COLOR,
  background: {
    default: palette.BACKGROUND_COLOR,
    hover: palette.BACKGROUND_COLOR_HOVER,
    disabled: palette.BACKGROUND_COLOR_DISABLED
  },
  text: {
    primary: palette.PRIMARY_TEXT_COLOR,
    secondary: palette.SECODARY_TEXT_COLOR,
    disabled: palette.DISABLED_TEXT_COLOR,
    pressed: palette.PRESSED_TEXT_COLOR
  },
  common: {
    white: "#FFFFFF"
  }
};

export { Colors, colors };
