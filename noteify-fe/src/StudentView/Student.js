import React, {Component} from 'react';
import {Button, Container, Header, Icon, Menu} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.css'
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";
import Browse from './Browse';
import Search from './Search';

class Student extends Component {
  constructor() {
    super();
    this.state = {
      activeItem: 'home'
    }
  }

  handleItemClick = (e, {name}) => {
    this.setState({activeItem: name});
  };

  render() {
    return (
      <Container>
        <Menu fixed={'top'} fluid widths={4} inverted>
          <Menu.Item
            header
            as={Header}
          >
            <Icon size={'large'} name='sticky note' inverted style={{ marginRight: '1.5em' }}/>
            Noteify
          </Menu.Item>
          <Menu.Item
            name='browse'
            as={Link}
            to={this.props.match.url}
            onClick={this.handleItemClick}>
            <Button fluid animated={"fade"} color={'black'}>
              <Button.Content visible><Icon name={"grid layout"}/></Button.Content>
              <Button.Content hidden>Browse</Button.Content>
            </Button>
          </Menu.Item>
          <Menu.Item
            name='search'
            onClick={this.handleItemClick}
            as={Link}
            to={`${this.props.match.url}/search`}>
            <Button fluid animated={"fade"} color={'black'}>
              <Button.Content visible><Icon name={"search"}/></Button.Content>
              <Button.Content hidden>Search</Button.Content>
            </Button>
          </Menu.Item>
          <Menu.Item
            name='logout'
            onClick={this.handleItemClick}
            as={Link}
            to={'/'}>
            <Button fluid animated={"fade"} color={'black'}>
              <Button.Content visible><Icon name={"log out"}/></Button.Content>
              <Button.Content hidden>Logout</Button.Content>
            </Button>
          </Menu.Item>
        </Menu>
        <Container>
          <Route exact path={this.props.match.path} component={Browse}/>
          <Route path={this.props.match.path + '/search'} component={Search}/>
        </Container>
      </Container>
    );
  }
}

export default Student;