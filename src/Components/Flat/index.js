import React from 'react';

import {Row, Col, Card, Button} from "react-bootstrap";
export default class Flat extends React.Component {
    render() {
        return (
            <Row>
                <Col lg={8}>
                    <Card>
                        <Card.Header>3-комн. квартира, 71 м²</Card.Header>
                        <Card.Body>
                            <Card.Title>2-комн. кв., 49 м², 8/17 этаж</Card.Title>
                            <Card.Text>
                                СТАЛИНСКИЙ ДОМ! ТОЛСТЫЕ СТЕНЫ! ХОРОШАЯ ШУМОИЗОЛЯЦИЯ! ВЫСОКИЕ ПОТОЛКИ! ВЪЕЗД ПОД ШЛАГБАУМ! 3 ИЗОЛИРОВАННЫЕ КОМНАТЫ! ПОДОГРЕВ ПОЛОВ! СИСТЕМА КОНДИЦИОНИРОВАНИЯ! Вашему вниманию предлагается уютная квартира в одном из самых престижных районов Столицы. Квартира полностью оборудована всей необходимой мебелью и бытовой техникой от ведущих мировых производителей. Развитая инфраструктура района. Удобная транспортная развязка. Пешая доступность от метро. Квартира готова к заселению. Более подробная информация по телефону. Звоните.
                            </Card.Text>
                            <Button variant="primary">+79090909000</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>110 000 ₽/мес.</Card.Title>
                            <Card.Text>Залог 110 000 ₽, без комиссии, предоплата за 1 месяц, от года</Card.Text>
                            <Button variant="primary">+79090909000</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        );
    }
}
