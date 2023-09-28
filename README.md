# Zelda-RPG
Link is lost! Can Zelda find him? 

This is a turn-based RPG on a grid with similar movement and item consumption as Chips Challege (https://youtu.be/ksT5z2gqPfw?feature=shared).
Zelda must survive through (X) turns, picking up equipment and health and fighting monsters until she finds Link
Spoiler alert - Link is probably cooking dubious food...

## Notes for Instructors
- Wireframe is linked here - https://www.figma.com/file/geqIZi5mkhqDo2gb4dLLIH/Project1-Zelda-RPG?type=design&node-id=0%3A1&mode=design&t=LrtLseEgFMMQfqJ7-1
- Expected challenges:
  - This has a lot of requirements... I may have to scale back MVP (see: prototype release in BuildPlan.md)
  - A lot of moving pieces (literally and figuratively) need a scalable way to manage asset and element names/classes/ids
  - Styling is hard, and I want to do this right!
  - API data set is not great - may need to hand-pick a subset of objects manually OR commit to randomness that takes away from "immersion"

## Credits
- API...
- Background Image: https://zelda.nintendo.com/breath-of-the-wild/media/
- Enemy Health...

## Game Play
- Turn based "RPG" where Zelda (main character) moves across a grid collecting items and fighting enemies until she finds Link
- Zelda's turn: movememt up, down, or sideways by one square (controlled by keyboard or click on square) and automatic "collection" of items on the square
- Monster turn is up, down, or sideways by one square (automatic, random direction)
- Combat occurs when Zelda enters a monster location (or vice versa)
- Only one object (player/monster/item) per grid space
- Game over when Zelda loses all hearts from combat
- Game over when Zelda finds Link (moves to his square)
- Turn order is Zelda -> Monsters -> Link -> Zelda

  
### Combat
- Combat initiator attacks first, followed by the other combatant
- Combat cycle will continue until player or monster has less that 1 health
- If the attacking player survives the combat, they move to the new spot
  //-TBD - Attacking character does not move if they win combat, i.e., combat counts as their turn 
- If the defending player survives the combat, they stay in their original spot
- Player's cumulative attack is reduced by the value of the monster's defence

### Monsters
- Monsters have health and attack based (TBD, most likely) on API-based stats
- Monsters will trample items they step on during movement
- Monsters move in the order they appeared
- Monsters cannot attach each other
- Monsters cannot exist on the same space as another monster, and will not move 

### Link
- Same random movement as monsters
- Automatically kills all encountered monsters
- Appears randomly after [TBD] turns

### Items
- Heart Container - Increases max health, refills health
- Food - TBD
  - Replenishes player health proportional to API value
  - Collecting [3] foods creates a "meal" that replenishes health
- Weapon - adds to cumulative attack value
- Shield - negates attack up to defence amount, breaks upon use, any remaining damage reduces player hearts
- Fairy - refills some health
- Treasure chest - random item based on appearance rate

## Logic and Psuedo Code

### Global Stats and Variables
- Superset of available items (if subset of the full API list)
- Appearance rates for items and monsters
  - Rare items e.g., Master Sword, Hylian Shield, fairy drop infrequently
  - Strong monsters show up at higher turn counts
  - Drop conditions for heart containers (e.g., every 5 turns)
  - Drop conditions for shields (e.g., no more than 2 shields on the grid at any point)
- Drop rates for items and monsters

### Game-State Stats and Variables

Zelda/Player
- Turn Count
- Heart Capacity
- Health
- Defence
  - Goes to zero when damage is taken, reduces health reduction
- Accumulated Attach

Monsters (Overall)
- Appearance Order
- TBD - Maximum monsters on board
- TBD - Stronger mosters as turns progress

Monsters (Individually)
- Health
- Attack

### Game-Play

- Movement constraints within the grid
- Movement constraints at the borders
- Movement constraints with monster/monster adjacency
- Movement from combat resolution
- Resolution of two objects in the same place
  - Player/Monster - Combat
  - Player/Item - Consume item
  - Monster/Item - Destroy item
- Combat
  - Combat loop (initiator -> defender) and status update
  - Shield logic
- Item consumption
  - No limit on attacks
  - TBD No limit on heart containers
  - Item is "destroyed" if it cannot be used (e.g., already have a shield, full health when picking up food)

### Functions
Global
- newGame -> clear board, clear stats, reposition player

Gameplay
- playerTurn
- playerConsume
- playerInitiateCombat
- monsterTurn
- monsterInitiateCombat
- linkTurn
- linkInitiateCombat
- checkGameOver
- itemAppear
- monsterAppear
- linkAppear

### Event Listeners and Interactions

Initialize
- Button: Are you ready to start?
- //TBD Starting position for the player
Gameplay- Keyboard U/D/L/R for player movement
- Click U/D/L/R for player movement
- button: new game
Game Over
- button: new game


### Visuals
- Element templates for player, monsters, items
- Gameboard (grid)
- Page Layout (grid)
- Player Status (grid)
- Combat Resolution game status
- Item Pickup game status
- Monster Appear game status (including name, attack, and defence)
- Title
- Game Initialize block
- Game over block
- New Game button
- 0.25 second delay for each monster/link movement


# Assets
- Shield Icon - https://commons.wikimedia.org/wiki/File:BotW_Weapon_Icon_BLACK.svg