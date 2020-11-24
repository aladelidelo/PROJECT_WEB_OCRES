import React, { Component } from 'react';
import { LineChart, Line, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Label, Bar, ComposedChart, BarChart } from 'recharts';
import './../Widjets.css';

class Widjet5 extends Component {
  constructor(props) {
    super(props);

    var parseData = (bigData) => {
      var data = [{ name: "English", moyenne: 0, count: 0, total: 0 }, { name: "French", moyenne: 0, count: 0, total: 0 }, { name: "Spanish", moyenne: 0, count: 0, total: 0 }, { name: "Japanese", moyenne: 0, count: 0, total: 0 }];
      bigData.forEach((e) => {
        if (e.yearOfRelease != "N/A" && e.rottenTomatoesScore != "N/A") {     ///&& e.type ==="movie"
          var language = e.language;
          ///var year = parseInt(e.yearOfRelease.slice(-4));
          ///var rottenTomatoesScore = parseInt(e.rottenTomatoesScore);
          var french = 'French';
          var english = 'English';
          var spanish = 'Spanish';
          var japanese = 'Japanese';

          data = data.map((x) => {
            if (language== x.name) {
              x.count++;
              x.total = x.count;
            }
            return x;
          })
        }
      })
      data = data.map((x) => {
        if (x.count == 0) x.moyenne = 0;
        else x.count = (x.total);
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
          <h5> language proposé dans les films et séries</h5>
        </div>
        <div className="graph">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={this.data} margin={{ top: 30, right: 30, bottom: 30, left: 20 }}>
              <Line yAxisId="left" type='step-after' dataKey="count" stroke="#8884d8" activeDot={{ r: 8 }} type="stepAfter" />
              <Bar yAxisId="right" dataKey="count" barSize={20} fill="#32CD32" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis tick={{ fontSize: 12 }} size="1" dataKey="name" >
                <Label value="Langues" offset={-15} position="insideBottom" style={{ textAnchor: 'middle', fontSize: '80%', fill: 'rgba(0, 0, 0, 0.87)' }} />
              </XAxis>
              <YAxis yAxisId="left" tick={{ fontSize: 12 }}>
                <Label value="nombre de fois" offset={-15} position="left" angle="-90" style={{ textAnchor: 'middle', fontSize: '80%', fill: 'rgba(0, 0, 0, 0.87)' }} />
              </YAxis>
              <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12 }} >
                <Label value="nombre de films" offset={-15} position="right" angle="90" style={{ textAnchor: 'middle', fontSize: '80%', fill: 'rgba(0, 0, 0, 0.87)' }} />
              </YAxis>
              <Tooltip />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }

}

export default Widjet5;