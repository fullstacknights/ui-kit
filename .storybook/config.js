import React from 'react';
import { ThemeProvider } from 'styled-components'
import { configure } from '@storybook/react';
import { setAddon, addDecorator } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withInfo } from '@storybook/addon-info';

import { Theme } from "../theme/index";

setAddon(JSXAddon);
addDecorator(withInfo);
addDecorator(story => (
  <ThemeProvider theme={Theme}>
    {story()}
  </ThemeProvider>
))

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);