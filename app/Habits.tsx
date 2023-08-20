import {Col, Divider, Pagination, Row} from "antd";
import Title from "antd/es/typography/Title";
import {Quotes} from "@/app/Quotes";
import {WeeklyHabits} from "@/app/Habits/Weekly/WeeklyHabits";
import {DailyHabits} from "@/app/Habits/Daily/DailyHabits";
import React, {useEffect, useState} from "react";
import {Habit} from "@/app/types";
import {getCalendarWeek} from "@/app/utility";

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
    const currentWeek = getCalendarWeek(new Date());

    const onChange = () => {
    };
    return (
        <Row gutter={[16, 24]} style={{marginTop: 24}}>
            <Col span={17}>
                <Title>Hey there, Michelle!</Title>
                <Quotes/>
                <Row gutter={[16, 24]} align="middle">
                    <Col flex="auto">
                        <Divider dashed/>
                    </Col>
                    <Col flex="210px">
                        <Pagination simple defaultCurrent={currentWeek * 10} total={currentWeek * 10}
                                    onChange={onChange}/>
                    </Col>
                </Row>
                <WeeklyHabits habits={habits}/>
            </Col>
            <Col span={7}>
                <DailyHabits habits={habits}/>
            </Col>
        </Row>
    );
};