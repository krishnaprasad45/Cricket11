import TeamEntry from "../adapters/data-access/models/teamEntryModel";

export async function generateUniqueUserId() {
    let userId;
    let exists = true;

    while (exists) {
        userId = generateRandomUserId();
        // Check if userId exists in the database
        const userExists = await TeamEntry.exists({ userId: userId });
        exists = userExists !== null; // Update exists based on the result
    }

    return userId;
}

function generateRandomUserId() {
    const min = 1000000000;
    const max = 9999999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

