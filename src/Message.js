import React from "react";
import Button from "./Button";
import {connect} from "react-redux";

@connect(state => {
  return {
    textTest: state.testStore
  }
}, dispatch => {
  return {

  }
})
class Message extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.text}
        <Button>Delete</Button>
      </div>
    );
  }
}



export default Message;
