/**
 * App Color Palette
 * All colors are defined as CSS custom properties in src/index.css
 * Use them via Tailwind classes or CSS variables
 */

export const colors = {
  // Primary colors
  primaryDark: 'var(--color-primary-dark)',   // #243C4C - Dark blue for headers/sidebars
  primary: 'var(--color-primary)',             // #5289AD - Main brand color
  
  // Secondary colors
  secondary: 'var(--color-secondary)',         // #698696 - Muted text/borders
  
  // Accent colors
  accentMedium: 'var(--color-accent-medium)', // #ACBCBF - Medium accent/borders
  accentLight: 'var(--color-accent-light)',   // #F4FCFB - Light accent/backgrounds
};

/**
 * Tailwind Usage:
 * 
 * Text colors:
 *   className="text-brand-dark"
 *   className="text-brand-primary"
 *   className="text-brand-secondary"
 *   className="text-brand-accent-medium"
 *   className="text-brand-accent-light"
 * 
 * Background colors:
 *   className="bg-brand-dark"
 *   className="bg-brand-primary"
 *   className="bg-brand-secondary"
 *   className="bg-brand-accent-medium"
 *   className="bg-brand-accent-light"
 * 
 * Border colors:
 *   className="border-brand-dark"
 *   className="border-brand-primary"
 *   className="border-brand-secondary"
 *   className="border-brand-accent-medium"
 *   className="border-brand-accent-light"
 * 
 * CSS Usage (in style tags or CSS files):
 *   color: var(--color-primary-dark);
 *   background: var(--color-primary);
 *   border: 1px solid var(--color-secondary);
 */
