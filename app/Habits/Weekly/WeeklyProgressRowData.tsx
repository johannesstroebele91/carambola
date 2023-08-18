"use client";
import React from "react";
import {Card, Checkbox, Col, Divider, Progress, Row, Typography} from "antd";
import {StarFilled} from "@ant-design/icons";

const {Text} = Typography;

export const WeeklyProgressRowData: React.FC = () => {

    return (
        <>
            <Row wrap={false}>
                <Col span={4}>
                    <StarFilled style={{ color: 'blue' }} />
                    <Text strong> Gym</Text>
                </Col>
                <Col span={2}>
                    <Checkbox defaultChecked={false} />
                </Col>
                <Col span={2}>
                    <Checkbox defaultChecked={false} />
                </Col>
                <Col span={2}>
                    <Checkbox  defaultChecked={true} />
                </Col>
                <Col span={2}>
                    <Checkbox  defaultChecked={true} />
                </Col>
                <Col span={2}>
                    <Checkbox defaultChecked={true}  />
                </Col>
                <Col span={2}>
                    <Checkbox defaultChecked={false} />
                </Col>
                <Col span={4}>
                    <Checkbox defaultChecked={true}  />
                </Col>
                <Col span={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Progress type="circle" percent={75} size={20} />
                </Col>
            </Row>
        </>

    );
};