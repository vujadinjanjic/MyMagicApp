import { REMOVE_SPELL, SAVE_SPELL } from "./constants";
import { SpellState } from "./types";
import { AnyAction } from "redux";

const initialState: SpellState = {
  spells: [],
};

const spellReducer = (state = initialState, action: AnyAction) => {
  const { type, payload } = action;
  switch (type) {
    case SAVE_SPELL: {
      if (state.spells.includes(payload))
        return {
          spells: [...state.spells],
        };

      return {
        spells: [...state.spells, payload],
      };
    }
    case REMOVE_SPELL: {
      return {
        spells: state.spells.filter((name) => name !== payload),
      };
    }
    default:
      return state;
  }
};

export default spellReducer;
