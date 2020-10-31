import {
    Button,
    Card,
    Col,
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

export default (props) => {
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: text => <a>{text}</a>,
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Tags',
          key: 'tags',
          dataIndex: 'tags',
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
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
              <a>Пригласить {record.name}</a>
              <a>Удалить</a>
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
          name: 'Ландау',
          age: 32,
          address: 'Москва',
          tags: ['талант', 'математик'],
        },
        {
          key: '2',
          name: 'Старый дед',
          age: 42,
          address: 'Санкт-Питербург',
          tags: ['молодежь'],
        },
        {
          key: '3',
          name: 'Спортсмен',
          age: 32,
          address: 'Тюмень',
          tags: ['талант', 'спортсмен'],
        },
      ])},[])

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
        <Card title={"Менеджер пользователей"} extra={
            <Button type="primary">
                <PlusOutlined />Добавить пользователя
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
                    placeholder="Поиск"
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
                {!filteredList.length ?
                    <Empty
                        image={Empty.PRESENTED_IMAGE_SIMPLE}
                        description="Ничего нет :("
                        style={{ marginTop: "20vh", minHeight: "40vh" }}
                    />
                    :
                    <Table columns={columns} dataSource={filteredList} />
                }
            </>
        </Card>
    )
};