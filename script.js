//*****API PULL*****
let compendiumAllItemsArray = []
let treasureArray = []
let shieldsArray = []
let weaponsArray = []
let monstersArray = []
let materialsArray = []

const pullAPI = async () => {
  //Initial API Call
  let compendiumAllURL = `https://botw-compendium.herokuapp.com/api/v3/compendium/all`
  let compendiumAll = await axios.get(compendiumAllURL)
  compendiumAllItemsArray = compendiumAll.data.data

  //parse full API pull into object type arrays
  for (let i=0; i<compendiumAllItemsArray.length; i++) {
    let itemCategory = compendiumAllItemsArray[i].category
    
    if (itemCategory == `treasure`) {
      treasureArray.push(compendiumAllItemsArray[i])
    } else if (itemCategory == `monsters`) {
      monstersArray.push(compendiumAllItemsArray[i])
    } else if (itemCategory == `materials`) {
      materialsArray.push(compendiumAllItemsArray[i])
    } else if (itemCategory == `equipment`) {
      if (compendiumAllItemsArray[i].name.toLowerCase().includes(`shield`)) {
        shieldsArray.push(compendiumAllItemsArray[i])
      } else if (compendiumAllItemsArray[i].properties.attack > 0) {
          weaponsArray.push(compendiumAllItemsArray[i])
      }    
    } 
  }

  //Log monsters health from source: https://gist.github.com/m-byte918/1d1acc569ad1cd59ead8e151fddf4591#file-botw_enemy_health
  //https://docs.google.com/spreadsheets/d/1V9MjzX3pUkMvmesItZyZOj2qlbLx4J6NF0ztmvV_g1c/edit#gid=334445825
  let monsterHealthArray = [
    {name: `Black Bokoblin`, health: 240},
    {name: `Black Hinox`, health: 1000},
    {name: `Black Lizalfos`, health: 288},
    {name: `Black Moblin`, health: 360},
    {name: `Blizzrobe`, health: 300},
    {name: `Blue Bokoblin`, health: 72},
    {name: `Blue Hinox`, health: 800},
    {name: `Blue Lizalfos`, health: 120},
    {name: `Blue Moblin`, health: 144},
    {name: `Blue Sparrow`, health: 1},
    {name: `Blue-Maned Lynel`, health: 3000},
    {name: `Blue-Winged Heron`, health: 1},
    {name: `Blupee`, health: 100},
    {name: `Bokoblin`, health: 13},
    {name: `Bright-Chested Duck`, health: 1},
    {name: `Bushy-Tailed Squirrel`, health: 1},
    {name: `Calamity Ganon`, health: 8000},
    {name: `Chuchu`, health: 24},
    {name: `Cold-Footed Wolf`, health: 45},
    {name: `Common Sparrow`, health: 1},
    {name: `Cucco`, health: 100},
    {name: `Cursed Bokoblin`, health: 1},
    {name: `Cursed Lizalfos`, health: 1},
    {name: `Cursed Moblin`, health: 30},
    {name: `Dark Beast Ganon`, health: 8},
    {name: `Decayed Guardian`, health: 500},
    {name: `Decayed Guardian/Guardian Stalker`, health: 100},
    {name: `Dinraal`, health: 100},
    {name: `Donkey`, health: 100},
    {name: `Eldin Ostrich`, health: 8},
    {name: `Electric Chuchu`, health: 27},
    {name: `Electric Keese`, health: 1},
    {name: `Electric Lizalfos`, health: 288},
    {name: `Electric Wizzrobe`, health: 150},
    {name: `Enemy_Bee_Swarm`, health: 2},
    {name: `Enemy_Bee_Swarm_HeapMeasure`, health: 2},
    {name: `Enemy_GanonBeast_WeakPoint`, health: 1},
    {name: `Enemy_Giant_Attention`, health: 100},
    {name: `Enemy_SiteBoss_Spear_Attention`, health: 100},
    {name: `Farosh`, health: 100},
    {name: `Fire Chuchu`, health: 27},
    {name: `Fire Keese`, health: 1},
    {name: `Fire Wizzrobe`, health: 150},
    {name: `Fire-Breath Lizalfos`, health: 160},
    {name: `Fireblight Ganon`, health: 800},
    {name: `Forest Octorok`, health: 8},
    {name: `Frost Pebblit`, health: 20},
    {name: `Frost Talus`, health: 800},
    {name: `Golden Sparrow`, health: 1},
    {name: `Grassland Fox`, health: 8},
    {name: `Great-Horned Rhinoceros`, health: 80},
    {name: `Grizzlemaw Bear`, health: 500},
    {name: `Guardian Scout I`, health: 13},
    {name: `Guardian Scout II`, health: 145},
    {name: `Guardian Scout III`, health: 900},
    {name: `Guardian Scout IV`, health: 1800},
    {name: `Guardian Skywatcher`, health: 840},
    {name: `Guardian Stalker`, health: 900},
    {name: `Guardian Turret`, health: 1500},
    {name: `GuardianBeamCannon`, health: 2000},
    {name: `GuardianWeakPoint`, health: 2000},
    {name: `Hateno Cow`, health: 100},
    {name: `Highland Sheep`, health: 100},
    {name: `Hinox`, health: 600},
    {name: `Honeyvore Bear`, health: 250},
    {name: `Horse`, health: 100},
    {name: `Hotfeather Pigeon`, health: 1},
    {name: `Hylian Retriever`, health: 100},
    {name: `Ice Chuchu`, health: 27},
    {name: `Ice Keese`, health: 1},
    {name: `Ice Wizzrobe`, health: 150},
    {name: `Ice-Breath Lizalfos`, health: 288},
    {name: `Igneo Pebblit`, health: 20},
    {name: `Igneo Talus`, health: 800},
    {name: `Islander Hawk`, health: 1},
    {name: `Keese`, health: 1},
    {name: `Lizalfos`, health: 50},
    {name: `Lynel`, health: 2000},
    {name: `Maraudo Wolf`, health: 16},
    {name: `Master Kohga`, health: 300},
    {name: `Meteo Wizzrobe`, health: 300},
    {name: `Moblin`, health: 56},
    {name: `Molduga`, health: 1500},
    {name: `Mountain Buck`, health: 10},
    {name: `Mountain Crow`, health: 1},
    {name: `Mountain Doe`, health: 10},
    {name: `Mountain Goat`, health: 8},
    {name: `Naydra`, health: 100},
    {name: `Ore Deposit`, health: 100},
    {name: `Patricia`, health: 100},
    {name: `Pink Heron`, health: 1},
    {name: `Rainbow Pigeon`, health: 1},
    {name: `Rainbow Sparrow`, health: 1},
    {name: `Red Sparrow`, health: 1},
    {name: `Red-Tusked Boar`, health: 40},
    {name: `RemainsElectric_WeakPoint`, health: 2},
    {name: `RemainsElectricCannon`, health: 2000},
    {name: `RemainsWind_Battery_A_01`, health: 80},
    {name: `Rock Octorok`, health: 8},
    {name: `Sand Seal`, health: 100},
    {name: `Sand Sparrow`, health: 1},
    {name: `Seagull`, health: 1},
    {name: `Sentry`, health: 1000},
    {name: `Silver Bokoblin`, health: 720},
    {name: `Silver Lizalfos`, health: 864},
    {name: `Silver Lynel`, health: 5000},
    {name: `Silver Moblin`, health: 1080},
    {name: `Snow Octorok`, health: 8},
    {name: `Snowcoat Fox`, health: 18},
    {name: `Stalizalfos`, health: 1},
    {name: `Stalkoblin`, health: 1},
    {name: `Stalmoblin`, health: 2},
    {name: `Stalnox`, health: 1000},
    {name: `Stone Pebblit`, health: 20},
    {name: `Stone Talus`, health: 600},
    {name: `Tabantha Moose`, health: 30},
    {name: `Thunder Wizzrobe`, health: 300},
    {name: `Thunderblight Ganon`, health: 800},
    {name: `Treasure Octorok`, health: 8},
    {name: `Wasteland Coyote`, health: 30},
    {name: `Water Buffalo`, health: 24},
    {name: `Water Octorok`, health: 8},
    {name: `Waterblight Ganon`, health: 800},
    {name: `White Goat`, health: 100},
    {name: `White Pigeon`, health: 1},
    {name: `White-Maned Lynel`, health: 4000},
    {name: `Windblight Ganon`, health: 800},
    {name: `WolfLink`, health: 24},
    {name: `Wood Pigeon`, health: 1},
    {name: `Woodland Boar`, health: 8},
    {name: `Yiga Blademaster`, health: 467},
    {name: `Yiga Footsoldier`, health: 69},
  ]

  //Update monster atk, def, lif in monstersArray, remove monster if no health match
  for (let i=0; i<monstersArray.length; i++) {
    let match = false
    let health = new Number()
    
    monsterHealthArray.forEach((monstChk) => {
      if (monstersArray[i].name.toLowerCase() == monstChk.name.toLowerCase()) {
        match = true
        health = monstChk.health
      }
    })
    
    if (match = true) {
      monstersArray[i].maxLife = health
      monstersArray[i].lif = health
      monstersArray[i].atk = 0.1*health
      monstersArray[i].def = 0
    } else {
      monstersArray.splice(i,1)
    }

  }
  // console.log(compendiumAllItemsArray)
  console.log(weaponsArray)
  console.log(shieldsArray)
  console.log(monstersArray)
}

