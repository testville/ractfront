import { Form, CheckboxGroup, Input, Button, Space, Row, Col, Divider, Typography, Tabs, Checkbox, Radio  } from 'antd';
import { MinusCircleOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import React, { useState } from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const { Title } = Typography;
const { TabPane } = Tabs;


export default function TestEditForm() {
  const onFinish = values => {
    console.log('Received values of form:', values);
  };

  function printParent(number, type)
  {
    if(type == 'one')
    {
      return (
        <Radio.Group defaultValue="one" buttonStyle="solid" style={{float : 'left', width : '100%'}} onChange={() => {}}>
          {printAnswers(number, type)}
        </Radio.Group>
      );
    }else if(type == 'two')
    {
      return (
        <Radio.Group defaultValue="one" buttonStyle="solid" style={{float : 'left', width : '100%'}} onChange={() => {}}>
          {printAnswers(number, type)}
        </Radio.Group>
      );
    }
  }

  function printAnswers(number, type)
  {
    return(
      [...Array(number).keys()].map((e) => {
        if(type == 'one')
        {
          return (
            <Row span={24} style={{paddingTop : 24}}>
                <Col span={2}>
                  <Radio  value={e} style={{marginTop : '2.5%'}} />
                </Col>
                <Col span={18}>
                  <Input />
                </Col>
                <Col span={4}>
                  <DeleteOutlined />
                </Col>
            </Row>
          );
        }else if(type == 'two')
        {
          return (
            <Row span={24} style={{paddingTop : 24}}>
                <Col span={2}>
                  <Checkbox  value={e} style={{marginTop : '2.5%'}} />
                </Col>
                <Col span={18}>
                  <Input />
                </Col>
                <Col span={4}>
                  <DeleteOutlined />
                </Col>
            </Row>
          );
        }
      })
    );
  }

  const [numberOfAnswers, setNumberOfAnswers] = useState(0);
  const [type, setType] = useState('one');
  const [answers, setAnswers] = useState([])

  return (
    <Row>
    <Col span={5} style={{ textAlign: 'center' }} />
    <Col span={14} style={{ textAlign: 'center' }}>
    <Form name="dynamic_form_nest_item" layout="vertical" onFinish={onFinish} autoComplete="off">
      <Form.Item name={['user', 'website']} label="Название Теста" level={4}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'introduction']} label="Описание Теста">
        <Input.TextArea rows={6}/>
      </Form.Item>
      <Form.List name="users">
        {(fields, { add, remove }) => (
          <>
            {fields.map(field => (
              <Col style={{paddingBottom : 24}}>
                <Title style={{float : 'left'}} level={5}>{"Вопрос " + (field.key + 1)}</Title>
                <Divider />
                <Row style={{paddingBottom : 24}}>
                    <Input placeholder="Название" />
                </Row>
                <Row style={{paddingBottom : 24}}>
                  <Input placeholder="Текст" />
                </Row>
                <Tabs defaultActiveKey="1" onChange={()=>{}}>
                  <TabPane tab="Текстовый ответ" key="1">
                    <Row style={{paddingBottom : 24}}>
                      <Input placeholder="Текст" />
                    </Row>
                  </TabPane>
                  <TabPane tab="Список ответов" key="2">
                  <Row style={{paddingBottom : 12}}>
                    <Col span={16} >
                      <Radio.Group defaultValue="one" buttonStyle="solid" style={{float : 'left'}} onChange={(type) => setType(type.target.value)}>
                        <Radio.Button value='one'>Один правильный ответ</Radio.Button>
                        <Radio.Button value='two'>Несколько правильных ответов</Radio.Button>
                      </Radio.Group>
                    </Col>
                    <Col span={8}>
                      <Button style={{float : 'right'}} type="primary" onClick={()=>{setNumberOfAnswers(numberOfAnswers + 1)}}>
                        <PlusOutlined />Добавить ответ
                      </Button>
                    </Col>
                  </Row>
                  <Row span={24}>
                       {printParent(numberOfAnswers, type)}
                  </Row>
                  </TabPane>
                </Tabs>
                
              </Col>
              
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Добавить вопрос
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
      <Row>
        <Col span={24} style={{ textAlign: 'center' }}>
        <Button type="primary" htmlType="Добавит тест">
          <Link to="/tests">
            Подтвердить
          </Link>
        </Button>
        </Col>
        </Row>
      </Form.Item>
    </Form>
    </Col>
    <Col span={5} style={{ textAlign: 'center' }} />
    </Row>
  );
};