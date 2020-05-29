/**
 * @prettier
 */

import configBuilder from "./_config-builder"

const result = configBuilder(
  {
    minimize: true,
    mangle: true,
    sourcemaps: false,
    includeDependencies: true,
  },
  {
    entry: {
      "swagger-ui-bundle": [
        "./src/polyfills.js",
        "./src/standalone/nginx.index.js",
      ],
    },

    output: {
      library: "bundle",
      filename: "nginx-swagger-ui.js",
    },
  }
)

export default result
