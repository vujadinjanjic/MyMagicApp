import React from "react";
import styles from "./MyCollection.module.scss";
import removeIcon from "../../images/remove.svg";
import bin from "../../images/Bin.svg";
import { useDispatch } from "react-redux";
import { removeSpell } from "../../store/spell/actions";

interface IMyCollectionProps {
  close: () => void;
  mySpells?: Array<string>;
}

const MyCollection = ({ close, mySpells }: IMyCollectionProps) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title}> My collection</span>
        <img
          src={removeIcon}
          className={styles.icon}
          aria-label="close"
          onClick={() => close()}
        />
      </div>
      <div className={styles.spellContainer}>
        {mySpells?.map((spell, index) => (
          <div key={index} className={styles.spell}>
            <span>{index}. </span>
            <span className={styles.spellName} aria-label="name">
              {spell}
            </span>
            <img
              src={bin}
              className={styles.bin}
              onClick={() => dispatch(removeSpell(spell))}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCollection;
