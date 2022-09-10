import axios from "axios";

export class SpellService {
  public static async getSpells() {
    try {
      const spells = await axios.get(`https://www.dnd5eapi.co/api/spells`);
      return spells;
    } catch (error) {
      console.error(error);
    }
  }

  public static async getSpellByUrl(url: string) {
    try {
      const spell = await axios.get(`https://www.dnd5eapi.co/${url}`);
      return spell;
    } catch (error) {
      console.error(error);
    }
  }
}
