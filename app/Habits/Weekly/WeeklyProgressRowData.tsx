"use client";
import React from "react";
import {Checkbox, Col, Progress, Row, Typography} from "antd";
import {StarFilled} from "@ant-design/icons";
import {Habit} from "@/app/types";

const {Text} = Typography;

interface WeeklyProgressRowDataProps {
    habit: Habit
}

export const WeeklyProgressRowData: React.FC<WeeklyProgressRowDataProps> = ({
                                                                                habit
                                                                            }: WeeklyProgressRowDataProps) => {

    return (
        <>
            <Row wrap={false}>
                <Col span={4}>
                    <StarFilled style={{color: 'blue'}}/>
                    <Text strong> {habit.name}</Text>
                </Col>
                <Col span={2}>
                    <Checkbox defaultChecked={false}/>
                </Col>
                <Col span={2}>
                    <Checkbox defaultChecked={false}/>
                </Col>
                <Col span={2}>
                    <Checkbox defaultChecked={true}/>
                </Col>
                <Col span={2}>
                    <Checkbox defaultChecked={true}/>
                </Col>
                <Col span={2}>
                    <Checkbox defaultChecked={true}/>
                </Col>
                <Col span={2}>
                    <Checkbox defaultChecked={false}/>
                </Col>
                <Col span={2}>
                    <Checkbox defaultChecked={true}/>
                </Col>
                <Col span={4} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Progress type="circle" percent={75} size={20}/>
                </Col>
            </Row>
        </>

    );
};