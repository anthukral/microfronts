import path from "path";
import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import webpack from "webpack";
const config: Configuration = {
  mode: "production",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[contenthash].js",
    publicPath: "http://localhost:4001/",
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new webpack.container.ModuleFederationPlugin({
      name: "footer",
      filename: "footer.js",
      exposes: {
        "./Footer": "./src/Footer.tsx",
      },
      library: { type: "var", name: "footer" },
      shared: { react: { singleton: true }, "react-dom": { singleton: true } },
      remotes: {
        nav: "nav@http://localhost:4002/nav.js",
      },
    }),

    new CleanWebpackPlugin(),
  ],
};

export default config;
