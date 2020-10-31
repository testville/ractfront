import { Card } from "antd";
import React from "react"

export default () => {
    return (
        <Card
            hoverable
            cover={<img alt="example"
                src="https://b1.filmpro.ru/c/571138.700xp.jpg" />}
        >
            <Card.Meta title="Мероприятие с очень длинным заголовком" description="Мероприятие с очень длинным описанием" />
        </Card>
    )
}