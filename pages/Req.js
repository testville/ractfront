import {
    Button,
    Card,
    Col,
    Dropdown,
    Empty,
    Layout, Menu,
    PageHeader, 
    Image,
    Form, CheckboxGroup, Input, Space, Row, Divider, Typography, Tabs, Checkbox, Radio
} from "antd";
import React, { useState } from "react";
import SortAscendingOutlined from "@ant-design/icons/lib/icons/SortAscendingOutlined";
import DownOutlined from "@ant-design/icons/lib/icons/DownOutlined";
import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";
import TestGrid from "../components/Testgrid"
import TestEditForm from "../components/TestEditForm"
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const { Title } = Typography;
const { TabPane } = Tabs;

export default function Requests(props) {
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
      title="Заявка на регистрацию"
      onBack={() => props.history.push('/achievements')}
    >
            <>
            <Row>
    <Col span={5} style={{ textAlign: 'center' }}/>
    <Col span={14} style={{ textAlign: 'center' }}>
            <Form name="dynamic_form_nest_item" layout="vertical" onFinish={()=>{}} autoComplete="off">



                <Form.Item label="Имя/Фамилия" style={{ marginBottom: 0 }}>
        <Form.Item
          name="year"
          rules={[{ required: true }]}
          style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
        >
          <Input placeholder="" defaultValue="Лев" disabled/>
        </Form.Item>
        <Form.Item
          name="month"
          rules={[{ required: true }]}
          style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
        >
          <Input placeholder="" defaultValue="Ландау" disabled/>
        </Form.Item>
      </Form.Item>
                <Form.Item name={['user', 'introduction']} label="Описание Теста">
                    <Input.TextArea rows={6} disabled defaultValue="Итак, согласно постулатам Бора атом может принимать только
определенные порции энергии, которые соответствуют разности энергий
между стационарными состояниями атома. При переходе из возбужденного состояния в основное происходит излучение кванта энергии.
Наглядным подтверждением правильности постулатов Бора явились результаты опыта Франка и Герца"/>
                </Form.Item>
                <Row>
                    <Space>
                    <Image
      width={125}
      src="https://thumb.tildacdn.com/tild3737-6531-4462-a662-323162376164/-/resize/744x/-/format/webp/MLO____.jpg"
    />
                    <Image
      width={125}
      src="https://d2xzmw6cctk25h.cloudfront.net/assets/company/diploma-index-14acdddecdd8b5384dddb411875e05fecb993ca69c01fb79afe39c87e9b6ac50.jpg"
    />
                </Space>
                </Row>
                <Row>
                    <Col span={8}/>
                    <Col span={8}>
                        <Space>
                    <Button type="primary" htmlType="Добавит тест">
                        <Link to="/achievements">
                            Подтвердить
                        </Link>
                    </Button>
                        <Button type="danger" htmlType="Добавит тест">
                            <Link to="/achievements">
                                Отклонить
                            </Link>
                        </Button>
                        </Space>
                    </Col>
                    <Col span={8}/>
                </Row>
            </Form>
            </Col>
            <Col span={5} style={{ textAlign: 'center' }}/>
            </Row>
            </>
        </PageHeader>
    )
};