import mongoose from "mongoose";

const teamEntrySchema = new mongoose.Schema({
  userId: {
    type: Number,
    required: true,
  },
  teamName: {
    type: String,
    required: true,
  },
  players: {
    type: [String],
    required: true,
  },
  captain: {
    type: String,
    required: true,
  },
  viceCaptain: {
    type: String,
    required: true,
  },
  pointsList: {
    type: Map,
    of: Number,
    default: {},
  },
  totalPoints: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const TeamEntry = mongoose.model("TeamEntry", teamEntrySchema);

export default TeamEntry;
