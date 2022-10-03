// module.exports = {
//   presets: [
//     "@vue/cli-plugin-babel/preset",
//     ["@babel/preset-env", { targets: { node: "current" } }],
//     "@babel/preset-typescript",
//   ],
// };

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
  ],
};
