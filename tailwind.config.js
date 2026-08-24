import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                brand: {
                    50: '#e6f7f5',
                    100: '#c1ebe6',
                    200: '#8dd9d1',
                    300: '#54c2b6',
                    400: '#2aab9d',
                    500: '#0f9284',
                    600: '#0a7a6f',
                    700: '#0a615a',
                    800: '#0c4d48',
                    900: '#0d403c',
                },
            },
        },
    },

    plugins: [forms],
};
