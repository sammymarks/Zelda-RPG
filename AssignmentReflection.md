# Things I didn't get to:
## Major Bugs:
- During monster appearance turns, Monsters appear on repeat if a player clicks on an invalid cell
- Monster does not disappear from screen if monster attacks Zelda and loses (although health and object go to zero)
## Mechanics:
- Stats balancing
- Alternate terrains
- Additional Items (fairies, treasure, etc.)
- "Smart" item selection (e.g., monsters get stronger at later turns)
- Holding multiple items; selecting them before taking a turn
- Link movement (similar to monster movement?)
## Other Functionality
- Logging battle/round stats
- Logging monster/item appear updates (see scrolling box below)
- Game summary stats (e.g., monsters killed, items collected)
- Local host stats
- Directly linking to URL images (e.g., from Zelda Wiki)
- Using keyboard entry (WASD, Arrow) in addition to Clicks
- More game stuff - dialogue/story, boss battle, link fishing mini-game
## Look and Feel
- Movement and combat animations
- Scrolling status box that keeps the full game's updates, defaulting to showing the recently added text. https://css-tricks.com/books/greatest-css-tricks/pin-scrolling-to-bottom/
- Better dynamic Resizing (putting alert bus and stats box underneath the gameboard at lower screen widths)
- Better backgrounds/aesthetics for:
- Board Squares (rounded corners, background image or texture on empty space)
- Character Images + Enbedded Character Data
- Major Containers (currently very blocky)
    
# Challenges
- Dynamic Sizing - You cannot restrict height in basic HTML/CSS. I ended up using cascading CSS Grid, but it's still a bit wonky
- Getting my API to finish running before doing anything else. Finally figured it out here - https://stackoverflow.com/questions/21518381/proper-way-to-wait-for-one-function-to-finish-before-continuing
- Game logic complexity - debugging took forever on each issue. Weird interactions included
    - Gamestate when monster initiates combat
    - Sequencing between player turn, monster turn, and updating game state

# Biggest Successes
- Dynamic sizing with CSS Grid
- API Async/await
- Dynamically building/deleting HTML with <span> formatting.
- Layered images with z-index
- Complex API dataset, integrating two data sets
- Complex, function-driven game logic:
    - 25+ functions with parameters and nested calls
    - For and forEach loops on arrays and objects
    - If/Switch all over the place
# Notable functions and functionality
## Grids on Grids - Nested for formatting and rendering on dynamic HTML
- **Screen Container**
    - **Title Container**
    - **Board Container**
        - **Game Squares Container**
            - Character Objects
    - **Right Container**
        - Updates Log
        - **Stats Box Container**
            - **4x Stats Containers**
                - Icon
                - Stat
        - **Buttons Container**
            - 2x Buttons
## gameSquares.forEach('click')
- Logs the gamesquare location on the gameboard when the square is clicked, initiaties turn sequence
## playerTurn(clickedLocation)
- Check if the location is a valid move
- Depending on the object in the target location:
    - Initiate Combat
    - Consume Items
    - Move to empty space
- execute the move and update player stats
## mosterTurn(monster) Loop 
For each monster on the board, every other turn:
- Pick a random and legal move using getValidRandomMoves()
- Depending on the object in the target location:
    - Initiate Combat
    - Consume Items
    - Move to empty space
## playerCombat(attacker, defender)
- log initial character stats
- while loop for rounds of combat while both characters are alive
- If player wins (player.lif > 0)
    - Update player stats based on initial character stats
    - delete/remove monster
- Show combat outcome in status log
## randomMonstersEquipment()
- pull a random monster, 2 random shields, and 2 random weapons objects from the API List
- place the random monster in a random valid location
- place the random weapons/shields in valid surrounding spaces
- executeValidMove(character, futureRow, futureColumn)
- hold initial location state in temporary variables
- clear initial boardState and related HTML
- update boardState and related HTML
## renderObject(character, row, column) - 
- character{} contains object characteristics
- Update HTML on a specific gameboard square based on character{} data if available and related icons:
    - Background Image
    - Category icon
    - Name
    - attack Stats
    - defence stats
    - life

# Biggest Takeaways
- CSS is not as hard as I thought it was, but I still don't like it
- I now understand why game engines are a thing

# If I did it again... 
- Give more time for debugging 
- Spend more time on CSS and less time on complex code; don't be afraid of screen @media and fixed sizes
- Explore other front-end functionality (e.g., open new pages)
- More/better use of string functions and other efficient code
- Be even more diligent about documenting "sprints" "test cases" and other work management
- Do the easy stuff first, even if it's boring!