const mix = require('laravel-mix');

mix.ts('resources/ts/app.tsx', 'public/js') // Use .tsx for React with TypeScript
   .react() // This ensures React support
   .sass('resources/sass/app.scss', 'public/css')
   .version();
