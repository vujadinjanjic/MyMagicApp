import React from "react";
import Loader from "react-loader-spinner";
import styles from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.cardsLoadingContainer}>
      <Loader color="green" type="ThreeDots" width={200} height={200} />;
    </div>
  );
};

export default Loading;
