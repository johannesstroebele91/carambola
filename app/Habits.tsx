import {Col, Row} from "antd";
import Title from "antd/es/typography/Title";
import {Quotes} from "@/app/Quotes";
import {WeeklyHabits} from "@/app/Habits/Weekly/WeeklyHabits";
import {DailyHabits} from "@/app/Habits/Daily/DailyHabits";
import React, {useEffect, useState} from "react";
import {Habit} from "@/app/types";

export const Habits = () => {
    const [habits, setHabits] = useState<Habit[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/api/habit");
            const data: Habit[] = await response.json();
            setHabits(data);
        };
        fetchData();
    }, []);

    return (
        <Row gutter={[16, 24]}>
            <Col span={17}>
                <Title>Hey there, Michelle!</Title>
                <Quotes/>
                <WeeklyHabits habits={habits}/>
            </Col>
            <Col span={7}>
                <DailyHabits habits={habits}/>
            </Col>
        </Row>
    );
};