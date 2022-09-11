import React, { useEffect } from "react";
import styles from "./Cardpage.module.scss";

const Cardpage = () => {
  useEffect(() => {
    console.log("CARD PAGE");
  }, []);

  return <div className={styles.container}>tu je</div>;
};

export default Cardpage;
