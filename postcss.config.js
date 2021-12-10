
module.exports = {
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
      features: {
        'custom-properties': false,
      },
    },
    'postcss-mixins': {},
    'postcss-nested': {},
    'postcss-custom-media': {},
    '@fullhuman/postcss-purgecss': {
      'content': [
          // './src/**/*.{js,jsx,ts,tsx, html}',
          // './src/*.{js,jsx,ts,tsx, html}',
          './src/**/*.html'
      ],
      'defaultExtractor': content => content.match(/[\w-/:]+(?<!:)/g) || [],
      'safelist': ['html', 'body']
    },

  },
}
