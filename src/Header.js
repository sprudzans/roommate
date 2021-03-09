import React from 'react';

import {Navbar, Nav, Button} from "react-bootstrap";


export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <Navbar>
                    <Navbar.Brand href="#home"><i className="bi bi-house"/> Без риелтора </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Главная</Nav.Link>
                            <Nav.Link href="/card">Карточка</Nav.Link>
                        </Nav>
                        <div>
                            {
                                this.props.isLogin
                                    ? <Button type="submit" href="/create">Создать обьект</Button>
                                    : <Button type="submit" href="/login">Войти</Button>
                            }
                        </div>
                    </Navbar.Collapse>
                </Navbar>
        );
    }
}