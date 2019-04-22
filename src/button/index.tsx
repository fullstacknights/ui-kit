import * as React from "react";
import { Button as BaseButton } from "rebass";

export interface Props {
  /** Children to be rendered. */
  children: React.ReactNode;
  /**
   * Flag that will disable the button.
   *
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Type of display that the button should be shown.
   *
   * @default primary
   */
  variant: string;
}

function Button(props: Props) {
  return (
    <BaseButton variant={props.variant} disabled={props.isDisabled}>
      {props.children}
    </BaseButton>
  );
}

Button.defaultProps = {
  isDisabled: false,
  variant: "primary"
};

export { Button };
