import { writable } from 'svelte/store';

export type Theme = {
    name: string;
    primary: string;
    accent: string;
    background: string;
    surface: string;
    showCountDown: boolean;
}

export const activeTheme = writable({
    name: 'Default',
    primary: '#33aa33',
    accent: '#3333aa',
    background: '#eeffee',
    surface: "#cccccc",
    showCountDown: true
})