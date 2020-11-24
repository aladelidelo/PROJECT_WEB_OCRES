import React, { Component } from 'react';
import { ResponsiveContainer, Tooltip, PieChart, Pie, Cell } from 'recharts';
import './../Widjets.css';

class Widjet4 extends Component {
  constructor(props) {
    super(props);

    var parseData = (bigData) => {
      var data = [{ name: "movie", count: 0 }, { name: "series", count: 0 }];
      bigData.forEach((e) => {
        if (e.type !== "N/A") {
          var type = e.type;
          data = data.map((x) => {
            if (type === x.name) {  ///name peut-être
              x.count++;
              ///x.total = x.total + boxOffice;
            }
            return x;
          })
        }
      })
      data = data.map((x) => {
        if (x.count === 0) x.count = 2;
        else {
          x.count = (x.count);
        }
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
          <h5> Ratio film/série dans la BDD</h5>
        </div>

        <div className="graph">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={670} height={250}>
              <Pie data={this.data} dataKey="count" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={100} fill="#8884d8" label >
                <Cell key={"cell2"} fill={["#32CD32"]} />
                <Cell key={"cell1"} fill={["#8884d8"]} />
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

      </div>
    );
  }
}

export default Widjet4;