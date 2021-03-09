import React from 'react';


import {Row, Col, Card, Button} from "react-bootstrap";

export default class FlatList extends React.Component {
    render() {
        return (
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>28000 руб / мес.</Card.Header>
                        <Card.Body>
                            <Card.Title>2-комн. кв., 49 м², 8/17 этаж</Card.Title>
                            <Card.Text>
                                Первомайская 5мин<br/>
                                Щелковская 5мин<br/>
                                Измайловская 5мин
                            </Card.Text>
                            <Button variant="primary">+79090909000</Button>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        );
    }
}
