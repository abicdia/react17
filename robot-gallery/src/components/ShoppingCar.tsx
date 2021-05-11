import React from 'react';
import styles from './ShoppingCar.module.css';
import {FiShoppingCart} from 'react-icons/fi'
interface Props {}
interface State {
  isOpen: boolean;
}

class ShoppingCar extends React.Component<Props, State> {
  constructor(prop: Props) {
    super(prop);
    this.state = {
      isOpen: false,
    };
    // this.handleClick=this.handleClick.bind(this)  //使用bind
  }

  // handleClick(e) {
  //   this.setState({ isOpen: !this.state.isOpen });
  // };
  // 使用箭头函数
  handleClick = (e) => {
    console.log('target',e.target,'currentTarget', e.currentTarget);
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <div className={styles.cartContainer}>
        <button className={styles.button} onClick={this.handleClick}>
         <span><FiShoppingCart></FiShoppingCart></span> 购物车 2 (件)
        </button>
        <div
          className={styles.cartDropDown}
          style={{
            display: this.state.isOpen ? 'block' : 'none',
          }}
        >
          <ul>
            <li>robot 1</li>
            <li>robot 2</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ShoppingCar;
