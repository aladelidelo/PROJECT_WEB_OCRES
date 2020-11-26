import React, { Component } from 'react';
import { Line, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Label, Bar, ComposedChart } from 'recharts';
import './../Widjets.css';

class Widjet1 extends Component {
  constructor(props) {
    super(props);

    var parseData = (bigData) => {
      var data = [{ name: "1980", moyenne: 0, count: 0, total: 0 }, { name: "1990", moyenne: 0, count: 0, total: 0 }, { name: "2000", moyenne: 0, count: 0, total: 0 }, { name: "2010", moyenne: 0, count: 0, total: 0 }];
      bigData.forEach((e) => {
        if (e.yearOfRelease !== "N/A" && e.duration !== "N/A" && e.type ==="movie") {
          var year = parseInt(e.yearOfRelease.slice(-4));
          var duration = parseInt(e.duration);
          data = data.map((x) => {
            if (year >= (parseInt(x.name)) && year < (parseInt(x.name) + 10)) {
              x.count++;
              x.total = x.total + duration;
            }
            return x;
          })
        }
      })
      data = data.map((x) => {
        if (x.count === 0) x.moyenne = 0;
        else x.moyenne = (x.total) / (x.count);
        return x;
      })
      return (data);
    }
    
    this.data = parseData(props.data);
  }



  render() {
    return (
      <div className="widjet-container">
        <div className="title">
          <h5> Durée des films par décennie</h5>
        </div>
        <div className="graph">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={this.data} margin={{ top: 30, right: 30, bottom: 30, left: 20 }}>
              <Line yAxisId="left" dataKey="moyenne" stroke="white" activeDot={{ r: 8 }} type="stepAfter" />
              <Bar yAxisId="right" dataKey="count" barSize={20} fill="#32CD32" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis tick={{ fontSize: 12 }} size="1" dataKey="name" >
                <Label value="Années" offset={-15} position="insideBottom" style={{ textAnchor: 'middle', fontSize: '80%', fill: 'rgba(255, 255, 255, 0.87)' }} />
              </XAxis>
              <YAxis yAxisId="left" tick={{ fontSize: 12 }}>
                <Label value="durée en min" offset={-15} position="left" angle={-90} style={{ textAnchor: 'middle', fontSize: '80%', fill: 'rgba(255, 255, 255, 0.87)' }} />
              </YAxis>
              <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12 }} >
                <Label value="nombre de films" offset={-15} position="right" angle={90} style={{ textAnchor: 'middle', fontSize: '80%', fill: 'rgba(255, 255, 255, 0.87)' }} />
              </YAxis>
              <Tooltip />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}

export default Widjet1;