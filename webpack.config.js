module.exports = {
    // ...
    resolve: {
      extensions: ['.js', '.jsx'], // adiciona as extensões que serão resolvidas automaticamente
      modules: ['node_modules', 'src'], // adiciona os diretórios onde os módulos serão buscados
    },
    // ...
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
    // ...
  };
  