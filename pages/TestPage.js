import {
    Button,
    Card,
    Col,
    Dropdown,
    Empty,
    Input,
    Layout, Menu
} from "antd";
import React, { useState } from "react";
import NewsCard from "../components/NewsCard";
import SortAscendingOutlined from "@ant-design/icons/lib/icons/SortAscendingOutlined";
import DownOutlined from "@ant-design/icons/lib/icons/DownOutlined";
import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";
import TestGrid from "../components/Testgrid"

export default function TestPage(props) {
    const { Content } = Layout;
    const [filteredList, setFilteredList] = useState([]);
    const [currentSort, setSort] = useState('Default');
    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="Default">Default</Menu.Item>
            <Menu.Item key="Likes">Likes</Menu.Item>
            <Menu.Item key="Comments">Comments</Menu.Item>
            <Menu.Item key="Visits">Visits</Menu.Item>
        </Menu>
    );

    function handleMenuClick(e) {
        setSort(e.key);
        setFilteredList(filteredList => sortBy(filteredList, e.key))
    }

    const sortBy = (list, criterion) => {
        switch (criterion) {
            case 'Likes':
                return list.slice().sort((a, b) => +b.totalLikes - +a.totalLikes)
            case 'Comments':
                return list.slice().sort((a, b) => +b.totalComments - +a.totalComments)
            case 'Visits':
                return list.slice().sort((a, b) => +b.totalVisits - +a.totalVisits)
            case 'Default':
                return list.slice().sort((a, b) => a.name.localeCompare(b.name))
        }
    };

    return (
        <Card title={"Тесты"} extra={

            <Button type="primary">
                <PlusOutlined />Добавить тест
                    </Button>

        }>
            <div
                style={{
                    marginLeft: 8,
                    marginRight: 8,
                    marginBottom: 16,
                    display: 'flex'
                }}
            >
                <Input.Search
                    allowClear
                    placeholder="Пися"
                    onChange={() => {
                    }}
                    size="large"
                    style={{
                        marginRight: 8
                    }}
                />

                <Dropdown overlay={menu} trigger={['click']}>
                    <Button size="large">
                        <SortAscendingOutlined /> {currentSort}{' '}
                        <DownOutlined />
                    </Button>
                </Dropdown>
                <div style={{ marginRight: 8 }} />
                <Dropdown overlay={menu} trigger={['click']}>
                    <Button size="large">
                        <SortAscendingOutlined /> {currentSort}{' '}
                        <DownOutlined />
                    </Button>
                </Dropdown>
            </div>

            <>
                <TestGrid />
            </>
        </Card>
    )
};