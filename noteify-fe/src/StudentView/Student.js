import React, { Component } from 'react';
import {Button, Container, Header, Icon, Menu} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.css'
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";
import Browse from './Browse';
import Search from './Search';

class Student extends Component {
    constructor(){
        super();
        this.state = {
            activeItem: 'home'
        }
    }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name });
    };

    render() {
        console.log(`${this.props.match.url}/search`);
        console.log(this.props.match.path + '/search');
        return (
            <Container>
                <Container>
                    <Header as='h2' icon textAlign='center'>
                        <Icon name='sticky note' circular />
                        <Header.Content>Noteify</Header.Content>
                        <Header.Subheader>We will think of it later</Header.Subheader>
                    </Header>
                </Container>
                <Container>
                    <Menu secondary fluid widths={4}>
                        <Menu.Item
                            name='browse'
                            active={this.state.activeItem === 'browse'}
                            as={Link}
                            to={this.props.match.url}
                            onClick={this.handleItemClick}>
                            <Button fluid animated={"fade"}>
                                <Button.Content visible><Icon name={"grid layout"}/></Button.Content>
                                <Button.Content hidden>Browse</Button.Content>
                            </Button>
                        </Menu.Item>
                        <Menu.Item
                            name='search'
                            active={this.state.activeItem === 'search'}
                            onClick={this.handleItemClick}
                            as={Link}
                            to={`${this.props.match.url}/search`}>
                            <Button fluid animated={"fade"}>
                                <Button.Content visible><Icon name={"search"}/></Button.Content>
                                <Button.Content hidden>Search</Button.Content>
                            </Button>
                        </Menu.Item>
                        <Menu.Item
                            name='logout'
                            active={this.state.activeItem === 'logout'}
                            onClick={this.handleItemClick}
                            as={Link}
                            to={'/'}>
                            <Button fluid animated={"fade"}>
                                <Button.Content visible><Icon name={"log out"}/></Button.Content>
                                <Button.Content hidden>Logout</Button.Content>
                            </Button>
                        </Menu.Item>
                    </Menu>
                </Container>
                    <Container>
                        <Route exact path={this.props.match.path} component={Browse}/>
                        <Route path={this.props.match.path + '/search'} component={Search}/>
                    </Container>
            </Container>
        );
    }
}

export default Student;