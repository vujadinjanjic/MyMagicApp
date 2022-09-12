import React from "react";
import styles from "./MyCollection.module.scss";
import removeIcon from "../../images/remove.svg";

interface IMyCollectionProps {
  close: () => void;
  mySpells?: Array<string>;
}

const MyCollection = ({ close, mySpells }: IMyCollectionProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title}> My collection</span>
        <img src={removeIcon} className={styles.icon} onClick={() => close()} />
      </div>
      <div className={styles.spellContainer}>
        {mySpells?.map((spell, index) => (
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
