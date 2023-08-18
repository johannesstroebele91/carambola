"use client";
import React from "react";
import {Card, Col, Divider, Row, Space, Typography} from "antd";
const {Text} = Typography;

export const WeeklyProgressColDef: React.FC = () => {
    return (
                <Row wrap={false}>
                    <Col span={4}>
                        <Text strong>Weekday</Text>
                    </Col>
                    <Col span={2}>
                        <Text strong>Mon</Text>
                    </Col>
                    <Col span={2}>
                        <Text strong>Tue</Text>
                    </Col>
                    <Col span={2}>
                        <Text strong>Wed</Text>
                    </Col>
                    <Col span={2}>
                        <Text strong>Thu</Text>
                    </Col>
                    <Col span={2}>
                        <Text strong>Fri</Text>
                    </Col>
                    <Col span={2}>
                        <Text strong>Sat</Text>
                    </Col>
                    <Col span={4}>
                        <Text strong>Sun</Text>
                    </Col>
                    <Col span={4}>
                        <Text strong>Completion</Text>
                    </Col>
                </Row>
    );
};