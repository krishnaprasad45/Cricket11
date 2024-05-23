import TeamEntry from "../adapters/data-access/models/teamEntryModel";

const getRankedTeams = async () => {
    try {
        const rankedTeams = await TeamEntry.aggregate([
            { $sort: { totalPoints: -1 } },
            {
                $addFields: {
                    rank: {
                        $indexOfArray: [["$totalPoints"], "$totalPoints"],
                    },
                },
            },
            {
                $addFields: {
                    rank: { $add: ["$rank", 1] },
                },
            },
            { $project: { userId: 0 } },
        ]);

        return rankedTeams;
    } catch (error) {
        console.error("Error while getting ranked teams:", error);
        throw error;
    }
};

export default getRankedTeams;
