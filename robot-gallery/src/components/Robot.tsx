import React from 'react';
import styles from "./Robot.module.css"
interface Robotprops {
  id: Number;
  name: string;
  email: string;
}
// const Robot: React.FC<Robotprops> = (props) => {
const Robot: React.FC<Robotprops> = ({ id, name, email }) => {
  return (
    <div className={styles.cardContainer}>
      <img alt="robot" src={`https://robohash.org/${id}`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};
export default Robot;
