import React, { Component } from 'react';
import { LineChart, Line, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Label } from 'recharts';
import './Widjet1.css';

class Widjet1 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={this.props.data} margin={{ top: 30, right: 30, bottom: 30, left: -10 }}>
                    <Line type='linear' dataKey="v" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5"  />
                        <XAxis tick={{fontSize: 12}} size="1" dataKey="name" >
                             <Label value="Années" offset={0} position="insideBottom" />
                        </XAxis>
                        <YAxis />
                        <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        );
    }
}

export default Widjet1;