import postcssNormalize from 'postcss-normalize';
import autoprefixer from 'autoprefixer';

// postcss-normalize implements the `@import-normalize;` directive used in
// main.scss (previously provided by react-scripts). autoprefixer reads the
// browserslist config in package.json, matching CRA's prior behavior.
export default {
  plugins: [postcssNormalize(), autoprefixer()],
};
