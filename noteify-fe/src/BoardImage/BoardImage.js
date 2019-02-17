import React, {Component} from 'react';
import {Image, Card, Label} from "semantic-ui-react";
import {Link} from "react-router-dom";

function KeyLinks(props){
  const tags = Object.keys(props.tags).map((key) =>
    <Label key={key}
           as={Link}
           to={'/search/'+props.tags[key]}
    >
      {props.tags[key]}
    </Label>
  );
  return tags;
}

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
          <KeyLinks tags={this.props.tags}/>
        </Card.Content>
      </Card>
    );
  }
}

export default BoardImage;
