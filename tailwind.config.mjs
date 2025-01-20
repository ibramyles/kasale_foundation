/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        sm: '0.8rem',
        base: '0.9rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      colors: {
        textGray: '#000000',
        textGrayLight: '',
        borderGray: '',
        inputGray: '',
        // previous-colors
        //? primary-colors/brand-colors
        'brand-primary': 'hsl(113, 96%, 30%)',
        'brand-accent': 'rgb(126, 34, 206)',

        'light-bg-green': '#f5f9fc',
        'light-bg-gray': 'hsl(0, 0%, 95%)',

        'dark-blue': '#192732',
        'gray-text': 'rgba(255, 255, 255, 0.7)',
        'light-gray-2': 'rgb(242, 243, 247)',
        'light-color-2': 'rgb(245, 250, 254)',
      },
    },
  },
  plugins: [],
};
