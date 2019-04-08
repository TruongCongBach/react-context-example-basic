import React from "react";
import Button from "./Button";

class Message extends React.Component {
  render() {
    return (
      <div>
        {this.props.text}
        <Button color={this.props.color}>Delete</Button>
      </div>
    );
  }
}



export default Message;
