import React, {Component} from 'react';
import {Image, Card, Label, Button, Container} from "semantic-ui-react";


class BoardImage extends Component {
  KeyLinks(){
    const tags = Object.keys(this.props.tags).map((key) =>
      <Label key={key}
             onClick={() => this.props.handleSearchButtonState(this.props.tags[key])}
      >
        {this.props.tags[key]}
      </Label>
    );
    return tags;
  }
  render() {
    return (
      <Card color={'red'}>
        <Image
          as={'a'}
          href={this.props.src}
          target={'_blank'}
          src={this.props.src}
        />
        <Card.Content>
          <Card.Header>
            {this.props.header}
          </Card.Header>
          <Card.Meta>
            {this.props.posted}
          </Card.Meta>
          <Card.Description>
            <b>Description: <br/>
            </b>
              {this.props.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          Tags: <br/>
          <Container>
          {this.KeyLinks()}
          </Container>
        </Card.Content>
      </Card>
    );
  }
}

export default BoardImage;
