import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0B0F14',
        'bg-raise': '#10161D',
        'bg-inset': '#0D1218',
        line: '#1D2731',
        'line-hi': '#2C3A47',
        fg: '#DAE3EB',
        'fg-dim': '#93A4B3',
        'fg-faint': '#647583',
        amber: '#F2B24C',
        'amber-dim': '#C98F35',
        ok: '#56C97E',
      },
      fontFamily: {
        mono: [
          'ui-monospace',
          'SF Mono',
          'SFMono-Regular',
          'Menlo',
          'Consolas',
          'Liberation Mono',
          'monospace',
        ],
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      maxWidth: {
        content: '1064px',
      },
      keyframes: {
        blink: {
          '50%': { opacity: '0' },
        },
      },
      animation: {
        blink: 'blink 1.2s steps(1) infinite',
      },
    },
  },
  plugins: [],
};
export default config;
