function computeCompatibility(selfGenres, userGenres) {
  const selfSet = new Set(selfGenres);
  const userSet = new Set(userGenres);

  return selfSet.intersection(userSet).length / selfSet.union(userSet).length;
}

export default computeCompatibility;
