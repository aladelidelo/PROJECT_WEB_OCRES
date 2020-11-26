import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Dashboard from "../components/Main/Dashboard/Dashboard";
import Admin from "../components/Main/Admin/Admin";


export default {
  title: 'Test',
};

export const header = () => <Header/>;

export const main = () => <Main/>;

export const dashboard = () => <Dashboard/>;

export const admin = () => <Admin/>;

