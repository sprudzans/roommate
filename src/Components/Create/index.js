import React from 'react';

import {Form, Row, Col, Button} from "react-bootstrap";
export default class Create extends React.Component {
    render() {
        return (
            <Form>
                <Form.Row as={Row}>
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Название</Form.Label>
                        <Form.Control placeholder="Название обьекта" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPrice">
                        <Form.Label>Цена</Form.Label>
                        <Form.Control type="number" placeholder="Цена" />
                    </Form.Group>
                </Form.Row>

                <Form.Group as={Col} controlId="formGridAddress">
                    <Form.Label>Адрес</Form.Label>
                    <Form.Control placeholder="Адрес" />
                </Form.Group>

                <Form.Group controlId="formGridDesc">
                    <Form.Label>Описание обьекта</Form.Label>
                    <Form.Control as="textarea" placeholder="Короткое описание" rows={3} />
                </Form.Group>

                <Form.Row as={Row}>
                    <Form.Group as={Col} lg={1} className="ms-auto mt-2">
                        <Button variant="primary" type="submit">
                            Создать
                        </Button>
                    </Form.Group>
                </Form.Row>
            </Form>
        );
    }
}
