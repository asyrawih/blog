export interface Articels {
    status:       string;
    totalResults?: number;
    articles?:     Article[];
}

export interface Article {
    source?:      Source;
    author:      string;
    title:       string;
    description: string;
    url:         string;
    urlToImage:  string;
    publishedAt: Date;
    content:     string;
}

export interface Source {
    id:   null;
    name: string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toArticels(json: string): Articels {
        return JSON.parse(json);
    }

    public static articelsToJson(value: Articels): string {
        return JSON.stringify(value);
    }
}
