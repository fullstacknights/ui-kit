import { Variants } from "./constants";
import { colors } from "./colors";
import { radii } from "./units";

interface BaseButton {
  backgroundColor: string;
  color?: string;
  borderColor?: string;
}

interface Button extends BaseButton {
  borderRadius: number;
  borderStyle: string;
  borderWidth: number;
  cursor?: string;
  "&:disabled": BaseButton;
  "&:hover"?: BaseButton;
  "&:focus"?: BaseButton;
  "&:active"?: BaseButton;
}

interface Variant {
  [Variants.primary]: Button;
  [Variants.secondary]: Button;
}

const { primary, secondary, background, text, common } = colors;
const borderStyle: {
  borderWidth: number;
  borderStyle: string;
} = {
  borderWidth: 1,
  borderStyle: "solid"
};
function getButtonStyle({ bg, color }: { bg: string; color: string }) {
  return {
    backgroundColor: bg,
    borderColor: bg,
    color: color
  };
}

const disabled = {
  ...getButtonStyle({ bg: background.disabled, color: text.disabled }),
  ...borderStyle,
  borderRadius: radii[0],
  cursor: "not-allowed",
  "&:hover": getButtonStyle({ bg: background.disabled, color: text.disabled })
};

const buttons: Variant = {
  [Variants.primary]: {
    ...getButtonStyle({ bg: primary.default, color: common.white }),
    ...borderStyle,
    borderRadius: radii[0],
    "&:disabled": disabled,
    "&:hover": getButtonStyle({ bg: primary.hover, color: common.white }),
    "&:focus": getButtonStyle({ bg: primary.hover, color: common.white }),
    "&:active": getButtonStyle({ bg: primary.pressed, color: text.pressed })
  },
  [Variants.secondary]: {
    ...getButtonStyle({ bg: secondary.default, color: common.white }),
    ...borderStyle,
    borderRadius: radii[0],
    "&:disabled": disabled,
    "&:hover": getButtonStyle({ bg: secondary.hover, color: common.white }),
    "&:focus": getButtonStyle({ bg: secondary.hover, color: common.white }),
    "&:active": getButtonStyle({ bg: secondary.pressed, color: text.pressed })
  }
};

export { Variant, buttons };
