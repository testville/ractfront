import { Statistic, Row, Col, Button, Card } from 'antd';
import { ChartCard, MiniArea } from 'ant-design-pro/lib/Charts';
import React from 'react'
import numeral from 'numeral';
import moment from 'moment';
import NumberInfo from 'ant-design-pro/lib/NumberInfo';
export default () => {
    const visitData = [];
    const beginDay = new Date().getTime();
    for (let i = 0; i < 20; i += 1) {
        visitData.push({
            x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
            y: Math.floor(Math.random() * 100) + 10,
        });
    }

    return (
        <Card title={"Статистика"}>
            <Row gutter={16}>
                <Col span={12}>
                    <Statistic title="Всего пользователей" value={11281} />
                </Col>
                <Col span={12}>
                    <Statistic title="Пройденных тестов" value={113} />
                </Col>
                <Col span={24} style={{ marginTop: 10 }}>
                    <ChartCard title="Активность пользователей" total={numeral(8846).format('0,0')} contentHeight={134}>
                        <NumberInfo
                            subTitle={<span></span>}
                            total={numeral(12321).format('0,0')}
                            status="up"
                        />
                        <MiniArea line height={45} data={visitData} />
                    </ChartCard>
                </Col>
            </Row>
        </Card>
    )
}