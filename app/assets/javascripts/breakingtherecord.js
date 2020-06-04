function getRecord(games) {
  let most = games[0];
  let least = games[0];

  let dMost = 0;
  let dLeast = 0;

  for (const score of games) {
    if (most < score) {
      most = score;
      dMost++;
    } else if (score < least) {
      least = score;
      dLeast++;
    }
  }

  return [dMost, dLeast];
}
