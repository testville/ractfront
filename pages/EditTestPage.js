import {
    Button,
    Card,
    Col,
    Dropdown,
    Empty,
    Input,
    Layout, Menu,
    PageHeader
} from "antd";
import React, { useState } from "react";
import SortAscendingOutlined from "@ant-design/icons/lib/icons/SortAscendingOutlined";
import DownOutlined from "@ant-design/icons/lib/icons/DownOutlined";
import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";
import TestGrid from "../components/Testgrid"
import TestEditForm from "../components/TestEditForm"
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

export default function EditTestPage(props) {
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

    console.log(props.match.params.id);

    return (
        
            <PageHeader
      ghost={false}
      onBack={() => window.history.back()}
      title="Изменение теста"
      onBack={() => props.history.push('/tests')}
    >
            <div
                style={{
                    marginLeft: 8,
                    marginRight: 8,
                    marginBottom: 16,
                    display: 'flex'
                }}
            >
            </div>
            <>
                <TestEditForm />
            </>
        </PageHeader>
    )
};