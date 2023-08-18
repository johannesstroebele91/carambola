import {NextApiRequest, NextApiResponse} from "next";
import {Habit} from "@/app/types";

const getHabits: Habit[] = [
    {
        id: 1,
        name: "Gym",
        done: true,
        doneAt: new Date(),
    },
    {
        id: 2,
        name: "Powernap",
        done: true,
        doneAt: new Date(),
    }, {
        id: 3,
        name: "Drink water",
        done: false,
        doneAt: undefined,
    }, {
        id: 4,
        name: "Powernap",
        done: false,
        doneAt: undefined,
    },
];
// eslint-disable-next-line import/no-anonymous-default-export
export default async (
    req: NextApiRequest,
    res: NextApiResponse<Habit[]>
) => {
    res.status(200).json(getHabits);
};