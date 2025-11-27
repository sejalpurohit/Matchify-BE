function computeCompatibility(selfGenres, userGenres) {
  const selfSet = new Set(selfGenres);
  const userSet = new Set(userGenres);

  return selfSet.intersection(userSet).size / selfSet.union(userSet).size;
}

module.exports = computeCompatibility;
