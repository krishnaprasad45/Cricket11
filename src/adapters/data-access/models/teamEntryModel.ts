import mongoose from "mongoose";

const teamEntrySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
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
    createdAt: {
        type: Date,
        default: Date.now,
    },

});

const TeamEntry = mongoose.model("TeamEntry", teamEntrySchema);

export default TeamEntry;