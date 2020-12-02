import React, { Component } from 'react';
import axios from 'axios'
///import { LineChart, Line, ResponsiveContainer } from 'recharts';
import Widjet1 from './Widjets/Widjet1/Widjet1';
import Widjet2 from './Widjets/Widjet2/Widjet2';
import Widjet3 from './Widjets/Widjet3/Widjet3';
import Widjet4 from './Widjets/Widjet4/Widjet4';
import Widjet5 from './Widjets/Widjet5/Widjet5';
import Widjet6 from './Widjets/Widjet6/Widjet6';
import './Dashboard.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] }
        axios.get('http://localhost:3001/movies')
            .then((res) => {
                this.setState({ data: res.data });
                console.log("res :", res.data)
                console.log("this.state.data :", this.state.data)
            })
            .catch((err) => {
                console.error(err);
                alert("can't access to API");
            })
    }
    render() {
        return (
            <div className="container-dashboard">
                {
                    this.state.data.length !== 0
                        ? <div style={{'height': '100%'}}>
                            <div className="container-dashboard-top">
                                <div className="container-dashboard-topchild">
                                    <Widjet1 data={this.state.data} />
                                </div>
                                <div className="container-dashboard-topchild">
                                    <Widjet2 data={this.state.data} />
                                </div>
                                <div className="container-dashboard-topchild">
                                    <Widjet3 data={this.state.data} />
                                </div>
                            </div>
                            <div className="container-dashboard-bot">
                                <div className="container-dashboard-botchild">
                                    <Widjet4 data={this.state.data} />
                                </div>
                                <div className="container-dashboard-botchild">
                                    <Widjet5 data={this.state.data} />
                                </div>
                                <div className="container-dashboard-botchild">
                                    <Widjet6 data={this.state.data} />
                                </div>
                            </div>
                        </div>
                        : <div style={{'display': 'hidden'}}></div>
                }

            </div>
        );
    }
}

export default Dashboard;