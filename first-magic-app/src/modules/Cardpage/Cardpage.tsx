import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { SpellService } from "../../services/spellService";
import { ISpell } from "../../types/Spell";
import styles from "./Cardpage.module.scss";
import { Button as AntDButton } from "antd";
import { useDispatch } from "react-redux";
import { saveSpell } from "../../store/spell/actions";

const Cardpage = () => {
  const params = useParams<{ id: string }>();
  const [spell, setSpell] = useState<ISpell>();
  const dispatch = useDispatch();
  useEffect(() => {
    SpellService.getSpellByUrl(params.id).then((res) => {
      setSpell(res?.data);
    });
  }, []);

  return (
    <div className={styles.container}>
      <span className={styles.title}>{spell?.name}</span>
      <div className={styles.about}>
        <span className={styles.prop}>
          Material: {spell?.material || "No materal"}
        </span>
        <span className={styles.prop}>
          Duration: {spell?.duration || "No duration"}
        </span>
        <span className={styles.prop}>Level: {spell?.level || "No level"}</span>
        <span className={styles.prop}>
          Higher level: {spell?.higher_level || "No higher level"}
        </span>
        <span className={styles.prop}>Range: {spell?.range || "No range"}</span>
        <span className={styles.prop}>
          Casting time: {spell?.casting_time || "No casting time"}
        </span>
      </div>
      <div className={styles.descriptionField}>
        <span className={styles.descriptionTitle}>Description:</span>
        <div className={styles.description}>{spell?.desc}</div>
      </div>
      <div className={styles.buttonContainer}>
        <AntDButton
          className={styles.loadButton}
          onClick={() => spell?.name && dispatch(saveSpell(spell?.name))}
        >
          <span>ADD TO MY COLLECTION</span>
        </AntDButton>
      </div>
    </div>
  );
};

export default Cardpage;
