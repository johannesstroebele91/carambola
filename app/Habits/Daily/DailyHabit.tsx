"use client";
import {CheckOutlined, EditOutlined, RedoOutlined} from "@ant-design/icons";
import {Button, Card, Col, Row} from "antd";
import React from "react";
import {Habit} from "@/app/types";

interface DailyHabitProps {
    habit: Habit
}

export const DailyHabit = ({habit}: DailyHabitProps) => {

    const Buttons = (): React.JSX.Element => {
        if (!habit.done) {
            return (<Row>
                <Col span={12}>
                    <Button><CheckOutlined style={{color: 'blue'}}/>Completed</Button>
                </Col>
                <Col span={12} style={{textAlign: 'right'}}>
                    <Button><RedoOutlined style={{color: 'blue'}}/>Undo</Button>
                </Col>
            </Row>)
        }
        return <Button type="primary">Mark as complete</Button>
    }

    return <Col>
        <Card title={habit.name} size="small" extra={<EditOutlined/>}>
            <Buttons/>
        </Card>
    </Col>;
};