import React, { Component } from 'react';
import { ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Label, Bar, ComposedChart } from 'recharts';
import './../Widjets.css';

class Widjet5 extends Component {
  constructor(props) {
    super(props);
    var parseData = (bigData) => {
      var data = [{ name: "English",  count: 0 }, { name: "French",  count: 0 }, { name: "Spanish", count: 0 }, { name: "Japanese", count: 0 }];
      bigData.forEach((e) => {
        if (e.language !== "N/A") {     ///&& e.type ==="movie"

          var language = e.language;
          language = e.language.replaceAll(',', '').split(' ');
          data = data.map((x) => {
              language.forEach((languageStr)=> {
              if (languageStr === x.name) {
                x.count++;
               }
              });
            return x;
          })
        }
      })
      return (data);
    }

    this.data = parseData(props.data);
  }
  render() {
    return (
      <div className="widjet-container">
        <div className="title">
          <h5> Langage proposé dans les films et séries</h5>
        </div>
        <div className="graph">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={this.data} margin={{ top: 30, right: 30, bottom: 30, left: 20 }}>
              <Bar yAxisId="left" dataKey="count" barSize={20} fill="#32CD32" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis tick={{ fontSize: 12 }} size="1" dataKey="name" >
                <Label value="Langues" offset={-15} position="insideBottom" style={{ textAnchor: 'middle', fontSize: '80%', fill: 'rgba(0, 0, 0, 0.87)' }} />
              </XAxis>
              <YAxis yAxisId="left" tick={{ fontSize: 12 }}>
                <Label value="nombre de fois" offset={-15} position="left" angle={-90} style={{ textAnchor: 'middle', fontSize: '80%', fill: 'rgba(0, 0, 0, 0.87)' }} />
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