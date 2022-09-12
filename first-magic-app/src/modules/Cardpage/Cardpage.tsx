import React, { useEffect } from "react";
import { useParams } from "react-router";
import { SpellService } from "../../services/spellService";
import styles from "./Cardpage.module.scss";

const Cardpage = () => {
  const params = useParams<{ id: string }>();
  useEffect(() => {
    console.log("params:", params);
    SpellService.getSpellByUrl(params.id).then((res) =>
      console.log("res:", res)
    );
  }, []);

  return <div className={styles.container}>tu je</div>;
};

export default Cardpage;
