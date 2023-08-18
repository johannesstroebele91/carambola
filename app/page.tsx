"use client";
// use client is needed for importing typographie
// TODO use modules if css is necessary: import styles from './page.module.css'
import React from "react";
import {Col, Layout, Menu, Row} from "antd";
import Title from "antd/es/typography/Title";
import {DailyHabits} from "@/app/Habits/Daily/DailyHabits";
import {WeeklyHabits} from "@/app/Habits/Weekly/WeeklyHabits";
import {Quotes} from "@/app/Quotes";

const {Header, Content, Footer} = Layout;

export default function Home() {

    const menuItems = [
        {
            key: "caramaa",
            label: "caramaa",
        },
    ];

    return (
        <Layout>
            <Header style={{position: "sticky", top: 0, zIndex: 1, width: "100%"}}>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={["home"]}
                    items={menuItems}
                />
            </Header>
            <Content className="site-layout" style={{padding: "0 50px"}}>
                {/* TODO fix breadcrumb later
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
                <Row gutter={[16, 24]}>
                    <Col span={17}>
                        <Title>Hey there, Michelle!</Title>
                        <Quotes/>
                        <WeeklyHabits/>
                    </Col>
                    <Col span={7}>
                        <DailyHabits/>
                    </Col>
                </Row>
            </Content>
            <Footer style={{textAlign: "center"}}>
                Johannes Ströbele ©2023, all rights reserved
            </Footer>
        </Layout>
    );
};
