import * as React from "react";
import { storiesOf } from "@storybook/react";

import { Button } from "./index";

const stories = storiesOf("Button", module);

stories
  .add("Primary", () => <Button variant="primary">Hello TypeScript</Button>, {
    info: { inline: true }
  })
  .add(
    "Secondary",
    () => <Button variant="secondary">Hello TypeScript</Button>,
    {
      info: { inline: true }
    }
  )
  .add(
    "Disabled",
    () => (
      <Button variant="primary" isDisabled={true}>
        Hello TypeScript
      </Button>
    ),
    {
      info: { inline: true }
    }
  );
