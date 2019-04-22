const path = require("path");
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;

const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    include: path.resolve(__dirname, "../src"),
    use: [
    {
      loader: require.resolve("awesome-typescript-loader"),
      options: {
        getCustomTransformers: () => ({
          before: [styledComponentsTransformer]
        })
      },
    },
    {
      loader: require.resolve("react-docgen-typescript-loader")
    }],
  });

  config.resolve.extensions.push(".ts", ".tsx");

  return config;
};
