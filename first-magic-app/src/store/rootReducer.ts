import { combineReducers } from "redux";
import spellReducer from "./spell/reducer";

export default combineReducers({
  spell: spellReducer,
});
