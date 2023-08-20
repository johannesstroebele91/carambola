"use client";
import React from "react";
import {Progress, Row, Typography} from "antd";
import moment from "moment/moment";
import {DailyHabit} from "@/app/Habits/Daily/DailyHabit";
import {Habit} from "@/app/types";

const {Paragraph, Title} = Typography;

interface DailyHabitsProps {
    habits: Habit[]
}

export const DailyHabits: React.FC<DailyHabitsProps> = ({habits}: DailyHabitsProps) =>
    (
        <>
            <Title level={4}>{moment().format("dddd, MMM. D")}</Title>
            <Progress percent={75} showInfo={false}/>
            <Paragraph italic>75% of daily goals achieved</Paragraph>
            <Row gutter={[16, 8]} style={{flexDirection: 'column'}}>
                {habits.map(habit => (
                    <DailyHabit key={habit.id} habit={habit}/>
                ))}
            </Row>
        </>

    );