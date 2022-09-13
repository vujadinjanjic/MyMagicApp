import React from "react";
import magicImage from "../../images/trick.png";
import styles from "./Card.module.scss";
import { useHistory } from "react-router";
import redHeart from "../../images/red-heart.svg";
import emptyHeart from "../../images/empty-heart.svg";
import { useDispatch } from "react-redux";
import { removeSpell, saveSpell } from "../../store/spell/actions";

interface ICardProps {
  name: string;
  id: string;
  added?: boolean;
}

const Card = ({ name, id, added }: ICardProps) => {
  const navigateTo = useHistory();
  const dispatch = useDispatch();
  return (
    <div className={styles.card} key={id}>
      <img
        className={styles.magicImage}
        src={magicImage}
        onClick={() => navigateTo.push(`/card/${id?.split("/")[3]}`)}
      />
      <div className={styles.bottom}>
        <span className={styles.cardName} aria-label="name">
          {name}
        </span>
        {added ? (
          <img
            src={redHeart}
            onClick={() => dispatch(removeSpell(name))}
            className={styles.icon}
            aria-label="fullFilled"
          />
        ) : (
          <img
            onClick={() => dispatch(saveSpell(name))}
            src={emptyHeart}
            className={styles.icon}
            aria-label="empty"
          />
        )}
      </div>
    </div>
  );
};

export default Card;
