import React from "react";
import styles from "./MyCollection.module.scss";
import removeIcon from "../../images/remove.svg";

interface IMyCollectionProps {
  close: () => void;
}

const MyCollection = ({ close }: IMyCollectionProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title}> My collection</span>
        <img src={removeIcon} className={styles.icon} onClick={() => close()} />
      </div>
    </div>
  );
};

export default MyCollection;
