import React, { Component } from 'react';
import './App.css';
import MessageList from './MessageList';
import PropTypes from 'prop-types';




class App extends Component {

  getChildContext() {
    return { ruoiFly: "BachRuoi" };
  }

  render() {
      return (
        <div className="App">
          <MessageList
              messages={[
                {
                  text: "sadasd"
                },
                {
                  text: "222222"
                },
                {
                  text: "333333"
                }
              ]}
          />
        </div>
    );
  }
}

App.childContextTypes = {
  ruoiFly: PropTypes.string
};

export default App;
