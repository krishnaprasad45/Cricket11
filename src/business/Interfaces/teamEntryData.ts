import { Types } from "mongoose";

export interface teamEntryData {
    userId?: Types.ObjectId;
    teamName: string;
    players: string[];
    captain: string;
    viceCaptain: string;
    createdAt?: Date;

}