pullAPI()

//*****GAME OBJECTS AND VARIABLES*****

//GLOBAL

//Event Listener Objects 
let gameSquares = document.querySelectorAll(`.game-board-square`)

//Board State

const boardState = {
 b00: {row: 0, col: 0, objectOnLoc: null, terrain: null},
 b01: {row: 0, col: 1, objectOnLoc: null, terrain: null},
 b02: {row: 0, col: 2, objectOnLoc: null, terrain: null},
 b03: {row: 0, col: 3, objectOnLoc: null, terrain: null},
 b04: {row: 0, col: 4, objectOnLoc: null, terrain: null},
 b05: {row: 0, col: 5, objectOnLoc: null, terrain: null},
 b10: {row: 1, col: 0, objectOnLoc: null, terrain: null},
 b11: {row: 1, col: 1, objectOnLoc: null, terrain: null},
 b12: {row: 1, col: 2, objectOnLoc: null, terrain: null},
 b13: {row: 1, col: 3, objectOnLoc: null, terrain: null},
 b14: {row: 1, col: 4, objectOnLoc: null, terrain: null},
 b15: {row: 1, col: 5, objectOnLoc: null, terrain: null},
 b20: {row: 2, col: 0, objectOnLoc: null, terrain: null},
 b21: {row: 2, col: 1, objectOnLoc: null, terrain: null},
 b22: {row: 2, col: 2, objectOnLoc: null, terrain: null},
 b23: {row: 2, col: 3, objectOnLoc: null, terrain: null},
 b24: {row: 2, col: 4, objectOnLoc: null, terrain: null},
 b25: {row: 2, col: 5, objectOnLoc: null, terrain: null},
 b30: {row: 3, col: 0, objectOnLoc: null, terrain: null},
 b31: {row: 3, col: 1, objectOnLoc: null, terrain: null},
 b32: {row: 3, col: 2, objectOnLoc: null, terrain: null},
 b33: {row: 3, col: 3, objectOnLoc: null, terrain: null},
 b34: {row: 3, col: 4, objectOnLoc: null, terrain: null},
 b35: {row: 3, col: 5, objectOnLoc: null, terrain: null},
 b40: {row: 4, col: 0, objectOnLoc: null, terrain: null},
 b41: {row: 4, col: 1, objectOnLoc: null, terrain: null},
 b42: {row: 4, col: 2, objectOnLoc: null, terrain: null},
 b43: {row: 4, col: 3, objectOnLoc: null, terrain: null},
 b44: {row: 4, col: 4, objectOnLoc: null, terrain: null},
 b45: {row: 4, col: 5, objectOnLoc: null, terrain: null},
 b50: {row: 5, col: 0, objectOnLoc: null, terrain: null},
 b51: {row: 5, col: 1, objectOnLoc: null, terrain: null},
 b52: {row: 5, col: 2, objectOnLoc: null, terrain: null},
 b53: {row: 5, col: 3, objectOnLoc: null, terrain: null},
 b54: {row: 5, col: 4, objectOnLoc: null, terrain: null},
 b55: {row: 5, col: 5, objectOnLoc: null, terrain: null},
}

