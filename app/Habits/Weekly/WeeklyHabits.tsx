"use client";
import React from "react";
import {Space} from "antd";
import {WeeklyProgressRowData} from "@/app/Habits/Weekly/WeeklyProgressRowData";
import {WeeklyProgressColDef} from "@/app/Habits/Weekly/WeeklyProgressColDef";
import {Habit} from "@/app/types";

interface WeeklyHabitsProps {
    habits: Habit[]
}

export const WeeklyHabits: React.FC<WeeklyHabitsProps> = ({habits}: WeeklyHabitsProps) => {
    // getDatesByWeekdayAndCalendarWeek('Thursday', 34, habit?.doneHistory);
    return (
        <>
            <Space direction="vertical" size="middle" style={{display: 'flex'}}>
                <WeeklyProgressColDef/>
                {habits.map(habit => (
                    <WeeklyProgressRowData key={habit.id} habit={habit}/>
                ))}
            </Space>
        </>

    );
};