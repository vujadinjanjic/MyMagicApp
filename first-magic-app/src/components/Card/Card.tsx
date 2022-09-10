import React from "react";
import magicImage from "../../images/magic.svg";
import styles from "./Card.module.scss";
import { Button as AntDButton } from "antd";

interface ICardProps {
  name: string;
  id: string;
}

const Card = ({ name, id }: ICardProps) => {
  return (
    <div className={styles.card} key={id}>
      <img className={styles.magicImage} src={magicImage} />
      <div className={styles.bottom}>
        <span className={styles.cardName}>{name}</span>
        <div className={styles.buttonsContainer}>
          <AntDButton
            className={styles.button}
            onClick={() => console.log("ID", id)}
          >
            <span>VIEW MAGIC</span>
          </AntDButton>
        </div>
      </div>
    </div>
  );
};

export default Card;
