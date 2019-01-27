import { configure } from '@storybook/react';
import { setAddon, addDecorator } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withInfo } from '@storybook/addon-info';

setAddon(JSXAddon);
addDecorator(withInfo);

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);