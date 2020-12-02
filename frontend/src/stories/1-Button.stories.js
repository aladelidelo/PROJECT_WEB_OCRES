import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Dashboard from "../components/Main/Dashboard/Dashboard";
import Admin from "../components/Main/Admin/Admin";
import Widjet4 from "../components/Main/Dashboard/Widjets/Widjet4/Widjet4";
import { ResponsiveContainer, Tooltip, RadialBar, RadialBarChart, Legend } from 'recharts';
 

export default {
  title: 'Test',
};

export const header = () => <Header/>;

export const widjet4 = () => <Widjet4/>;

export const dashboard = () => <Dashboard/>;

export const admin = () => <Admin/>;


const Template = (args) => <Button {...args} />;

// export const circularGraphGender = () => 
// <PieChart info={[{jour : `${date}`, sexe : "2", hosp : "40"},
//                         {jour : `${date}`, sexe : "2", hosp : "40"},
//                         {jour : `${date}`, sexe : "1", hosp : "40"}]}
//                 color={"#bff542"}
//                 type={"gender"}/>


