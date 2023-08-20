import {NextApiRequest, NextApiResponse} from "next";
import {Habit} from "@/app/types";

const getHabits: Habit[] = [
    {
        id: 1,
        name: "Gym",
        doneHistory: [new Date("2023-08-20T07:17:30.016Z"), new Date("2023-08-19T07:15:30.016Z"), new Date("2023-08-17T07:15:30.016Z")],
    },
    {
        id: 2,
        name: "Powernap",
        doneHistory: [new Date("2023-08-20T07:17:30.016Z"), new Date("2023-08-19T07:15:30.016Z")],
    }, {
        id: 3,
        name: "Drink water",
        doneHistory: undefined,
    }, {
        id: 4,
        name: "Powernap",
        doneHistory: [new Date("2023-08-19T07:17:30.016Z"), new Date("2023-08-16T07:15:30.016Z")],
    },
];
// eslint-disable-next-line import/no-anonymous-default-export
export default async (
    req: NextApiRequest,
    res: NextApiResponse<Habit[]>
) => {
    res.status(200).json(getHabits);
};