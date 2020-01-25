import { roadGraph } from './roads.mjs';

export class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  move(destination) {

    if (!roadGraph[this.place].includes(destination)) {
      // if the desintation isn't connected to the current
      // place, then return. (impossible move)
      return this;

    // else, deliver parcels and move robot
    } else {
      let parcels = this.parcels.map(p => {
        // don't update (deliver) parcel if it has a different destination
        // than the robot's current place.
        if (p.place != this.place) return p;
        // else, update (deliver) the parcel to its destination address
        return {place: destination, address: p.address};
        // filter out delivered parcels
      }).filter(p => p.place != p.address);

      // create new VillageState instance, "moving" the robot
      // to the next location and the updated parcels array.
      return new VillageState(destination, parcels);
    }
  }
}

function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

// populate VillageState with Post Office and 5 random parcels.
VillageState.random = function(parcelCount = 5) {
  let parcels = [];
  for (let i = 0; i < parcelCount; i++) {
    let address = randomPick(Object.keys(roadGraph));
    let place;
    // fancy way of making sure a parcel doesn't have
    // the same place and destination
    do {
      place = randomPick(Object.keys(roadGraph));
    } while (place == address);
    parcels.push({place, address});
  }
  return new VillageState("Post Office", parcels);
};
