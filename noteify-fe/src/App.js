import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import BoardImage from "./BoardImage/BoardImage";
import {Container} from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <BoardImage
            src={'http://ec2-54-193-114-159.us-west-1.compute.amazonaws.com:5000/static/img-16-02-22_46_00.jpg'}
            header={'First Post'}
            posted={'Posted Today'}
            description={'This photo was taken when everyone was less tired'}
            tags={"Mango"}
          />
        </Container>
      </div>
    );
  }
}

export default App;
