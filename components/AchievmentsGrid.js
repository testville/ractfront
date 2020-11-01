import {
    Table, Tag, Space, Button, Input, Row, Col, Divider 
} from "antd";
import React, {
    useState,
    Component
} from "react";
import TestModal from "./TestModal"
import { Link } from 'react-router-dom';
import reactDomTestUtilsProductionMin from "react-dom/cjs/react-dom-test-utils.production.min";
import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";
import MinusOutlined from "@ant-design/icons/lib/icons/MinusOutlined";
const data = [
    {
        key: '1',
        name: 'Лев',
        age: 12,
        address: 'Ландау',
        desc: 'По мнению Джона Кехо, удача – это следствие простых законов, которые начинают действовать...',
        files: 4,
        tests : 3,
        teachers: 2,
        role : 'Талант',
        tags: ['талант', 'математик'],
    },
    {
        key: '2',
        name: 'Семен',
        age: 14,
        address: 'Иванов',
        desc: 'По мнению Джона Кехо, удача – это следствие простых законов, которые начинают действовать...',
        files: 1,
        tests : 7,
        teachers: 1,
        role : 'Талант',
        tags: ['молодежь'],
    },
    {
        key: '3',
        name: 'Андрей',
        age: 50,
        address: 'Моргулис',
        desc: 'По мнению Джона Кехо, удача – это следствие простых законов, которые начинают действовать...',
        files: 2,
        tests : 1,
        teachers: 4,
        role : 'Администратор',
        tags: ['талант', 'спортсмен'],
    },
];
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
        title: 'Описание',
        dataIndex: 'desc',  
        key: 'desc'
    },
    {
        title: 'Файлы',
        dataIndex: 'files',  
        key: 'files'
    },
    {
        title: 'Действие',
        key: 'action',
        width: 300,
        render: (text, record) => (
            <Space size="middle">
                    <Link to={"/req"}>
                        <Button>Открыть</Button>
                    </Link>
                <Space style={{color : "red"}}>
                    <Button danger onClick={()=>{}}>Удалить</Button>
                </Space>
            </Space>
        )
    },
];  
  
  
  export default class UsersGrid extends React.Component {
    state = {
      selectedRowKeys: [], // Check here to configure the default column
    };
  
    onSelectChange = selectedRowKeys => {
      console.log('selectedRowKeys changed: ', selectedRowKeys);
      this.setState({ selectedRowKeys });
    };
  
    render() {
      const { selectedRowKeys } = this.state;
      const rowSelection = {
        selectedRowKeys,
        onChange: this.onSelectChange,
        selections: [
            {
                key: 'all',
                text: 'Выбрать всех',
                onSelect: changableRowKeys => {
                  let newSelectedRowKeys = [];
                  newSelectedRowKeys = changableRowKeys;
                  this.setState({ selectedRowKeys: newSelectedRowKeys });
                },
            },
            {
                key: 'deleteAll',
                text: 'Удалить',
                onSelect: changableRowKeys => {
                  let newSelectedRowKeys = [];
                  newSelectedRowKeys = changableRowKeys;
                  this.setState({ selectedRowKeys: newSelectedRowKeys });
                },
            },
            {
                key: 'deleteAll',
                text: 'Удалить всех',
                onSelect: changableRowKeys => {
                  let newSelectedRowKeys = [];
                  newSelectedRowKeys = changableRowKeys;
                  this.setState({ selectedRowKeys: newSelectedRowKeys });
                },
            }   
        ],
      };
      return (
        <>
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
        </>
        );
    }
  }