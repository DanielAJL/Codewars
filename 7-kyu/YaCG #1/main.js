/* eslint-disable no-console */
const winnerOfTrick = (cards, players) => {
  const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
  const ranksInHand = [];
  const ranksOriginalIndices = [];
  cards.forEach((card) => {
    ranksInHand.push(card[0]);
    ranksOriginalIndices.push(card);
  });

  ranksInHand.sort((a, b) => ranks.indexOf(b) - ranks.indexOf(a));
  const winningRanks = ranksInHand.filter((rank) => rank === ranksInHand[0]);
  const winningPlayers = [];
  for (let i = 0; i < ranksOriginalIndices.length; i += 1) {
    if (ranksOriginalIndices[i][0] === winningRanks[0]) {
      winningPlayers.push(players[i]);
    }
  }

  if (winningPlayers.length > 1) return `Tie! (${winningPlayers.join(',')})`;
  return `${winningPlayers[0]} wins`;
};

// test cases
console.log(winnerOfTrick(['2D', '4D', '3S'], ['GgbA', 'mZoIs', "S'Lg"]));
console.log(winnerOfTrick(['KH', '2S', 'KD'], ['gQba', 'gZogZo', 'mXin']));
