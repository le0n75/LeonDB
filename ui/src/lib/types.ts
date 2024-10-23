export type Row = any[]

export type Collection = {
    id: number;
    name: string;
    columns: string[];
    rows: Row[];
}