import type { Collection } from "./types";

export function getTestCollections(): Collection[] {
    const collections: Collection[] = [
        {id: 1, columns: ["id", "created", "username"], name: "users", rows: [[]]},
        {id: 2, columns: ["id", "created", "username"], name: "tracker", rows: [[]]},
        {id: 3, columns: ["id", "created", "username"], name: "linktree", rows: [[]]}
    ]

    return collections
}