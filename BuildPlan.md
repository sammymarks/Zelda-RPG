# R1 Prototype
- Grid - 6x6
- Single/fixed-stats objects
  - Monster (1 atk, 2 health)
  - Sword (2 atk)
  - Player (0 atk, 3 health)
- Game Data
  - Player
    - Attack
    - Health
  - Weapon
    - Attack
  - Monster
    - Attack
    - Health
- Mechanics
  - Movement
  - Combat (including multi-combat)
  - Turn Count
- QA/Success Criteria
  - Valid turn order - Player -> Monster
  - Valid movement - Player
    - Player moves from keyboard/mouse
    - Cannot exit grid
    - Movement limited to one square up/down/left/right
  - Valid movement - Monster
    - Random Movement
    - Cannot exit grid
    - Movement limited to one square up/down/left/right
  - Player moves to sword location
    - Sword Disappears
    - Player Attack Stats are increased by sword attack value
  - Valid Combat
    - Attacker initiates
    - Combat repeats until character health is <1

# R2 Additional Mechanics
- Single/fixed stats objects
  - Shield
  - Fairy
- Mechanics
  - Shield Consume/Break
  - Fairy Consume consume/health increase
- Logic
  - Link spawn on turn 100 + link logic
  - Random Monster spawn every 4 turns, surrounded by random equipment
  - Spawn random starting monster, equipment
- Look and Feel
  - Instructions Modal and Button, defaults to On
  - New Game button
  - Game over modal



# R3 
  - 
- Single/fixed stats objects
  - Food
  - Treasure
  - Heart Container
- Look and Feel
  - Status Box dynamic scrolling
  - 
