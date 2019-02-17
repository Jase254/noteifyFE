import React, {Component} from 'react';
import {Button, Container, Form, Card} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.css'
import BoardImage from "../BoardImage/BoardImage";

class Search extends Component {
  state = {search: "", data: null};

  handleSubmit = event => {
    event.preventDefault();
    fetch('http://ec2-54-193-114-159.us-west-1.compute.amazonaws.com:5000/search/'+this.state.search, {
      method: 'GET',
    }).then(
      (res) => res.json()
    ).then(
      data => {
        const url = 'http://ec2-54-193-114-159.us-west-1.compute.amazonaws.com:5000/static/';
        const cards = Object.keys(data).map((key) =>
          <BoardImage
            key={key}
            src={url + key}
            header={key}
            posted={'Posted Today'}
            description={'Professor supplied description'}
            tags={data[key]}
          />
        );
        this.setState({data: cards});
      }
    );
  };

  handleSearchChange = event => {
    this.setState({search: event.target.value});
    console.log(this.state.search);
  };

  render() {
    return <Container style={{marginTop: '7em'}}>
      <Form size={'large'} onSubmit={this.handleSubmit}>
        <Form.Group widths={'equal'}>
          <Form.Input icon={'search'}
                      placeholder={'Search'}
                      onChange={this.handleSearchChange}
          />
          <Button color={'red'} size={'small'} type={"submit"}>
            Search
          </Button>
        </Form.Group>
      </Form>
      <Container>
        <Card.Group centered>
        {this.state.data}
        </Card.Group>
      </Container>
    </Container>;
  }
}

export default Search;