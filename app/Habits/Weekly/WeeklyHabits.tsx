"use client";
import React from "react";
import {Divider, Space} from "antd";
import {WeeklyProgressRowData} from "@/app/Habits/Weekly/WeeklyProgressRowData";
import {WeeklyProgressColDef} from "@/app/Habits/Weekly/WeeklyProgressColDef";

export const WeeklyHabits: React.FC = () => {
    // getDatesByWeekdayAndCalendarWeek('Thursday', 34, habit?.doneHistory);

    return (
        <>
            <Divider dashed/>
            <Space direction="vertical" size="middle" style={{display: 'flex'}}>
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