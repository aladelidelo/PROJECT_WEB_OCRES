import React, { Component } from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import Widjet1 from './Widjets/Widjet1/Widjet1';
import './Dashboard.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        let data = [{ name: 'a', v: 10 }, { name: 'b', v: 20 }, { name: 'c', v: 4 }, { name: 'd', v: 17 }, { name: 'SALUT', v: 15 }, { name: 'a', v: 17 }, { name: 'cA', v: 10 }, { name: 'VA', v: 10 }];
        this.state = { data: data }
    }
    render() {
        return (
            <div className="container-dashboard">
                <div className="container-dashboard-top">
                    <div className="container-dashboard-topchild">
                        <Widjet1 data={this.state.data} />
                    </div>
                    <div className="container-dashboard-topchild"></div>
                    <div className="container-dashboard-topchild"></div>
                </div>
                <div className="container-dashboard-bot">
                    <div className="container-dashboard-botchild"></div>
                    <div className="container-dashboard-botchild"></div>
                    <div className="container-dashboard-botchild"></div>
                </div>
            </div>
        );
    }
}

export default Dashboard;