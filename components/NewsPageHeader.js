import React, { useState } from "react"
import { Button, Col, Descriptions, Dropdown, Input, Layout, Menu, Modal, PageHeader, Popconfirm, Row } from "antd";
import moment from "moment";

export default function NewsPageHeader() {
    const visitData = [];
    const beginDay = new Date().getTime();
    for (let i = 0; i < 20; i += 1) {
        visitData.push({
            x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
            y: Math.floor(Math.random() * 100) + 10,
        });
    }
    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true)
    };

    return (
        <>
            <div className="site-page-header-ghost-wrapper">
                <PageHeader
                    ghost={false}
                    title={"Новости"}
                    extra={[
                        <Popconfirm
                            title="Вы уверены?"
                            onConfirm={() => console.log(1)}
                            onCancel={() => console.log(2)}
                            okText="Да"
                            cancelText="Нет"
                        >
                            <Button key="3">Удалить</Button>
                        </Popconfirm>,
                        <Button key="1" type="primary">Изменить</Button>,
                    ]}
                >
                    <Row>
                        <Col>
                            <Input.Search
                                allowClear
                                placeholder="Введите поисковой запрос"
                                onChange={() => {
                                }}
                                size="large"
                                style={{
                                    marginRight: 8
                                }}
                            />
                        </Col>
                        <Col>
                            <Dropdown overlay={
                                <Menu>
                                    <Menu.Item key="Default">Default</Menu.Item>
                                    <Menu.Item key="Likes">Likes</Menu.Item>
                                    <Menu.Item key="Comments">Comments</Menu.Item>
                                    <Menu.Item key="Visits">Visits</Menu.Item>
                                </Menu>
                            } trigger={['click']}>
                                <Button size="large">
                                    Default
                                </Button>
                            </Dropdown>
                        </Col>
                    </Row>
                </PageHeader>

            </div>
            <Modal
                title="Изменить гильзу"
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
            >
                <Input placeholder="Номер гильзы" value={134} />
            </Modal>
        </>
    )
}