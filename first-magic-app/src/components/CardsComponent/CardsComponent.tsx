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
        {spells?.map(({ name, url }) => (
          <div
            className={styles.communityCard}
            key={url}
            aria-label="community-card"
            role="listitem"
          >
            <Card
              name={name}
              id={url}
              added={mySpells?.includes(name)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default CardsComponent;
