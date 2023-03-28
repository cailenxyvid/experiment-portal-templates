import { writable } from 'svelte/store';

export type Event = {
    title: string;
    status: string;
    start: string;
}

export const activeEvent = writable({
    title: "My Test Event",
    status: "Pending",
    start: "04-15-2023"
})