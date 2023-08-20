"use client";
import {CheckOutlined, EditOutlined, RedoOutlined} from "@ant-design/icons";
import {Button, Card, Col, Row, Typography} from "antd";
import React from "react";
import {Habit} from "@/app/types";

const {Text} = Typography;

interface DailyHabitProps {
    habit: Habit
}

export const DailyHabit = ({habit}: DailyHabitProps) => {

    // TODO write logic to mutate habits in the database
    function setHabitDone(habit: Habit) {
        console.log(habit)
        return;
    }

    function setHabitTodo(habit: Habit) {
        console.log(habit)
        return;
    }

    function editHabit(habit: Habit) {
        console.log(habit)
        return;

    }

    const Buttons = (): React.JSX.Element => {
        const isDone = habit.doneHistory && habit.doneHistory.length > 0 && habit.doneHistory.some(date => new Date(date).toDateString() === new Date().toDateString())
        if (isDone) {
            return (<Row>
                <Col span={12} style={{lineHeight: 2.3}}>
                    <Text><CheckOutlined
                        style={{color: 'blue', marginRight: 5}}/>Completed</Text>
                </Col>
                <Col span={12} style={{textAlign: 'right'}}>
                    <Button onClick={() => setHabitTodo(habit)}><RedoOutlined style={{color: 'blue'}}/>Undo</Button>
                </Col>
            </Row>)
        }
        return <Button type="primary" onClick={() => setHabitDone(habit)}>Mark as complete</Button>
    }

    return <Col>
        <Card title={habit.name} size="small" extra={<EditOutlined onClick={() => editHabit(habit)}/>}>
            <Buttons/>
        </Card>
    </Col>;
};