//Turn Order
const turnOrder = [`player`,`monsters`,`link`]

//Player Turn Count
let playerTurnCount = 0

//CHARACTERS AND ITEMS

//player - Name, Type, Attack, Defence, Row Location, Column Location
const player = {
  nam: `Zelda`,
  typ: `player`,
  atk: 0,
  maxLife: 10,
  lif: 10,
  def: 1,
  row: 3,
  col: 3,
  image: "/Assets/TLoZ_Princess_Zelda_Sprite.png"
}

//monster - Name, Type, Attack, Defence, Row Location, Column Location
const monster1 = {
  nam: `Ganon`,
  typ: `monster`,
  atk: 2,
  maxLife: 5,
  lif: 5,
  def: 0,
  row: 5,
  col: 5,
  image: "/Assets/BotW_Dark_Beast_Ganon_Model.png"
}

//weapon - Name, Type, Attack, Row Location, Column Location
const sword1 = {
  nam: `Great Frostblade`,
  typ: `weapon`,
  atk: 1,
  row: 2,
  col: 3,
  image: "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/great_frostblade/image"
}

const sword2 = {
  nam: `Forest Dweller's Spear`,
  typ: `weapon`,
  atk: 1,
  row: 4,
  col: 5,
  image: "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/forest_dweller's_spear/image"
}

