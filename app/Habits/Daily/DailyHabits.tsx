"use client";
import React, {useEffect, useState} from "react";
import {Progress, Row, Typography} from "antd";
import moment from "moment/moment";
import {DailyHabit} from "@/app/Habits/Daily/DailyHabit";
import {Habit} from "@/app/types";

const {Paragraph, Title} = Typography;

export const DailyHabits: React.FC = () => {
    const [habits, setHabits] = useState<Habit[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/api/habit");
            const data: Habit[] = await response.json();
            setHabits(data);
        };
        fetchData();
    }, []);

    const today = moment().format("dddd, MMM. D");

    return (
        <>
            <Title level={4}>{today}</Title>
            <Progress percent={75} showInfo={false}/>
            <Paragraph italic>75% of daily goals achieved</Paragraph>
            <Row gutter={[16, 8]} style={{flexDirection: 'column'}}>
                {habits.map(habit => (
                    <DailyHabit key={habit.id} habit={habit}/>
                ))}
            </Row>
        </>

    );
};