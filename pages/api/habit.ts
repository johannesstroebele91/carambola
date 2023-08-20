import {NextApiRequest, NextApiResponse} from "next";
import {Habit} from "@/app/types";
import moment from "moment/moment";

const getHabits: Habit[] = [
    {
        id: 1,
        name: "Gym",
        weeklyGoal: 4,
        doneHistory: [moment("2023-08-20T07:17:30.016Z"), moment("2023-08-19T07:15:30.016Z"), moment("2023-08-17T07:15:30.016Z")],
    },
    {
        id: 2,
        name: "Powernap",
        weeklyGoal: 6,
        doneHistory: [moment("2023-08-20T07:17:30.016Z"), moment("2023-08-19T07:15:30.016Z")],
    }, {
        id: 3,
        name: "Drink water",
        weeklyGoal: 6,
        doneHistory: undefined,
    }, {
        id: 4,
        name: "Powernap",
        weeklyGoal: 6,
        doneHistory: [moment("2023-08-19T07:17:30.016Z"), moment("2023-08-16T07:15:30.016Z")],
    },
];
// eslint-disable-next-line import/no-anonymous-default-export
export default async (
    req: NextApiRequest,
    res: NextApiResponse<Habit[]>
) => {
    res.status(200).json(getHabits);
};