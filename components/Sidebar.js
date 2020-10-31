import { Layout, Menu } from "antd";
import React, { useState } from "react";
import "./top_navigation.css"
import UserAddOutlined from "@ant-design/icons/lib/icons/UserAddOutlined";
import TeamOutlined from "@ant-design/icons/lib/icons/TeamOutlined";
import TableOutlined from "@ant-design/icons/lib/icons/TableOutlined";
import FileDoneOutlined from "@ant-design/icons/lib/icons/FileDoneOutlined";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

export default function Sidebar() {
    const { Sider } = Layout;
    const [selectKey, setSelectKey] = useState("events");

    return (
        <Sider style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
        }}>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="inline"
                onClick={(event) => setSelectKey(event.key)}
                selectedKeys={[selectKey]}
            >
                <Menu.Item key="dashboard" icon={<TableOutlined />}>
                    <Link to="/">
                        Дашборд
                        </Link>
                </Menu.Item>

                <Menu.Item key="events" icon={<TableOutlined />}>
                    <Link to="/events">
                        Мероприятия
                        </Link>
                </Menu.Item>
                <Menu.Item key="test" icon={<FileDoneOutlined />}>
                    <Link to="/test">
                        Тесты
                    </Link>
                </Menu.Item>
                <Menu.Item key="user" icon={<TeamOutlined />}>
                    <Link to="/users">
                        Пользователи
                    </Link>
                </Menu.Item>
            </Menu>
        </Sider>
    )
}