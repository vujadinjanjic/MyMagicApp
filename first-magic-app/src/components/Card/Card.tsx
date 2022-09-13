import React from "react";
import magicImage from "../../images/trick.png";
import styles from "./Card.module.scss";
import { useHistory } from "react-router";
import redHeart from "../../images/red-heart.svg";
import emptyHeart from "../../images/empty-heart.svg";

interface ICardProps {
  name: string;
  id: string;
  added?: boolean;
}

const Card = ({ name, id, added }: ICardProps) => {
  const navigateTo = useHistory();
  return (
    <div
      className={styles.card}
      key={id}
      onClick={() => navigateTo.push(`/card/${id?.split("/")[3]}`)}
    >
      <img className={styles.magicImage} src={magicImage} />
      <div className={styles.bottom}>
        <span className={styles.cardName} aria-label="name">
          {name}
        </span>
        {added ? (
          <img src={redHeart} className={styles.icon} aria-label="fullFilled" />
        ) : (
          <img src={emptyHeart} className={styles.icon} aria-label="empty" />
        )}
      </div>
    </div>
  );
};

export default Card;
