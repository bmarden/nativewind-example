// themes.js
import { vars } from 'nativewind';

export type Customer = 'mercy' | 'memorial' | 'customer3';

export const themes = {
  mercy: vars({
    '--color-primary': '34 161 199', // '#22a1c7' in RGB
    '--color-secondary': '34 121 149', // '#227999' in RGB
    '--color-background': '255 255 255', // White
    '--color-text': '0 0 0', // Black
    // Add more variables as needed
  }),
  memorial: vars({
    '--color-primary': '160 32 240', // '#A020F0' in RGB
    '--color-secondary': '255 215 0', // '#FFD700' in RGB
    '--color-background': '0 0 0', // Black
    '--color-text': '255 255 255', // White
    // Add more variables as needed
  }),
  customer3: vars({
    '--color-primary': '76 175 80', // '#4CAF50' in RGB
    '--color-secondary': '33 150 243', // '#2196F3' in RGB
    '--color-background': '245 245 245', // Light gray
    '--color-text': '33 33 33', // Dark gray
    // Add more variables as needed
  }),
  // Add more themes as needed
};
