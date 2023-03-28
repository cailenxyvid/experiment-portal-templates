import { writable } from 'svelte/store';

export type User = {
    email: string;
    name: string;
}

export const activeUser = writable({
    email: "",
    name: "" 
})