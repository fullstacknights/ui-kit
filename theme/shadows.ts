import { States } from "./constants";

interface Shadows {
  [States.default]: string;
  [States.hover]: string;
}

const SHADOW_DEFAULT = "0px 1px 3px rgba(0, 0, 0, 0.07)";
const SHADOW_HOVER = "0px 5px 10px rgba(0, 0, 0, 0.1)";

const shadows: Shadows = {
  default: SHADOW_DEFAULT,
  hover: SHADOW_HOVER
};

export { Shadows, shadows };
