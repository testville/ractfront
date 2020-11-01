import {
    Button,
    Card,
    Dropdown,
    Empty,
    Input,
    Layout, Menu
} from "antd";
import React, { useState, useEffect } from "react";
import SortAscendingOutlined from "@ant-design/icons/lib/icons/SortAscendingOutlined";
import DownOutlined from "@ant-design/icons/lib/icons/DownOutlined";
import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";
import { Table, Tag, Space } from 'antd';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import UserGrid from "../components/UsersGrid"
import AchievmentsGrid from "../components/AchievmentsGrid"
export default (props) => {
    const columns = [
        {
            title: 'Имя',
            dataIndex: 'name',
            key: 'name',
            render: text => text
        },
        {
            title: 'Фамилия',
            dataIndex: 'address',
            key: 'address'
        },
        {
            title: 'Возраст',
            dataIndex: 'age',
            key: 'age',
            sorter: (a, b) => a.age - b.age,
        },
        
        {
            title: 'Характеристики',
            key: 'tags',
            dataIndex: 'tags',
            width: 200,
            render: tags => (
                <>
                    {tags.map(tag => {
                        let color = tag.length > 6 ? 'geekblue' : 'green';
                        if (tag === 'молодежь') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Действие',
            key: 'action',
            width: 300,
            render: (text, record) => (
                <Space size="middle">
                    <Link to={"/edittest/" + record.key}>
                    <Button>Принять</Button>
                    </Link>
                    <Space style={{color : "red"}}>
                        <Button danger onClick={()=>{}}>Отказать</Button>
                    </Space>
                </Space>
            ),
        },
    ];

    const { Content } = Layout;
    const [filteredList, setFilteredList] = useState([]);
    const [currentSort, setSort] = useState('Сортировка');
    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="Default">Default</Menu.Item>
            <Menu.Item key="Likes">Likes</Menu.Item>
            <Menu.Item key="Comments">Comments</Menu.Item>
            <Menu.Item key="Visits">Visits</Menu.Item>
        </Menu>
    );
    useEffect(() => {
        setFilteredList([
            {
                key: '1',
                name: 'Лев!!!',
                age: 32,
                address: 'Ландау',
                tags: ['талант', 'математик'],
            },
            {
                key: '2',
                name: 'Семен',
                age: 42,
                address: 'Иванов',
                tags: ['молодежь'],
            },
            {
                key: '3',
                name: 'Андрей',
                age: 32,
                address: 'Моргулис',
                tags: ['талант', 'спортсмен'],
            },
        ])
    }, [])

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
        <Card title={"Заявки на регистрацию" } >
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
                    placeholder="Поиск"
                    onChange={() => {
                    }}
                    size="large"
                    style={{
                        marginRight: 8
                    }}
                />
            </div>

            <AchievmentsGrid />
        </Card>
    )
};