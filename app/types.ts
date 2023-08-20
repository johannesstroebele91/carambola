import {Moment} from "moment";

export interface Quote {
    id: number;
    author: string;
    quote: string;
}

export interface Habit {
    id: number;
    name: string;
    weeklyGoal: number;
    doneHistory?: Moment[];
}