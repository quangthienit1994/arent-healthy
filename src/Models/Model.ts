
export interface IAnalyze {
    date: string;
    type: string;
    value: number;
}

export interface IAuth {
    token: string | null
    type: string | null
    expiresAt: string | null
}

export interface IMessage {
    id?: any,
    type: string,
    title: any,
    message?: any,
}

export interface IFood {
    thumbnail: string
    title: string
}
