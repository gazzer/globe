module.exports = {
  components: "./src/index.js",
  outputPath: "./public/playroom",

  // Optional:
  title: "Globe Design System",
  frameComponent: "./src/StoryWrapper.bs.js",
  widths: [320, 1400],
  port: 9000,
  openBrowser: true,
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.js$/i,
          use: {
            loader: "babel-loader",
          },
          include: __dirname,
          exclude: /node_modules/,
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
          exclude: /node_modules/gi,
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
          include: [/node_modules\/react-dates/gi],
        },
      ],
    },
  }),
}
