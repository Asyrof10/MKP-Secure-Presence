// Validated categorical palette — see dataviz skill `references/palette.md`.
// Fixed hue order; never reassign or cycle per-render.
export const CATEGORICAL = {
    light: ['#2a78d6', '#eb6834', '#1baf7a', '#eda100', '#e87ba4'],
    dark: ['#3987e5', '#d95926', '#199e70', '#c98500', '#d55181'],
};

export const CHROME = {
    light: {
        surface: '#fcfcfb',
        textPrimary: '#0b0b0b',
        textSecondary: '#52514e',
        muted: '#898781',
        grid: '#e1e0d9',
        axis: '#c3c2b7',
    },
    dark: {
        surface: '#1a1a19',
        textPrimary: '#ffffff',
        textSecondary: '#c3c2b7',
        muted: '#898781',
        grid: '#2c2c2a',
        axis: '#383835',
    },
};
