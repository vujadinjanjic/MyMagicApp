import React from "react";
import magicImage from "../../images/magic.svg";
import styles from "./Card.module.scss";
import { Button as AntDButton } from "antd";
import { useHistory } from "react-router-dom";

interface ICardProps {
  name: string;
  id: string;
}

const Card = ({ name, id }: ICardProps) => {
  const navigateTo = useHistory();
  console.log("MYD ID", id.substring(1));
  return (
    <div
      className={styles.card}
      key={id}
      onClick={() => console.log("ID: ", id)}
    >
      <img className={styles.magicImage} src={magicImage} />
      <div className={styles.bottom}>
        <span className={styles.cardName}>{name}</span>
        <div className={styles.buttonsContainer}>
          <AntDButton
            className={styles.button}
            onClick={() => navigateTo.push(`/card/${id.substring(1)}`)}
          >
            <span>VIEW MAGIC</span>
          </AntDButton>
        </div>
      </div>
    </div>
  );
};

export default Card;
