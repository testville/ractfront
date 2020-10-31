import React from "react";
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { setUserSession } from "../utils/sessionUtils";

export default function LoginPage(props) {

    const handleSubmit = () => {
        const user = { "name": "temp" };
        setUserSession(user);
        props.history.push('/')
    };

    return (
        <div className="login-container">
            <br />
            <Form
                name="normal_login"
                className="login-form"
                onFinish={handleSubmit}
            >
                <h1 style={{ textAlign: "center" }}>Вход</h1>

                <Form.Item
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Введите имя',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Имя" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Введите пароль',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Пароль"
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Войти
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );

}