const sword3 = {
  nam: `Soldier Spear`,
  typ: `weapon`,
  atk: 1,
  row: 5,
  col: 4
}

//*****FUNCTIONS*****

//Console Log point-in-time board-state
function showGridState () {
  for (let i=0; i<gridState.length; i++) {
    console.log(gridState[i])
  }
}

//https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function generateRandom (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

//Player Starting Location


function updatePlayerStats () {
  console.log(`Update Player Stats`)
  //Health
  document.getElementById('life-stats').innerHTML = `${player.lif}/${player.maxLife}`
  //Move Count
  document.getElementById('move-count-stats').innerHTML = `${playerTurnCount}`
  //Attack
  document.getElementById('attack-stats').innerHTML = `${player.atk}`
  //Defence
  document.getElementById('defence-stats').innerHTML = `${player.def}`
}

//function setStartLocation () {}

function objectStart (newObject) {
    //Update boardState
  let boardKey = `b${newObject.row}${newObject.col}`
  //console.log(boardKey)
  boardState[boardKey].objectOnLoc = newObject
  //console.log(boardState[boardKey])
  //Update HTML
  // document.getElementById(`${newObject.row}${newObject.col}`).innerHTML = newObject.nam
  // if (newObject.typ=='player') {
  document.getElementById(`${newObject.row}${newObject.col}`).innerHTML = `<img class="board-object-image" src="${newObject.image}">`
  // }
  updatePlayerStats()
}

function deleteObject (obj) {
  let objKey = `b${obj.row}${obj.col}`
  boardState[objKey].objectOnLoc = null
  obj.row = null
  obj.col = null
}



//Is player move valid? Returns true/false
function checkValidBoardMove (charRow,charCol,eventRow,eventCol) {
  
  let valid = false
  let validAnswers = [`${charRow+1}${charCol}`,`${charRow-1}${charCol}`,`${charRow}${charCol+1}`,`${charRow}${charCol-1}`]
  let eventID = `${eventRow}${eventCol}`
  
  validAnswers.indexOf(eventID) !=-1 ? valid = true : valid = false
  //console.log(valid)
  return valid
}

