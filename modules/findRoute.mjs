// "from" is robot's current location.
// "to" is the parcel.place or parcel.address

export function findRoute(graph, from, to) {
  let work = [{at: from, route: []}];
  for (let i = 0; i < work.length; i++) {
    let {at, route} = work[i];
    for (let place of graph[at]) {
      // first 'thread' of the web reaches destination, so
      // thread is traced back to the start, giving us our route
      if (place == to) return route.concat(place);
      if (!work.some(w => w.at == place)) {
        // otherwise add another entry to the work array
        work.push({at: place, route: route.concat(place)});
      }
    }
  }
}
