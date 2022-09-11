import axios from "axios";

export class SpellService {
  public static async getSpells() {
    try {
      const spells = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/spells`
      );
      return spells;
    } catch (error) {
      console.error(error);
    }
  }

  public static async getSpellByUrl(url: string) {
    try {
      const spell = await axios.get(`${process.env.REACT_APP_API_URL}${url}`);
      return spell;
    } catch (error) {
      console.error(error);
    }
  }
}
