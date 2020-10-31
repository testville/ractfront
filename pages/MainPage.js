import { Button, Input, Layout, Menu, Modal } from "antd";
import React, { useEffect, useState } from "react";
import PlusCircleOutlined from "@ant-design/icons/lib/icons/PlusCircleOutlined";
import { CheckCircleOutlined, CloseCircleOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import Sidebar from "../components/Sidebar";

export default function MainPage(props) {
    const { Header, Content, Footer, Sider } = Layout;
    const [isCollapsed, setCollapsed] = useState(false);

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sidebar />
            <Layout className="site-layout" style={{ marginLeft: 200 }}>
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    <div className="site-card-wrapper">
                        {props.children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Flex boys</Footer>
            </Layout>
        </Layout>
    )
}