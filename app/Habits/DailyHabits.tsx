import React from "react";
import {Button, Card, Col, Progress, Row, Typography} from "antd";
import moment from "moment/moment";
import {CheckOutlined, EditOutlined, RedoOutlined, StarFilled} from "@ant-design/icons";

const {Text, Paragraph, Title} = Typography;

export const DailyHabits: React.FC = () => {
    const today = moment().format("dddd, MMM. D");

    return (
        <>
            <Title level={4}>{today}</Title>
            <Progress percent={75} showInfo={false}/>
            <Paragraph italic>75% of daily goals achieved</Paragraph>
            <Row gutter={[16, 8]} style={{flexDirection: 'column'}}>
                <Col>
                    <Card title="Gym" size="small" extra={<EditOutlined />}>
                        <Row>
                            <Col span={12}>
                                <Button><CheckOutlined  style={{color: 'blue'}}/>Completed</Button>
                            </Col>
                            <Col span={12} style={{textAlign: 'right'}}>
                                <Button><RedoOutlined  style={{color: 'blue'}}/>Undo</Button>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col>
                    <Card title="Gym" size="small" extra={<EditOutlined />}>
                        <Row>
                            <Col span={12}>
                                <Button><CheckOutlined  style={{color: 'blue'}}/>Completed</Button>
                            </Col>
                            <Col span={12} style={{textAlign: 'right'}}>
                                <Button><RedoOutlined  style={{color: 'blue'}}/>Undo</Button>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col>
                    <Card title="Meditate" size="small" extra={<EditOutlined />}>
                        <Button type="primary">Mark as complete</Button>
                    </Card>
                </Col>
                <Col>
                    <Card title="Walk" size="small" extra={<EditOutlined />}>
                        <Button type="primary">Mark as complete</Button>
                    </Card>
                </Col>
                <Col>
                    <Card title="Powernap" size="small" extra={<EditOutlined />}>
                        <Button type="primary">Mark as complete</Button>
                    </Card>
                </Col>
            </Row>
        </>

    );
};