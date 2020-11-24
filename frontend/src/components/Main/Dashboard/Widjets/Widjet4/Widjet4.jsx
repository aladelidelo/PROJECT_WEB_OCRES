import React, { Component } from 'react';
import { LineChart, Line, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Label, Bar, ComposedChart, BarChart, PieChart, Pie, Cell, Colors } from 'recharts';
import './../Widjets.css';

class Widjet4 extends Component {
  constructor(props) {
    super(props);

    var parseData = (bigData) => {
      var data = [{ name: "movie", count: 0 }, { name: "series", count: 0}];
      bigData.forEach((e) => {
        if (e.type != "N/A") {
            var type = e.type;
            data = data.map((x) => {
                if (type === x.name){  ///name peut-être
                x.count++;
                ///x.total = x.total + boxOffice;
                }
                return x;
            })
        }
      })
      data = data.map((x) => {
        if (x.count == 0) x.count = 2;
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
          <h5> ratio film/série dans la BDD</h5>
        </div>
        <div className="graph">

            <PieChart width={670} height={250}>
                <Pie data={this.data} dataKey="count" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={100} fill="#8884d8" label >

                {
                    this.data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={["#32CD32"],["#8884d8"]}/>
                    )
                    )
                }

                </Pie>


            </PieChart>

        </div>
      </div>
    );
  }
}

export default Widjet4;