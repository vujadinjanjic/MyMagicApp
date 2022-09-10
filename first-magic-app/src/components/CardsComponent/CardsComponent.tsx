import React from "react";
import { ISpellResponse } from "../../types/Spell";
import Card from "../Card/Card";
import styles from "./CardComponent.module.scss";

interface ICardsComponentProps {
  spells: Array<ISpellResponse>;
}

const CardsComponent = ({ spells }: ICardsComponentProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.rowContainer}>
        {spells?.map((spell, index) => (
          <div
            className={styles.communityCard}
            key={index}
            aria-label="community-card"
            role="listitem"
          >
            <Card name={spell.name} id={spell.url} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default CardsComponent;
