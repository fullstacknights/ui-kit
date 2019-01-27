import * as React from "react";
import * as renderer from "react-test-renderer";

import { Button } from "../index";

describe("Button test suite", () => {
  test("Snapshot test", () => {
    const tree = renderer.create(<Button>Facebook</Button>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
