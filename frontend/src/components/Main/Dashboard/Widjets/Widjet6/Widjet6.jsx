import React, { Component } from 'react';
import { ResponsiveContainer, Tooltip, RadialBar, RadialBarChart, Legend } from 'recharts';
import './../Widjets.css';
import './Widjet6.css';

class Widjet6 extends Component {
  constructor(props) {
    super(props);
    var parseData = (bigData) => {
      var data = [{ name: "Action", count: 0 , fill: "#8884d8"}, { name: "Adventure", count: 0, fill: "#83a6ed" } , { name: "Horror", count: 0, fill: "#8dd1e1" }, { name: "Drama", count: 0, fill: "#82ca9d" }, { name: "Sci-Fi", count: 0, fill: "#a4de6c" }];
      bigData.forEach((e) => {
        console.log("e: ",e);
        if (e.genre && e.genre !== "N/A") {
          var genre = e.genre.replaceAll(',', '').split(' ');
          console.log(genre);
          data = data.map((x) => {
            genre.forEach((genreStr)=> {
              if (genreStr === x.name) {
                x.count++;
                return;
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