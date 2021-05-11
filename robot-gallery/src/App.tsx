import Reactm, { useState, useEffect } from 'react';
import style from './App.module.css';
import robots from './mockdata/robots.json';
import Robot from './components/Robot';
import ShoppingCar from './components/ShoppingCar';
import logo from './assets/images/logo.svg';

const App: React.FC = (props) => {
  const [count, setCount] = useState(0);
  const [robotGallery, setrobotGallery] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, seterror] = useState<any>(false);
  useEffect(() => {
    document.title = `点击${count}次数`;
  }, [count]);

  useEffect(() => {
    const fechData = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setrobotGallery(data);
      } catch (e) {
        seterror(e.message);
      }
    };
    fechData();
    setLoading(false);
  }, []);

  return (
    <div className={style.app}>
      <div className={style.appHeader}>
        <img src={logo} className={style.appLogo} alt="logo"></img>
        <h1>机器人购物中心</h1>
      </div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        点击
      </button>
      <span>{count}</span>
      {(!error || error!=="" ) && <p>网站出错：{error}</p>}

      <ShoppingCar></ShoppingCar>
      {!loading ? (
        <div className={style.robotList}>
          {robotGallery.map((r) => (
            <Robot key={r.id} id={r.id} name={r.name} email={r.email}></Robot>
          ))}
        </div>
      ) : (
        <h2>loading</h2>
      )}
    </div>
  );
};

export default App;
