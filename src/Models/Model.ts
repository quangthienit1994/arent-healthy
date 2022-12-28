
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

export interface IExercise {
    name: string;
    description: any;
    extra: any;
}

export interface IDiary {
    createdAt: string
    title: string
    content: string
}

export interface IRecommended {
    title: string,
    extra: string
}

export interface INews {
    thumbnail: string
    createdAt: string
    title: string
    tags: string[]
}

export interface INotify {
}