function getValidRandomMoves (currentRow, currentCol) {
  //Check corners
  let currentID = `${currentRow}${currentCol}`
  // console.log(`Current Row: ${currentRow}`)
  // console.log(`Current Row: ${currentCol}`)

  currentRow = parseInt(currentRow)
  currentCol = parseInt(currentCol)
  

  let validMoves = new Array()

  if (currentID == `00`) {
    validMoves = ['01',`10`]
  } else if (currentID == `50`) {
    validMoves = ['51',`40`]
  } else if (currentID == `05`) {
    validMoves = ['04',`15`]
  } else if (currentID == `50`) {
    validMoves = ['51',`40`]
  } else if (currentID == `55`) {
    validMoves = ['54',`45`]
  } else if (currentRow==0) {
    validMoves = [`${currentRow}${currentCol-1}`,`${currentRow}${currentCol+1}`,`${currentRow+1}${currentCol}`]
    //console.log(`row0 special`)
  } else if (currentRow==5) {
    //console.log(`row5 special`)
    validMoves = [`${currentRow}${currentCol-1}`,`${currentRow}${currentCol+1}`,`${currentRow-1}${currentCol}`]
  } else if (currentCol==0) {
    //console.log(`col0 special`)
    validMoves = [`${currentRow+1}${currentCol}`,`${currentRow-1}${currentCol}`,`${currentRow}${currentCol+1}`]
  } else if (currentCol==5) {
    //console.log(`col5 special`)
    validMoves = [`${currentRow+1}${currentCol}`,`${currentRow-1}${currentCol}`,`${currentRow}${currentCol-1}`]
  } else {
    //console.log(`middle special`)
    validMoves = [`${currentRow+1}${currentCol}`,`${currentRow-1}${currentCol}`,`${currentRow}${currentCol+1}`,`${currentRow}${currentCol-1}`]
  }
  return validMoves
}

//Execute Valid Move
function executeValidMove (character, futureRow, futureColumn) {
  let currentRow = character.row
  let currentCol = character.col
  let currentBoardLoc = `b${currentRow}${currentCol}`
  let futureBoardLoc = `b${futureRow}${futureColumn}`

  // console.log(`Current`)
  // console.log(character.nam)
  // console.log(character.row, character.col)
  // console.log(`Current Board State`)
  // console.log(boardState)

  //Clear initial boardState and HTML
  boardState[currentBoardLoc].objectOnLoc = null
  document.getElementById(`${currentRow}${currentCol}`).innerHTML = `[${currentRow}][${currentCol}]`
  //Update character state
  character.row = futureRow
  character.col = futureColumn
  //Update new boardState and HTML
  boardState[futureBoardLoc].objectOnLoc = character
  document.getElementById(`${character.row}${character.col}`).innerHTML = character.nam
  if (character.typ=='player') {
    document.getElementById(`${character.row}${character.col}`).innerHTML = `<img class="board-object-image" src="${character.image}">`
  }

  // console.log(`Future`)
  // console.log(character.nam)
  // console.log(character.row, character.col)
  // console.log(`Future Board State`)
  // console.log(boardState)
}

//Returns object type sitting in future location
function checkNewLocationObject (row, col) {
  objectKey = `b${row}${col}`
  // console.log(boardState)
  // console.log(objectKey)
  // console.log(boardState[objectKey].objectOnLoc)
  return boardState[objectKey].objectOnLoc
}

//Consume Weapon
function consumeWeapon (char, item) {
  console.log(char)
  console.log(item)
  console.log(`Starting char atk: ${char.atk}`)
  char.atk += item.atk
  console.log(`Ending char atk: ${char.atk}`)

  console.log(`${char.nam} picked up a ${item.nam} and gained ${item.atk} attack`)
  deleteObject(item)
}

