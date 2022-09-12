import React, { useEffect, useState } from "react";
import CardsComponent from "../../components/CardsComponent/CardsComponent";
import { SpellService } from "../../services/spellService";
import { ISpellPartial } from "../../types/Spell";
import styles from "./Homepage.module.scss";
import { Button as AntDButton } from "antd";
import Loading from "../Loading/Loading";
import MyCollection from "../../components/MyCollection/MyCollection";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Homepage = () => {
  const [allSpells, setAllSpells] = useState<Array<ISpellPartial>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [load, setLoad] = useState<number>(8);

  const mySpells = useSelector<RootState, Array<string>>(
    (state) => state.spell.spells
  );

  useEffect(() => {
    SpellService.getSpells()
      .then((res) => {
        setAllSpells(res?.data.results.slice(0, load));
        setTotalCount(res?.data.count);
      })
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    setIsLoading(true);
    if (load > totalCount) return;
    SpellService.getSpells()
      .then((res) => {
        setAllSpells(res?.data.results.slice(0, load));
        setTotalCount(res?.data.count);
      })
      .finally(() => setIsLoading(false));
  }, [load]);

  if (isLoading)
    return (
      <div className={styles.loader}>
        <Loading />;
      </div>
    );
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title} onClick={() => setOpenDrawer(true)}>
          <span>Welcome to magic page</span>
        </div>
        <div>
          <CardsComponent spells={allSpells} mySpells={mySpells} />
        </div>
        <AntDButton
          className={styles.loadButton}
          onClick={() => setLoad((prev) => prev + 8)}
        >
          <span>LOAD MORE</span>
        </AntDButton>
        {openDrawer && (
          <div className={styles.drawer}>
            <MyCollection
              close={() => setOpenDrawer(false)}
              mySpells={mySpells}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Homepage;
