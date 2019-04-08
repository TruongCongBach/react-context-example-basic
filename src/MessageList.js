import React from "react";
import Message from "./Message";
import PropTypes from "prop-types";


class MessageList extends React.Component {

  getChildContext() {
    return { color: "purple" };
  }

  render() {
    console.log(this.context, "asas");
    const children = this.props.messages.map((message, index)=> (
      <Message key={index} text={message.text} />
    ));
    return <div>{children}</div>;
  }
}

MessageList.childContextTypes = {
  color: PropTypes.string
};

MessageList.contextTypes = {
  ruoiFly: PropTypes.string
};

export default MessageList;
