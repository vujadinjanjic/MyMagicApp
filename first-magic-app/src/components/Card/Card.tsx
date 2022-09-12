import React from "react";
import magicImage from "../../images/magic.svg";
import styles from "./Card.module.scss";
import { useHistory } from "react-router";

interface ICardProps {
  name: string;
  id: string;
}

const Card = ({ name, id }: ICardProps) => {
  const navigateTo = useHistory();
  return (
    <div
      className={styles.card}
      key={id}
      onClick={() => navigateTo.push(`/card/${id.split("/")[3]}`)}
    >
      <img className={styles.magicImage} src={magicImage} />
      <div className={styles.bottom}>
        <span className={styles.cardName}>{name}</span>
      </div>
    </div>
  );
};

export default Card;
