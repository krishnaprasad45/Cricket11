import express from "express";
import { addTeam } from "../../adapters/controllers/teamController/addTeam";
import { processResult } from "../../adapters/controllers/teamController/processResult";
import { teamResult } from "../../adapters/controllers/teamController/teamResult";

const userRoute = express.Router();
userRoute.post('/add-team', addTeam);
userRoute.get('/process-result', processResult);
userRoute.get('/team-result', teamResult);

export default userRoute;       