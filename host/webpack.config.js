const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

// const importMapPath = path.resolve(__dirname, "src", "importMap.json");
const importMapPath = "src/importMap.json";

module.exports = (webpackConfigEnv, argv) => {
  const orgName = "elysiannxt";
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "root-config",
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });

  const isLocal = webpackConfigEnv && webpackConfigEnv.isLocal;

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: "src/index.ejs",
        templateParameters: {
          isLocal,
          orgName,
        },
      }),
      new CopyPlugin({
        patterns: [
          {
            from: importMapPath,
            to: "importMap.json",
          },
        ],
      }),
    ],
    devServer: {
      static: "src",
    },
  });
};
