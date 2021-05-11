import React from 'react';
import style from './App.module.css';
import robots from './mockdata/robots.json';
import Robot from './components/Robot';
import ShoppingCar from './components/ShoppingCar';
import logo from './assets/images/logo.svg';
interface Props {}
interface State {
  robotGallery: any;
  count:number;
}
class App extends React.Component<Props,State> {
  constructor(props) {
    super(props);
    this.state = {
      robotGallery: [],
      count:0
    };
  }

  //在组件创建好dom元素后，挂载进页面的时候再调用
  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
    .then(response=> response.json()).then((data)=> this.setState({ robotGallery:data}))
  }

  // 生命周期第二阶段 ：更新
  // 组件更新后调用
  componentDidUpdate()
  {
  }
  // 组件销毁后调用
  componentWillUnmount()
  {
    
  }

  render() {
    return (
      <div className={style.app}>
        <div className={style.appHeader}>
          <img src={logo} className={style.appLogo} alt="logo"></img>
          <h1>机器人购物中心</h1>
        </div>
        <button onClick={()=>{
          this.setState({count:this.state.count+1},()=>{
            console.log('里面',this.state.count)
          })
          console.log('外面',this.state.count)
        }} >点击</button>
        <span>{this.state.count}</span>
        <ShoppingCar></ShoppingCar>
        <div className={style.robotList}>
          {this.state.robotGallery.map((r) => (
            <Robot key={r.id} id={r.id} name={r.name} email={r.email}></Robot>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
