import { VillageState } from './VillageState.mjs';
import { runRobot } from './runRobot.mjs';

export function compareRobots(robot1, memory1, robot2, memory2) {
  let averageSteps = [0, 0];

  for (let i = 0; i < 100; i++) {
    let randomVillage = VillageState.random();
    averageSteps[0] += runRobot(randomVillage, robot1, memory1);
    averageSteps[1] += runRobot(randomVillage, robot2, memory2);
  }

  averageSteps[0] = averageSteps[0]/100;
  averageSteps[1] = averageSteps[1]/100;

  console.log(averageSteps);
}
