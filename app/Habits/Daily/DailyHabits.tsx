"use client";
import React from "react";
import {Button, Col, Progress, Row, Typography} from "antd";
import moment from "moment/moment";
import {CheckOutlined, RedoOutlined} from "@ant-design/icons";
import {DailyHabit} from "@/app/Habits/Daily/DailyHabit";

const {Paragraph, Title} = Typography;

export const DailyHabits: React.FC = () => {
    const today = moment().format("dddd, MMM. D");

    const actionButtonsToDo: React.JSX.Element = <Row>
        <Col span={12}>
            <Button><CheckOutlined style={{color: 'blue'}}/>Completed</Button>
        </Col>
        <Col span={12} style={{textAlign: 'right'}}>
            <Button><RedoOutlined style={{color: 'blue'}}/>Undo</Button>
        </Col>
    </Row>;

    const actionButtonsDone: React.JSX.Element = <Button type="primary">Mark as complete</Button>;

    return (
        <>
            <Title level={4}>{today}</Title>
            <Progress percent={75} showInfo={false}/>
            <Paragraph italic>75% of daily goals achieved</Paragraph>
            <Row gutter={[16, 8]} style={{flexDirection: 'column'}}>
                <DailyHabit actionButtons={actionButtonsToDo}/>
                <DailyHabit actionButtons={actionButtonsToDo}/>
                <DailyHabit actionButtons={actionButtonsDone}/>
                <DailyHabit actionButtons={actionButtonsDone}/>
            </Row>
        </>

    );
};