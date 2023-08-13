"use client";
// TODO use modules if css is necessary: import styles from './page.module.css'
import React from "react";
import {Layout, Menu, Typography, Space, Table, Progress, Row, Col, Card} from "antd";
import Title from "antd/es/typography/Title";
import moment from "moment";
import {DailyHabits} from "@/app/Habits/DailyHabits";
import {WeeklyHabits} from "@/app/Habits/WeeklyHabits";

const { Header, Content, Footer } = Layout;
const { Text, Link, Paragraph } = Typography;

export default function Home() {

    const menuItems = [
        {
            key: "caramaa",
            label: "caramaa",
        },
    ];

    /* TODO fix later
    const randomQuoteId = Math.floor(Math.random() * 10) + 1;
       function formatDuration(minutes: number): string {
           const hours = Math.floor(minutes / 60);
           const remainingMinutes = minutes % 60;
           const formattedMinutes =
               remainingMinutes < 10 ? `0${remainingMinutes}` : `${remainingMinutes}`;
           return `${hours}:${formattedMinutes}`;
       }

       const columns: ColumnsType<RowType> = [
           {
               title: "Rank",
               dataIndex: "rank",
               key: "rank",
               width: 80,
           },
           {
               title: "Name",
               dataIndex: "name",
               key: "name",
               render: (text) => (
                   <Link href="https://link-to-profile-page.de" target="_blank">
                       {text}
                   </Link>
               ),
               width: 150,
           },
           {
               title: "Workout Time",
               dataIndex: "workoutTimeInMinutes",
               key: "workoutTimeInMinutes",
               width: 100,
           },
       ];

       interface RowType {
           rank: number;
           name: string;
           workoutTimeInMinutes: string;
       }

       const rows: RowType[] = [
           {
               rank: 1,
               name: "John Brown",
               workoutTimeInMinutes: formatDuration(90),
           },
           {
               rank: 2,
               name: "Jim Green",
               workoutTimeInMinutes: formatDuration(60),
           },
           {
               rank: 3,
               name: "Joe Black",
               workoutTimeInMinutes: formatDuration(30),
           },
       ]; */

    return (
        <Layout>
            <Header style={{ position: "sticky", top: 0, zIndex: 1, width: "100%" }}>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={["home"]}
                    items={menuItems}
                />
            </Header>
            <Content className="site-layout" style={{ padding: "0 50px" }}>
                {/* TODO fix breadcrumb later
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}

                {/* TODO fix later quotes <Space style={{ paddingBottom: 18 }}>
                    <Text italic>{quotes[randomQuoteId].quote}</Text>
                    <Text strong>{quotes[randomQuoteId].author}</Text>
                </Space>*/}
                {/*<Table columns={columns} dataSource={rows} />*/}
                <Row gutter={[16, 24]}>
                    <Col span={17}>
                        <Title>Hey there, Michelle!</Title>
                        <WeeklyHabits/>
                    </Col>
                    <Col span={7}>
                        <DailyHabits/>
                    </Col>
                </Row>
            </Content>
            <Footer style={{ textAlign: "center" }}>
                Johannes Ströbele ©2023, all rights reserved
            </Footer>
        </Layout>
    );
};