//Combat involving player
function playerCombat (attacker, defender) {
  console.log('Attacker')
  console.log(attacker)
  console.log('Defender')
  console.log(defender)
  
  let round = 0
  
  //Combat Stats
  let aInitialLif = attacker.lif
  let dInitialLif = defender.lif

  //Start Combat

  while ((attacker.lif>0)&&(defender.lif>0)) {
    round++
    //Attacker attacks first; Defender loses life equal to attack value less defence
    
    if ((attacker.atk - defender.def)>0) {
      defender.lif -= (attacker.atk - defender.def)
    }  
    //If Defender survives; Attacker loses life equal to attack value less defence
    if (defender.lif > 0) {
      if ((defender.atk - attacker.def)>0) {
        attacker.lif -= (defender.atk - attacker.def)
      }
    }

    console.log(`Round: ${round}`)
    console.log(`Attacker Life: ${attacker.lif}`)
    console.log(`Defender Life: ${defender.lif}`)
  }

  console.log(`Combat ended after ${round} rounds.`)

  // If player wins, player loses shield, reduces attack, and monster is eliminated
  if (player.lif>0) {
    //Lose Shield
    player.def = 0
    //Lose attack equal to the monster's initial life
    attacker.typ == `player` ? player.atk -= dInitialLif : player.atk -= aInitialLif
    if (player.atk <0) {player.atk = 0} 
    console.log('Attacker')
    console.log(attacker)
    console.log('Defender')
    console.log(defender)
    //Delete monster
    attacker.typ == `player` ? deleteObject(defender) : deleteObject(attacker)
  } else {
    gameOver()
  }
}


function monsterTurn () {
  console.log(`MONSTER TURN`)
  let possibleMoves = getValidRandomMoves(monster1.row, monster1.col)
  //console.log(possibleMoves)
  let randomMoveSelector = generateRandom(0,possibleMoves.length-1)
  //console.log(randomMoveSelector)
  let randomMove = possibleMoves[randomMoveSelector]
  //console.log(randomMove)
  let monsterMoveRow = parseInt(randomMove.charAt(0))
  let monsterMoveCol = parseInt(randomMove.charAt(1))
  let targetObject = checkNewLocationObject(monsterMoveRow,monsterMoveCol)
  console.log(`Target Object`)
  console.log(targetObject)
  if (targetObject!=null) {
    switch (targetObject.typ) {
      case `player`:
        console.log(`MONSTER INITIATES COMBAT`)
        playerCombat(monster1,player)
      break;
      case `weapon`: 
        consumeWeapon(monster1, targetObject)
        executeValidMove(monster1, randomMove.charAt(0), randomMove.charAt(1))  
      break;
    }
  } else {
    executeValidMove(monster1, randomMove.charAt(0), randomMove.charAt(1))  
  }
  updatePlayerStats()
}

function gameOver () {
  console.log(`GAME OVER`)
}

//*****GAMEPLAY*****

// playerStart()
// monsterStart()

objectStart(player)
// objectStart(monster1)
objectStart(sword1)
objectStart(sword2)
objectStart(sword3)


console.log(boardState)

//Begin Game Play with Player Turn
gameSquares.forEach ((square) => {
  square.addEventListener(`click`, () => {
    //Get click location
    let moveLocation = square.getAttribute(`id`)
    let moveRow = parseInt(moveLocation.charAt(0))
    let moveCol = parseInt(moveLocation.charAt(1))
    //Check valid player move
    console.log(`PLAYER TURN`)
    let validPlayerBoardMove = checkValidBoardMove(player.row, player.col, moveRow, moveCol)
    if (validPlayerBoardMove == true) {
      
      playerTurnCount++
      let playerTurnAction = new String()
      document.querySelector(".updates-container").innerHTML = `TURN ${playerTurnCount}`

      let moveLocationObject = checkNewLocationObject(moveRow,moveCol)
      if (moveLocationObject != null) {
        switch (moveLocationObject.typ) {
          case 'monster':
            playerCombat(player, moveLocationObject)
          break;
          case `weapon`:
            console.log("Weapon Case")
            consumeWeapon(player, moveLocationObject)
          break;
        }
      }
      executeValidMove(player, moveRow, moveCol)
      updatePlayerStats()
      if ((playerTurnCount%2) == 0){
        monsterTurn()
      }
    }
  })
})