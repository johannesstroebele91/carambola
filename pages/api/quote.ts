import {NextApiRequest, NextApiResponse} from "next";
import {Quote} from "@/app/types";

const getQuotes: Quote[] = [
    {
        id: 1,
        author: "Arnold Schwarzenegger",
        quote: "Stretch and flex fully-range to grow the muscle. Do maximum deep stretch with less weight for a second to focus on the target-muscle (stretch-mediated hypertrophy).",
    },
    {
        id: 2,
        author: "Steve Jobs",
        quote: "Stay hungry. Stay foolish. If you have the feeling that you need to do something, but you want something else, challenge your fate once a week.",
    },
    {
        id: 3,
        author: "Muhammad Ali",
        quote:
            "I don't count my sit-ups (repetitions). I only start when it starts hurting because they’re the only ones that count. First 4 repeats easy, 2 difficult, and 2 to failure. True failure is only possible with negative (one arm).",
    },
    {
        id: 4,
        author: "Markus Rühl",
        quote: "I don't do this to be healthy, I do this to get big muscles.",
    },
    {
        id: 5,
        author: "Ronnie Coleman",
        quote: "Yeah buddy! Lightweight baby!",
    },
    {
        id: 6,
        author: "Unknown",
        quote: "I got 99 problems, but I'm going to the Gym to ignore all of them (Gym is amazing for mental health aka freeing your mind).",
    },
    {
        id: 7,
        author: "Unknown",
        quote: "If you don't stop working, you don't stop free time. Stick to your breaks, how long they are, and only read books in breaks (NOT YT /Insta)",
    },
    {
        id: 8,
        author: "Unknown",
        quote: "Don't leave your phone next to you while you work (out of reach, out of mind).",
    },
    {
        id: 9,
        author: "Unknown",
        quote: "Comment all problems and finished tasks, so you and other people can later understand, what you did.",
    },
    {
        id: 10,
        author: "Unknown",
        quote: "Don't eat more than 1 portion (if more, it's easy to fall into a pit).",
    }
];
// eslint-disable-next-line import/no-anonymous-default-export
export default async (
    req: NextApiRequest,
    res: NextApiResponse<Quote[]>
) => {
    res.status(200).json(getQuotes);
};