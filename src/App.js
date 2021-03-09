import React from 'react';

import {Container} from "react-bootstrap";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Header from "./Header";
import FlatList from "./Components/FlatList";
import Flat from "./Components/Flat";
import Create from "./Components/Create";
import Login from "./Components/Login"


export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isLogin: true
        }
    }

    componentDidMount(){

    }

    render() {
        return (
            <Container >
                <Header isLogin={this.state.isLogin}/>
                <BrowserRouter>
                    <Switch>
                        <Route path="/card">
                            <Flat />
                        </Route>
                        <Route path="/create">
                            <Create />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/">
                            <FlatList/>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </Container>
        );
    }
}
