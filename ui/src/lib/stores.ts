import { writable } from "svelte/store";
import type { Collection } from "./types";

export const collections = writable<Collection[]>([])
export const selectedCollection = writable<Collection>()