import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts,svelte.ts}', 'index.html'],
  darkMode: 'class',

  theme: {
    extend: {
      borderRadius: {
        base: '9999px',
        container: '24px',
      },
      borderWidth: {
        base: '2px',
      },
      colors: {
        surface: {
          '50': '#e9efea',
          '100': '#e1e9e3',
          '200': '#dae4dc',
          '300': '#c3d3c7',
          '400': '#96b29c',
          '500': '#699172',
          '600': '#5f8367',
          '700': '#4f6d56',
          '800': '#3f5744',
          '900': '#334738',
        },
        error: {
          '50': '#fef4eb',
          '100': '#fef0e4',
          '200': '#feeddd',
          '300': '#fde1c9',
          '400': '#fccba1',
          '500': '#FAB578',
          '600': '#e1a36c',
          '700': '#bc885a',
          '800': '#966d48',
          '900': '#7b593b',
        },
        primary: {
          '50': '#faecfe',
          '100': '#f9e5fe',
          '200': '#f7dffe',
          '300': '#f2cbfd',
          '400': '#e9a4fc',
          '500': '#DF7DFA',
          '600': '#c971e1',
          '700': '#a75ebc',
          '800': '#864b96',
          '900': '#6d3d7b',
        },
        secondary: {
          '50': '#ece9ec',
          '100': '#e5e2e6',
          '200': '#dfdbe0',
          '300': '#cbc5cd',
          '400': '#a59aa8',
          '500': '#7E6F82',
          '600': '#716475',
          '700': '#5f5362',
          '800': '#4c434e',
          '900': '#3e3640',
        },
        tertiary: {
          '50': '#e0f4f1',
          '100': '#d5f1ec',
          '200': '#cbede8',
          '300': '#ace2da',
          '400': '#6dcdbe',
          '500': '#2fb7a2',
          '600': '#2aa592',
          '700': '#23897a',
          '800': '#1c6e61',
          '900': '#175a4f',
        },
        success: {
          '50': '#f8feec',
          '100': '#f5fee6',
          '200': '#f3fee0',
          '300': '#ebfdcd',
          '400': '#dcfca8',
          '500': '#CDFA82',
          '600': '#b9e175',
          '700': '#9abc62',
          '800': '#7b964e',
          '900': '#647b40',
        },
        warning: {
          '50': '#f2e9e0',
          '100': '#eee1d6',
          '200': '#eadacc',
          '300': '#ddc3ad',
          '400': '#c3976f',
          '500': '#A96A31',
          '600': '#985f2c',
          '700': '#7f5025',
          '800': '#65401d',
          '900': '#533418',
        },
      },
    },
  },

  plugins: [],
} as Config;
