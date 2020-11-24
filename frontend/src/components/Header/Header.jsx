import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    pressDashboard = () => {if (this.props.admin) this.props.handler()}
    pressAdmin = () => {if (this.props.admin === false) this.props.handler()}

    render() {
        return (
            <div className="container-header">
                <div>
                    <button className="btn" onClick={this.pressDashboard}>
                        Dashboard
                    </button>
                </div>

                <div>
                    <b>Analyse de Data sur une BDD de film</b>
                </div>

                <div>
                    <button className="btn" onClick={this.pressAdmin}>
                        Admin
                    </button>
                </div>

            </div>
        );
    }
}

export default Header;