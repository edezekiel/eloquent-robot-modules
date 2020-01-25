import { compareRobots } from './modules/compareRobots.mjs';
import { smarterRobot } from './modules/smarterRobot.mjs';
import { goalOrientedRobot } from './modules/goalOrientedRobot.mjs';
import { runRobot } from './modules/runRobot.mjs';
import { VillageState } from './modules/VillageState.mjs';

compareRobots(smarterRobot, [], goalOrientedRobot, []);
console.log(runRobot(VillageState.random(), smarterRobot, []));
