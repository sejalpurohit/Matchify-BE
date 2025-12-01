function computeCompatibility(selfGenres, userGenres) {
  const selfSet = new Set(selfGenres);
  const userSet = new Set(userGenres);

  if (selfSet.union(userSet).size === 0) return 0;
  return selfSet.intersection(userSet).size / selfSet.union(userSet).size;
}

module.exports = computeCompatibility;
