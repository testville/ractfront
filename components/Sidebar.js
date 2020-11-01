import { Layout, Menu } from "antd";
import React, { useState } from "react";
import "./top_navigation.css"
import UserAddOutlined from "@ant-design/icons/lib/icons/UserAddOutlined";
import TeamOutlined from "@ant-design/icons/lib/icons/TeamOutlined";
import TableOutlined from "@ant-design/icons/lib/icons/TableOutlined";
import FileDoneOutlined from "@ant-design/icons/lib/icons/FileDoneOutlined";
import StarOutlined from "@ant-design/icons/lib/icons/FileDoneOutlined";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import {} from "../pages/AchievementsPage"
import logo from "../img/logo.jpg"
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
            <div className="logo">

            </div>
            <Menu
                theme="dark"
                mode="inline"
                onClick={(event) => setSelectKey(event.key)}
                selectedKeys={[selectKey]}
            >
                <Menu.Item key="dashboard" icon={<TableOutlined />}>
                    <Link to="/">
                        Статистика
                        </Link>
                </Menu.Item>
                <Menu.Item key="test" icon={<FileDoneOutlined />}>
                    <Link to="/tests">
                        Тесты
                    </Link>
                </Menu.Item>
                <Menu.Item key="user" icon={<TeamOutlined />}>
                    <Link to="/users">
                        Пользователи
                    </Link>
                </Menu.Item>
                <Menu.Item key="achievements" icon={<StarOutlined />}>
                    <Link to="/achievements">
                        Заявки
                    </Link>
                </Menu.Item>
            </Menu>
        </Sider>
    )
}