import * as React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: blue;
  font-size: 20px;
`;

export interface Props {
  /** Children to be rendered. */
  children: React.ReactNode;
  /**
   * Flag that will disable the button.
   *
   * @default false
   */
  isDisabled?: boolean;
}

function Button(props: Props) {
  return (
    <StyledButton disabled={props.isDisabled}>{props.children}</StyledButton>
  );
}

Button.defaultProps = {
  isDisabled: false
};

export { Button };
