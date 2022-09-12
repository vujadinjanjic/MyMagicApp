import axios from "axios";

const API = '/api'
const SPELLS = `${API}/spells`
export class SpellService {
  public static async getSpells() {
    try {
      const spells = await axios.get(
        `${process.env.REACT_APP_API_URL}${SPELLS}`
      );
      return spells;
    } catch (error) {
      console.error(error);
    }
  }

  public static async getSpellByUrl(id: string) {
    try {
      const spell = await axios.get(
        `${process.env.REACT_APP_API_URL}${SPELLS}/${id}`
      );
      return spell;
    } catch (error) {
      console.error(error);
    }
  }
}
