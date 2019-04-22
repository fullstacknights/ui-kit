import * as React from "react";
import { Box, Flex, Text } from "rebass";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";

import { palette } from "../../theme/index";

interface ItemProps {
  bg: string;
}

const List = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  display: inline-block;
  margin: 10px;
  border-radius: ${({ theme }) => `${theme.radii[0]}px`};
  box-shadow: ${({ theme }) => theme.shadows.default};
  overflow: hidden;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.hover};
  }
`;

const Color = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props: ItemProps) => props.bg};
  height: 175px;
  width: 175px;
`;

function Palette() {
  return (
    <Flex flexWrap="wrap" width="100%">
      <List>
        {Object.keys(palette).map((key, index) => (
          <Item key={index}>
            <Color bg={palette[key]} />
            <Box p="5px">
              <Text>{palette[key]}</Text>
              <Text fontSize={10}>{key}</Text>
            </Box>
          </Item>
        ))}
      </List>
    </Flex>
  );
}

const stories = storiesOf("Core", module);

stories.add("Palette", () => <Palette />, {
  info: { inline: true }
});
