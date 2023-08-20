"use client";
import React, {useState} from "react";
import {Button, Col, Progress, Row, Typography} from "antd";
import moment from "moment/moment";
import {DailyHabit} from "@/app/Habits/Daily/DailyHabit";
import {LeftOutlined, RightOutlined} from "@ant-design/icons";

const {Paragraph, Title} = Typography;

interface DailyHabitsProps {
    habits: Habit[]
}

interface Habit {
    id: number;
    name: string;
    weeklyGoal: number;
    doneHistory?: moment.Moment[];
}

function getSuccessRateForDay(date: moment.Moment, habits: Habit[]): number {
    const habitsDone = habits.filter(habit => {
        if (!habit.doneHistory) {
            return false;
        }
        return habit.doneHistory.some(doneDate => moment(doneDate).isSame(date, 'day'));
    });
    const successRate = (habitsDone.length / habits.length) * 100;
    return Math.round(successRate);
}

export const DailyHabits: React.FC<DailyHabitsProps> = ({habits}: DailyHabitsProps) => {
    const [date, setDate] = useState(moment());
    return (
        <>
            <Row gutter={[16, 24]} align="middle">
                <Col flex="auto">
                    <Title level={4} style={{marginTop: 10}}>{date.format("ddd, MMM. D")}</Title>
                </Col>
                <Col flex="80px">
                    <Button icon={<LeftOutlined/>} onClick={() => setDate(moment(date).subtract(1, 'day'))}
                    ></Button>
                    <Button icon={<RightOutlined/>} onClick={() => setDate(moment(date).add(1, 'day'))}
                            disabled={moment().isSame(date, 'day')}></Button>

                </Col>
            </Row>
            <Progress percent={75} showInfo={false}/>
            <Paragraph italic>{getSuccessRateForDay(date, habits)}% of daily goals achieved</Paragraph>
            <Row gutter={[16, 8]} style={{flexDirection: 'column'}}>
                {habits.map(habit => (
                    <DailyHabit key={habit.id} habit={habit} date={date}/>
                ))}
            </Row>
        </>

    );
};