import React from 'react';
import logo from './logo.svg';
import './App.css';
import FunctionComponent from './components/function-component/FunctionComponent';
import ArrowFunctionComponent from './components/function-component/ArrowFunctionComponent';
import ClassComponent from './components/class-component/ClassComponent';

import BindFieldValue from './components/form/BindFieldValue';

import CSSRules from './components/css-fundamentals/CSSRules';
import SassDemo from './components/css-fundamentals/SassComponent';

import AxiosReqComponent from './components/http-request/AxiosReqComponent';

import RouterNavigation from './components/router/RouterNavigation';
import Routes from './components/router/Routes';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <FunctionComponent name="Omar Hasan" age="28" title="Software Engineer"/>

      <ArrowFunctionComponent name="Galaxy"></ArrowFunctionComponent>

      <ClassComponent class_name="Class 1"></ClassComponent>

      <BindFieldValue></BindFieldValue>

      <CSSRules></CSSRules>

      <SassDemo></SassDemo>

      <AxiosReqComponent></AxiosReqComponent>

      <BrowserRouter>
        <RouterNavigation></RouterNavigation>
        <Routes></Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
