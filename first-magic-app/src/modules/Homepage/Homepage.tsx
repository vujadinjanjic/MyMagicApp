import React, { useEffect, useState } from "react";
import CardsComponent from "../../components/CardsComponent/CardsComponent";
import { SpellService } from "../../services/spellService";
import { ISpellResponse } from "../../types/Spell";
import styles from "./Homepage.module.scss";
import { Button as AntDButton } from "antd";

const Homepage = () => {
  const [allSpells, setAllSpells] = useState<Array<ISpellResponse>>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [load, setLoad] = useState<number>(8);

  useEffect(() => {
    SpellService.getSpells().then((res) => {
      setAllSpells(res?.data.results.slice(0, load));
      setTotalCount(res?.data.count);
    });
  });

  useEffect(() => {
    if (load > totalCount) return;
    SpellService.getSpells().then((res) => {
      setAllSpells(res?.data.results.slice(0, load));
      setTotalCount(res?.data.count);
    });
  }, [load]);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span>Welcome to magic page</span>
      </div>
      <div>
        <CardsComponent spells={allSpells} />
      </div>
      <AntDButton
        className={styles.loadButton}
        onClick={() => setLoad(load + 8)}
      >
        <span>LOAD MORE</span>
      </AntDButton>
    </div>
  );
};

export default Homepage;
