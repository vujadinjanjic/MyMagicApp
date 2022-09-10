import React from "react";
import Card from "../../components/Card/Card";
import styles from "./Homepage.module.scss";

const Homepage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span>Welcome to magic page</span>
        <Card />
      </div>
    </div>
  );
};

export default Homepage;
