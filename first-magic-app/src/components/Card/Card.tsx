import React from "react";
import magicImage from "../../images/magic.svg";
import styles from "./Card.module.scss";
import { Button as AntDButton } from "antd";

const Card = () => {
  return (
    <div className={styles.card}>
      <img className={styles.magicImage} src={magicImage} />
      <div className={styles.bottom}>
        <span>MAGIJA 1</span>
        <div className={styles.buttonsContainer}>
          <AntDButton className={styles.button}>
            <span>ADD TO COLLECTION</span>
          </AntDButton>
          <AntDButton className={styles.button}>
            <span>VIEW MAGIC</span>
          </AntDButton>
        </div>
      </div>
    </div>
  );
};

export default Card;
