import { teamEntryData } from "../../../business/Interfaces/teamEntryData";
import TeamEntry from "../models/teamEntryModel";

export async function saveTeamEntry(data: teamEntryData) {
    try {
      console.log("saving data",data)
      const team = new TeamEntry({ ...data });
      const result = await team.save();
      console.log("saved data",result)
      return result;
    } catch (error) {
      console.error("Error saving user:", error);
      throw error;
    }
  }