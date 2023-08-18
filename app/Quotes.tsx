import {Layout, Space, Typography} from "antd";
import React from "react";
const { Text } = Typography;

interface Quote {
    id: number;
    author: string;
    quote: string;
}

const quotes: Quote[] = [
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

const randomQuoteId = Math.floor(Math.random() * 10) + 1;
function formatDuration(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    const formattedMinutes =
        remainingMinutes < 10 ? `0${remainingMinutes}` : `${remainingMinutes}`;
    return `${hours}:${formattedMinutes}`;
}

export const Quotes = () => {
    return (
        <>
            <Text italic>{quotes[randomQuoteId].quote}</Text>
            <Text strong> - {quotes[randomQuoteId].author}</Text>
        </>
    );
};