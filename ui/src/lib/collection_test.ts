import type { Collection } from "./types";

export function getTestCollections(): Collection[] {
    const collections: Collection[] = [
        {id: 1, columns: ["id", "created", "updated"], name: "users", rows: [
            ["1", "1.1.1965", "1.1.2024"], 
            ["2", "1.1.2024", "1.1.2024"], 
            ["3", "1.1.2024", "1.1.2024"]
        ]},
        {id: 2, columns: ["id", "created", "username", "password", "email"], name: "tracker", rows: []},
        {id: 3, columns: ["id", "created", "username"], name: "linktree", rows: []}
    ]

    return collections
}