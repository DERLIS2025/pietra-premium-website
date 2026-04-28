import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        pietra: {
          green: '#5a7c6c',
          sand: '#c4b5a0',
          black: '#1a1a1a',
          ivory: '#f5f5f0',
        },
      },
      boxShadow: {
        premium: '0 12px 30px rgba(26,26,26,0.12)',
      },
    },
  },
  plugins: [],
};

export default config;
