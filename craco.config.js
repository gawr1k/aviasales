// craco.config.js

module.exports = {
  webpack: {
    configure: {
      module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Настройки для CSS Modules, SASS и др.
            ],
          },
        ],
      },
    },
  },
};
