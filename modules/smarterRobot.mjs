import { findRoute } from './findRoute.mjs';
import { roadGraph } from './roads.mjs';

export function smarterRobot({place, parcels}, route) {
  if (route.length == 0) {

    let parcelRoutes = [];

    for (let p of parcels) {
      if (p.place != place) {
        parcelRoutes.push(findRoute(roadGraph, place, p.place));
      } else {
        parcelRoutes.push(findRoute(roadGraph, place, p.address));
      }
    }

    route = shortestParcelRoute(parcelRoutes);

    // Debugging logs.
    // console.log("place = ", place);
    // console.log("parcels = ", parcels);
    // console.log("possibleRoutes = ", parcelRoutes);
    // console.log("shortestRoute = ", route);
    // console.log("*********************************************");
  }
  return {direction: route[0], memory: route.slice(1)};
}

function shortestParcelRoute(parcelRoutes){
  let shortestRoute = parcelRoutes[0];

  if (parcelRoutes.length > 1) {
    for (let i = 0; i < parcelRoutes.length; i++) {
      if (parcelRoutes[i].length < shortestRoute.length) {
        shortestRoute = parcelRoutes[i];
      }
    }
  }

  return shortestRoute;
}
