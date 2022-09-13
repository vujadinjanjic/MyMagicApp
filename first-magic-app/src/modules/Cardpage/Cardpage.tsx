import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { SpellService } from "../../services/spellService";
import { ISpell } from "../../types/Spell";
import styles from "./Cardpage.module.scss";
import { Button as AntDButton } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { saveSpell } from "../../store/spell/actions";
import back from "../../images/back.svg";
import { RootState } from "../../store/store";

const ADD_MAGIC = "COLLECT THIS MAGIC";
const MAGIC_IS_ADDED = "COLLECTED";

const Cardpage = () => {
  const params = useParams<{ id: string }>();
  const [spell, setSpell] = useState<ISpell>();
  const history = useHistory();
  const dispatch = useDispatch();
  const mySpells = useSelector<RootState, Array<string>>(
    (state) => state.spell.spells
  );

  useEffect(() => {
    SpellService.getSpellByUrl(params.id).then((res) => {
      setSpell(res?.data);
    });
  }, [params?.id]);

  return (
    <div className={styles.wrapper} aria-label="card">
      <div className={styles.container}>
        <img src={back} className={styles.backIcon} onClick={history?.goBack} />
        <span className={styles.title}>{spell?.name}</span>
        <div className={styles.about}>
          <span className={styles.prop}>
            Material: {spell?.material || "No materal"}
          </span>
          <span className={styles.prop}>
            Duration: {spell?.duration || "No duration"}
          </span>
          <span className={styles.prop}>
            Level: {spell?.level || "No level"}
          </span>
          <span className={styles.prop}>
            Higher level: {spell?.higher_level || "No higher level"}
          </span>
          <span className={styles.prop}>
            Range: {spell?.range || "No range"}
          </span>
          <span className={styles.prop}>
            Casting time: {spell?.casting_time || "No casting time"}
          </span>
        </div>
        <div className={styles.descriptionField}>
          <div className={styles.description}>{spell?.desc}</div>
        </div>
        <div className={styles.buttonContainer}>
          <AntDButton
            className={
              spell && !mySpells.includes(spell.name)
                ? styles.loadButton
                : styles.loadButtonDisabled
            }
            disabled={spell && mySpells.includes(spell.name)}
            onClick={() => {
              spell?.name && dispatch(saveSpell(spell?.name));
            }}
          >
            <span>
              {spell && !mySpells.includes(spell.name)
                ? ADD_MAGIC
                : MAGIC_IS_ADDED}
            </span>
          </AntDButton>
        </div>
      </div>
    </div>
  );
};

export default Cardpage;
