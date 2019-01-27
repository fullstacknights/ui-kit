import * as React from "react";
import { storiesOf } from "@storybook/react";

import { Button } from "./index";

const stories = storiesOf("Button", module);

stories
  .add("with text", () => <Button>Hello TypeScript</Button>, {
    info: { inline: true }
  })
  .add(
    "with text disabled",
    () => <Button isDisabled={true}>Hello TypeScript</Button>,
    {
      info: { inline: true }
    }
  );
