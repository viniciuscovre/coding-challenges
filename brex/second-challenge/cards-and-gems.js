/*
Splendor is a card-based board game where players buy cards in exchange for colored gems. In this game, today, we care about two things, gems and cards.

Players can have any number of gems of five different colors: (B)lue, (W)hite, (G)reen, (R)ed, and (Y)ellow.

Players can exchange gems for cards. A card appears as such:

+----------+
|        G |
|          |
|          |
| 3W       |
| 2G       |
| 1R       |
+----------+

This indicates that the card costs 3 (W)hite gems, 2 (G)reen gems, and 1 (R)ed. The “G” in the upper right indicates the color of the card (this will be useful later). Cards colors are als (B)lue, (W)hite, (G)reen, (R)ed, and (Y)ellow.

For this entire problem, we want to keep things simple by assuming that there is only one player.

The data model and structure of the program is up to you.

Questions
1. We want to write a function canPurchase() such that, given a particular card and collection of gems for a player, we return true if the player can afford the card, and false if they cannot.

2. We want to write a function purchase() such that, given a particular card and collection of gems for a player, we add the card to the player's hand and subtract the cost from the player's gems, if they are able to afford the card. The function should return true if the player can afford the card, and false if they cannot.

3. We want to introduce a new concept: for each card in a player's hand of a given color, we want to reduce the cost of any new purchase by 1 gem for that held card's color. For example, if the player holds 2 (G)reen cards and 1 (R)ed, and we are considering a card that lists its cost as 4 (G)reen, 2 (R)ed, and 1 (B)lue, then the player should be able to purchase it for 2 G, 1 R, and 1 B.

4. discussion
*/

class Player {
  constructor(gems, cards) {
    this.gems = gems
    this.cards = cards
  }
}

const card = {
  W: 3,
  G: 2,
  R: 2
}

const gems = ['W', 'R', 'W', 'Y', 'Y', 'Y', 'R', 'B', 'W', 'G', 'G', 'G', 'W']
const cards = ['W', 'Y', 'R', 'G', 'B']
const player = new Player(gems, cards)

/**
 * 1. We want to write a function canPurchase() such that, given a particular card and collection of gems for a player.
 * We return true if the player can afford the card, and false if they cannot.
 */
const canPurchase = (card, player) => {
  const cardColors = Object.keys(card)
  const count = cardColors.reduce((acc, curr) => {
    acc[curr] = 0
    return acc
  }, {})

  const userGemsAndCardColors = [...(player.gems || []), ...(player.cards || [])]
  for (color of userGemsAndCardColors) {
    if (cardColors.includes(color)) count[color]++
  }

  for (color of cardColors) {
    if (count[color] < card[color]) return false
  }

  return true
}

// console.log(canPurchase(card, player))

/**
 * 2. We want to write a function purchase() such that, given a particular card and collection of gems for a player,
 * we add the card to the player's hand and subtract the cost from the player's gems, if they are able to afford the card.
 *  -> The function should return true if the player can afford the card, and false if they cannot.
 */
const purchase = (card, player) => {
  if (!canPurchase(card, player)) return false

  const cardColors = Object.keys(card)
  const gemsNeeded = { ...card }
  const updatedGems = []

  for (gem of player.gems) {
    const gemCanBeUsed = cardColors.includes(gem)
    const needMoreGems = gemsNeeded[gem] > 0

    if (gemCanBeUsed && needMoreGems) gemsNeeded[gem]--
    else updatedGems.push(gem)
  }

  player.gems = updatedGems
  return true
}

console.log('player before purchase: ', player)
console.log(purchase(card, player))
console.log('player after purchase: ', player)

/**
 * 3. We want to introduce a new concept: for each card in a player's hand of a given color,
 * we want to reduce the cost of any new purchase by 1 gem for that held card's color.
 *
 * For example, if the player holds 2 (G)reen cards and 1 (R)ed, and we are considering a card that lists its cost as 4 (G)reen, 2 (R)ed, and 1 (B)lue,
 * then the player should be able to purchase it for 2 G, 1 R, and 1 B.
 */

// updated canPurchase() function to consider also the player's card colors
// didn't have time to update purchase() to also consider the player's card colors
