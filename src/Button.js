import React from "react";
import PropTypes from "prop-types";


class Button extends React.Component {
  render() {
    console.log(this.props, 'sadasd');
    console.log(this.context, 'context');
    return (
      <button style={{ background: this.context.color }}>
        {this.props.children}
      </button>
    );
  }
}

Button.contextTypes = {
  color: PropTypes.string,
  ruoiFly: PropTypes.string
};

export default Button;
