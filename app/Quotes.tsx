import React, {useEffect, useState} from "react";
import {Typography} from "antd";
import {Quote} from "@/app/types";

const {Text} = Typography;

const randomQuoteId = Math.floor(Math.random() * 10) + 1;

export const Quotes = () => {
    const [quotes, setQuotes] = useState<Quote[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/api/quote");
            const data: Quote[] = await response.json();
            setQuotes(data);
        };
        fetchData().then(() => console.log('Fetched quotes successfully')); // TODO delete later
    }, []);

    if (!quotes) {
        return <Text>Loading...</Text>;
    }

    return (
        <>
            <Text italic>{quotes[randomQuoteId]?.quote}</Text>
            <Text strong> - {quotes[randomQuoteId]?.author}</Text>
        </>
    );
};