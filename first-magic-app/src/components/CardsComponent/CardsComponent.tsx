import React from "react";
import { ISpellPartial } from "../../types/Spell";
import Card from "../Card/Card";
import styles from "./CardComponent.module.scss";

interface ICardsComponentProps {
  spells: Array<ISpellPartial>;
  mySpells?: Array<string>;
}

const CardsComponent = ({ spells, mySpells }: ICardsComponentProps) => {
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
            <Card
              name={spell.name}
              id={spell.url}
              added={mySpells?.includes(spell.name)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default CardsComponent;
