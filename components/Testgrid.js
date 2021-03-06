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
const data = [];
const columns = [
    {
      title: 'Название',
      dataIndex: 'name'
    },
    {
      title: 'Описание',
      dataIndex: 'address'
    },
    {
        title: 'Участники',
        dataIndex: 'age',
        width: 200,
        sorter: (a, b) => a.age - b.age,
        render: (text, record) => (
            <Link to={"/users"}>
                <Button type="link">{record.age}</Button>
            </Link>
          ),
    },
    {
        title: 'Действие',
        key: 'action',
        width: 300,
        render: (text, record) => (
          <Space size="middle">
            <Link to={"/edittest/" + record.key}>
               <Button>Изменить</Button>
            </Link>
             <Space style={{color : "red"}}>
                <Button danger onClick={()=>{}}>Удалить</Button>
             </Space>
          </Space>
        ),
    }
  ];
  
  for (let i = 0; i < 12; i++) {
    data.push({
      key: i,
      name: `Тест ${i + 1}`,
      age: i + 245,
      address: `Описание ${i + 1}`,
    });
  }
  
  export default class TestGrid extends React.Component {
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