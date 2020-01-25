// ************* Turn Roads into Graph ***************

export function buildGraph(edges) {

  let graph = Object.create(null);

  function addEdge(from, to) {
    // if graph doesn't have from as a property, add from as a
    // property. Set to as from's value.
    if (graph[from] == null) {
      graph[from] = [to];
    // else, add another "destination to the from property"
    } else {
      graph[from].push(to);
    }
  }

  let connectedPointsArray = edges.map(r => r.split("-"));

  // [from, to] is simply the destructed element currently being looped over
  for (let [from, to] of connectedPointsArray) {
    // have to addEdge twice, to ge a full list of connected points.
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}
