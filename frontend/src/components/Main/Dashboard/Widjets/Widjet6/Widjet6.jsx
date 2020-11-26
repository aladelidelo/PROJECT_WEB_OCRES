import React, { Component } from 'react';
import { ResponsiveContainer, Tooltip, RadialBar, RadialBarChart, Legend } from 'recharts';
import './../Widjets.css';
import './Widjet6.css';

class Widjet6 extends Component {
  constructor(props) {
    super(props);

    var parseData = (bigData) => {
      var data = [{ name: "action", count: 0 , fill: "#8884d8"}, { name: "aventure", count: 0, fill: "#83a6ed" } , { name: "horreur", count: 0, fill: "#8dd1e1" }, { name: "drame", count: 0, fill: "#82ca9d" }, { name: "sci-fi", count: 0, fill: "#a4de6c" }];
      bigData.forEach((e) => {
        if (e.genre !== "N/A") {
          var genre = e.genre;
          data = data.map((x) => {
            if (genre === x.name) {  ///name peut-être
              x.count++;
              
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
          <h5>Ratio du genre des films</h5>
        </div>

        <div className="graph2">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart 
			  width={730} 
			  height={250} 
			  innerRadius="10%" 
			  outerRadius="100%" 
			  data={this.data} 
			  startAngle={180} 
			  endAngle={0}
			>
			  <RadialBar minAngle={15} label={{ fill: 'white', position: 'Start' }} background clockWise={true} dataKey='count' />
			  <Legend iconSize={10} width={135} height={150} layout='vertical' verticalAlign='left' align="left"/>
			  <Tooltip />
			</RadialBarChart>
          </ResponsiveContainer>
        </div>

      </div>
    );
  }
}

export default Widjet6;