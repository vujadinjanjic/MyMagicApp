import React from "react";
import styles from "./MyCollection.module.scss";
import removeIcon from "../../images/remove.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface IMyCollectionProps {
  close: () => void;
}

const MyCollection = ({ close }: IMyCollectionProps) => {
  const mySpells = useSelector<RootState, Array<string>>(
    (state) => state.spell.spells
  );
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title}> My collection</span>
        <img src={removeIcon} className={styles.icon} onClick={() => close()} />
      </div>
      <div className={styles.spellContainer}>
        {mySpells.map((spell, index) => (
          <div key={index} className={styles.spell}>
            <span>{index}. </span>
            <span className={styles.spellName}>{spell}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCollection;
