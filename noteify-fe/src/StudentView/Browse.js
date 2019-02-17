import React, {Component} from 'react';
import {Card, Container} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.css'
import BoardImage from "../BoardImage/BoardImage";

class Browse extends Component {
  state = {data: null};

  componentDidMount() {
    fetch('http://ec2-54-193-114-159.us-west-1.compute.amazonaws.com:5000/test', {
      method: 'GET',
    }).then(
      (res) => res.json()
    ).then(
      data => {
        const cards = Object.keys(data).map((key) =>
          <BoardImage
            key={key}
            src={key}
            header={key.split("static/")[1]}
            posted={'Posted Today'}
            description={'This photo was taken when everyone was less tired'}
            tags={data[key]}
          />
        );
        this.setState({data: cards});
      }
    )
  }
  render() {
    return (
      <Container style={{marginTop: '7em'}}>
        <Card.Group centered>
        {this.state.data}
        </Card.Group>
      </Container>
    );
  }
}

export default Browse;
