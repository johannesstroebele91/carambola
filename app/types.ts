export interface Quote {
    id: number;
    author: string;
    quote: string;
}

export interface Habit {
    id: number;
    name: string;
    done: boolean;
    doneAt?: Date;
}