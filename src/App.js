import React, {Component} from 'react';
import './App.css';
// import MessageList        from './MessageList';
import PropTypes          from 'prop-types';
import {connect}          from "react-redux";
import {login}            from "./serviceAPI";


const credential = {username: "admin@gmail.com", password: "123456"};
@connect(state => {
    console.log(state);
    return {}
}, dispatch => {
    return {
        login: async () => {
            function onSuccess(success) {
                dispatch({ type: "LOGIN_SUCCESS", payload: success });
                return success;
            }
            function onError(error) {
                dispatch({ type: "ERROR_GENERATED", error });
                return error;
            }
            try {
                const success = login(credential);
                return onSuccess(success);
            } catch (error) {
                return onError(error);
            }
        }
    }
})
class App extends Component {

    getChildContext() {
        return {ruoiFly: "BachRuoi"};
    }
    async handleOnclickLogin(e) {
        try {
            const response = await this.props.login();
            console.log('response', response);
        } catch(error) {
            console.log("response fall");
        }
    }

    render() {
        return (
            <div className="App">
                <button
                    onClick={this.handleOnclickLogin.bind(this)}
                >login</button>
                {/*<MessageList*/}
                {/*    messages={[*/}
                {/*        {*/}
                {/*            text: "sadasd"*/}
                {/*        },*/}
                {/*        {*/}
                {/*            text: "222222"*/}
                {/*        },*/}
                {/*        {*/}
                {/*            text: "333333"*/}
                {/*        }*/}
                {/*    ]}*/}
                {/*/>*/}
            </div>
        );
    }
}

App.childContextTypes = {
    ruoiFly: PropTypes.string
};

export default App;
