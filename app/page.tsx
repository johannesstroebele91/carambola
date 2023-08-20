"use client";
// use client is needed for importing typographie
// TODO use modules if css is necessary: import styles from './page.module.css'
import React from "react";
import {Layout, Menu} from "antd";
import {Habits} from "@/app/Habits/Habits";

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
                <Habits/>
            </Content>
            <Footer style={{textAlign: "center"}}>
                Johannes Ströbele ©2023, all rights reserved
            </Footer>
        </Layout>
    );
};
