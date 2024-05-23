import { teamEntryData } from "../../../business/Interfaces/teamEntryData";
import { UpdatePointsParams } from "../../../business/Interfaces/updatePointsParans";
import TeamEntry from "../models/teamEntryModel";


export async function saveTeamEntry(data: teamEntryData) {
  try {
    const team = new TeamEntry({ ...data });
    const result = await team.save();
    return result;
  } catch (error) {
    console.error("Error saving user:", error);
    throw error;
  }
}

export async function updatePoints({ pointsList, totalPoints, userId: userIdStr }: UpdatePointsParams) {
  try {

    const userId = Number(userIdStr);

    if (!userId) {
      return false;
    }

    const result = await TeamEntry.updateOne(
      { userId: userId },
      {
        $set: {
          pointsList: pointsList,
          totalPoints: totalPoints
        }
      }
    );

  
    return result;
  } catch (error) {
    console.error("Error in updating points:", error);
    return false;
  }
}


export async function findUserById(userId: Number) {
  try {
    const userData = await TeamEntry.findOne({ userId });
    return userData;
  } catch (error) {
    console.error("Error finding user", error);
    throw error;
  }
}