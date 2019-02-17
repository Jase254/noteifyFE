import React, {Component} from 'react';
import {Card, Container} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.css'
import BoardImage from "../BoardImage/BoardImage";

class Browse extends Component {
  state = {search: "",data: null};

  handleSearchButtonState(tag){
    this.setState({search: tag},function(){
      this.actualSearch();
    });
  }

  constructor(){
    super();
    this.handleSearchButtonState = this.handleSearchButtonState.bind(this);
  }
  actualSearch(){
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
            handleSearchButtonState={this.handleSearchButtonState}
          />
        );
        this.setState({data: cards});
      }
    );
  }

  componentDidMount() {
    fetch('http://ec2-54-193-114-159.us-west-1.compute.amazonaws.com:5000/browse', {
      method: 'GET',
    }).then(
      (res) => res.json()
    ).then(
      data => {
        const url = 'http://ec2-54-193-114-159.us-west-1.compute.amazonaws.com:5000/static/';
        const cards = Object.keys(data).map((key) =>
          <BoardImage
            key={key}
            src={url+key}
            header={key}
            posted={'Posted Today'}
            description={'Professor supplied description'}
            tags={data[key]}
            handleSearchButtonState={this.handleSearchButtonState}
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
