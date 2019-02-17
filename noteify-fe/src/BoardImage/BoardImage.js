import React, {Component} from 'react';
import {Image, Card} from "semantic-ui-react";

class BoardImage extends Component {
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
          {this.props.tags}
        </Card.Content>
      </Card>
    );
  }
}

export default BoardImage;
