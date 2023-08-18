"use client";
import React from "react";
import {Card, Col, Divider, Row, Space, Typography} from "antd";
import {WeeklyProgressRowData} from "@/app/Habits/Weekly/WeeklyProgressRowData";
import {WeeklyProgressColDef} from "@/app/Habits/Weekly/WeeklyProgressColDef";

const {Text} = Typography;

export const WeeklyHabits: React.FC = () => {

    return (
        <>
            <Divider dashed/>
            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                <WeeklyProgressColDef/>
                <WeeklyProgressRowData/>
                <WeeklyProgressRowData/>
                <WeeklyProgressRowData/>
                <WeeklyProgressRowData/>
                <WeeklyProgressRowData/>
                <WeeklyProgressRowData/>
                <WeeklyProgressRowData/>
            </Space>
        </>

    );
};