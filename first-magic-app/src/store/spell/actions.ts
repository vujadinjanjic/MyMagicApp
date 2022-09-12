import { REMOVE_SPELL, SAVE_SPELL } from "./constants";

export const saveSpell = (spell: string) => ({
  type: SAVE_SPELL,
  payload: spell,
});

export const removeSpell = (name: string) => ({
  type: REMOVE_SPELL,
  payload: name,
});
