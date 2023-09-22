# Zelda-RPG
Link is lost! Can Zelda find him? 

## Game Play
- Turn based "RPG" where Zelda (main character) moves across a grid collecting items and fighting enemies until she finds Link
- Zelda's turn: movememt up, down, or sideways by one square (controlled by keyboard or click on square) and automatic "collection" of items on the square
- Monster turn is up, down, or sideways by one square (automatic, random direction)
- Combat occurs when Zelda enters a monster location (or vice versa)
- Game over when Zelda loses all hearts from combat
  
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

### Items
- Heart Container
- Food
- Weapon 
- Shield
- 

## Logic and Psuedo Code

### Global Stats and Variables
- Superset of available items (if subset of the full API list)
- Appearance rates for items and monsters
- Drop rates for items and monsters

### Game-State Stats and Variables

Zelda/Player
- Turn Count
- Heart Capacity
- Health
- Shield Inventory
- Accumulated Attach

Monsters (Overall)
- Appearance Order
- TBD - Maximum monsters on board
- TBD - Stronger mosters as turns progress

Monsters (Individually)
- Health
- Attack

### Game-Plau

General
- Movement constraints within the grid
- Movement constraints at the borders
- Resolution of two objects in the same place
  - Player/Monster - Combat
  - Player/Item - Consume item
  - Monster/Item - Destroy item
  - Moster/

### Event Listeners and Interactions

Initialize
- Button: Are you ready to start?
- //TBD Starting position for the player
Gameplay
- Keyboard U/D/L/R for player movement
- 
