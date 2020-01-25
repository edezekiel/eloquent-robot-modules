export function runRobot(state, robot, memory) {
  for (let turn = 0;; turn++) {
    if (state.parcels.length == 0) {
      // console.log(`Done in ${turn} turns`);
      return turn;
    }
    // robot function returns a "direction" and "memory"
    let action = robot(state, memory);

    // action.direction is the first element of the route array
    // use the direction as the destination for the move function.
    state = state.move(action.direction);
    // action.memory is the rest of the route array
    memory = action.memory;
    // console.log(`Moved to ${action.direction}`);
  }
}
