import { SAVE_SPELL } from "./constants";

export const saveSpell = (spell: string) => ({
  type: SAVE_SPELL,
  payload: spell,
});
