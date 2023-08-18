"use client";
import {EditOutlined} from "@ant-design/icons";
import {Card, Col} from "antd";
import React from "react";

interface DailyHabitProps {
    actionButtons: React.JSX.Element
}

export const DailyHabit = ({actionButtons}: DailyHabitProps) => {
    return (<Col>
            <Card title="Gym" size="small" extra={<EditOutlined/>}>
                {actionButtons}
            </Card>
        </Col>
    );
};