import React from 'react';
import style from './App.module.css';
import robots from './mockdata/robots.json';
import Robot from './components/Robot';
import ShoppingCar from './components/ShoppingCar'
import logo from "./assets/images/logo.svg";
function App() {
  return (
    <div className={style.app}>
      <div className={style.appHeader}>
        <img src={logo} className={style.appLogo} alt="logo"></img>
        <h1>机器人购物中心</h1>
      </div>
      <ShoppingCar></ShoppingCar>
      <div className={style.robotList}>
        {robots.map((r) => (
          <Robot key={r.id} id={r.id} name={r.name} email={r.email}></Robot>
        ))}
      </div>
    </div>
  );
}

export default App;
