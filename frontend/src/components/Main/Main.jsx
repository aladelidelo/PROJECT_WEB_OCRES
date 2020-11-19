import React, { Component } from 'react';
import './Main.css';
import Admin from "./Admin/Admin";
import Dashboard from "./Dashboard/Dashboard";



class Main extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.admin) {
            return (
                <div className="container-main">
                  <Admin admin={this.props.admin} />
                </div>
            );
        }
       else {
            return (
                <div className="container-main">
                  <Dashboard admin={this.props.admin} />
                </div>
            );
        }
    }
}

export default Main;