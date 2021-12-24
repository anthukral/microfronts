import path from "path";
import { Configuration, HotModuleReplacementPlugin } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import webpack from "webpack";


const config: Configuration = {
  mode: "development",
  output: {
    publicPath: "http://localhost:4000/",
  },
  entry: "./src/index.ts",
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
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"],
    }),

    new webpack.container.ModuleFederationPlugin({
      name: "main",
      remotes: {
        product: "product@http://localhost:4003/product.js",
        nav: "nav@http://localhost:4002/nav.js",
        footer: "footer@http://localhost:4001/footer.js",
      },

      shared: {
        react: { singleton: true, eager: true },
        "react-dom": { singleton: true, eager: true },
        "react-router-dom": { singleton: true, eager: true },
        "react-router": { singleton: true, eager: true },
      },
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new HotModuleReplacementPlugin(),
  ],
  devtool: "inline-source-map",
  devServer: {
    static: path.join(__dirname, "build"),
    port: 4000,
    open: true,
    hot: true,
  },
};

export default config;
