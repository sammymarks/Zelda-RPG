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

  //Update Equipment Categories
  shieldsArray.forEach((element) => {
    element.category = `shield`
    element.def = element.properties.defense
  })
  weaponsArray.forEach((element) => {
    element.category = `weapon`
    element.atk = element.properties.attack

  })


  // console.log(compendiumAllItemsArray)
  console.log(weaponsArray)
  console.log(shieldsArray)
  console.log(monstersArray)
}

pullAPI()

//*****GAME OBJECTS AND VARIABLES*****

//GLOBAL

//Event Listener Objects 
  //Game Board
  let gameSquares = document.querySelectorAll(`.game-board-square`)
  // Grabbing About the Game button
  const openBtn = document.getElementById('openModal');

  // Grabbing modal element
  const modal = document.getElementById('modal')

  // Grabbing close button
  const close = document.getElementById('close')

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
//placeholders
let activeMonsters = []
let activeWeapons = []
let activeShields = []


//player - Name, Type, Attack, Defence, Row Location, Column Location
const player = {
  name: `Zelda`,
  category: `player`,
  atk: 2,
  maxLife: 10,
  lif: 10,
  def: 1,
  row: 3,
  col: 3,
  image: "/Assets/TLoZ_Princess_Zelda_Sprite.png"
}

//player - Name, Type, Attack, Defence, Row Location, Column Location
const link = {
  name: `Link`,
  category: `link`,
  row: 3,
  col: 3,
  image: "/Assets/Link_Fishing.webp"
}

//monster - Name, Type, Attack, Defence, Row Location, Column Location
const monster1 = {
  name: `Ganon`,
  category: `monster`,
  atk: 20,
  maxLife: 5,
  lif: 5,
  def: 0,
  row: 5,
  col: 5,
  image: "/Assets/BotW_Dark_Beast_Ganon_Model.png"
}

//weapon - Name, Type, Attack, Row Location, Column Location
const sword1 = {
  name: `Great Frostblade`,
  category: `weapon`,
  atk: 1,
  row: 2,
  col: 3,
  image: "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/great_frostblade/image"
}

const sword2 = {
  name: `Forest Dweller's Spear`,
  category: `weapon`,
  atk: 1,
  row: 4,
  col: 5,
  image: "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/forest_dweller's_spear/image"
}

const sword3 = {
  name: `Soldier Spear`,
  category: `weapon`,
  atk: 1,
  row: 5,
  col: 4
}

//*****FUNCTIONS*****

//Game Over Modal
const openModal = () => {
  modal.style.display = 'block';
}

const closeModal = () => {
  modal.style.display = 'none'
}

//https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function generateRandom (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

//Player Starting Location


function updatePlayerStats () {
  // console.log(`Update Player Stats`)
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

function renderObject (object, row, col) {

  //Get Type
  let typeChar
  switch (object.category){
    case "player":
      typeChar = `&#128120;`
    break;
    case "weapon":
      typeChar = '&#9876;'
    break;
    case "monsters":
      typeChar = `&#128128;`
    break;
    case "link":
      typeChar = `&#129501;`
    break;
    case "shield":
      typeChar = `&#128737`
    break;
    case "treasure":
      typeChar
  }

  let htmlString = new String()

  if (object.hasOwnProperty('image')==true) {htmlString += `<img class="board-object-image" src="${object.image}">\n`}
  if (object.hasOwnProperty('name')==true) {htmlString += `<div class="board-object-name">${object.name}</div>`}
  if (object.hasOwnProperty('lif')==true) {htmlString += `<div class="board-object-health"><span class="hearts">&hearts; </span>${object.lif}</div>\n`}
  if (object.hasOwnProperty('category')==true) {htmlString += `<div class="board-object-type"><span class="type">${typeChar}</span></div>\n`}
  if (object.hasOwnProperty('atk')==true) {htmlString += `<div class="board-object-attack"><span class="swords">&#9876; </span>${object.atk}</div>\n`}
  if (object.hasOwnProperty('def')==true) {htmlString += `<div class="board-object-defence"><span class="shields">&#128737; </span>${object.def}</div>\n`}

  document.getElementById(`${row}${col}`).innerHTML = htmlString


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

  //Clear initial boardState and HTML
  boardState[currentBoardLoc].objectOnLoc = null
  document.getElementById(`${currentRow}${currentCol}`).innerHTML = `[${currentRow}][${currentCol}]`
  //Update character state
  character.row = futureRow
  character.col = futureColumn
  //Update new boardState and HTML
  boardState[futureBoardLoc].objectOnLoc = character
  renderObject(character,futureRow,futureColumn)
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
  document.querySelector("#game-log-text").innerHTML += `${char.name} picked up a ${item.name} and gained ${item.atk} attack<br>`
  deleteObject(item)
}

//Combat involving player
function playerCombat (attacker, defender) {
  console.log('Attacker')
  console.log(attacker)
  console.log('Defender')
  console.log(defender)
  
  document.querySelector("#game-log-text").innerHTML += `${attacker.name} attacks ${defender.name}!<br>`


  let round = 0
  
  //Combat Stats
  let aInitialLif = attacker.lif
  let dInitialLif = defender.lif
  let pInitialAtk = player.atk
  let pInitialDef = player.def

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
    // console.log(`Round: ${round}`)
    // console.log(`Attacker Life: ${attacker.lif}`)
    // console.log(`Defender Life: ${defender.lif}`)
  }


  // If player wins, player loses shield, reduces attack, and monster is eliminated
  if (player.lif>0) {
    //Lose Shield
    player.def = 0
    //Lose attack equal to the monster's initial life
    attacker.category == `player` ? player.atk -= dInitialLif : player.atk -= aInitialLif
    if (player.atk <0) {player.atk = 0} 

    //Update log
    if (attacker.category == "player") {
      document.querySelector("#game-log-text").innerHTML += `${attacker.name} defeated ${defender.name} after ${round} ${round>1 ? `rounds` : `round`}<br>`
    } else {
      document.querySelector("#game-log-text").innerHTML += `${defender.name} defeated ${attacker.name} after ${round} ${round>1 ? `rounds` : `round`}<br>`
    }
    
    if ((pInitialAtk-player.atk)>0) {document.querySelector("#game-log-text").innerHTML += `${player.name}'s weapons breaks and loses ${pInitialAtk-player.atk} attack<br>`}

    if ((pInitialDef-player.def)>0) {document.querySelector("#game-log-text").innerHTML += `${player.name}'s shield breaks and loses all defence<br>`}

    //Delete monster
    attacker.category == `player` ? deleteObject(defender) : deleteObject(attacker)
  } else {
    if (defender.category == "player") {
      document.querySelector("#game-log-text").innerHTML += `${attacker.name} defeated ${defender.name} after ${round} ${round>1 ? `rounds` : `round`}<br>`
    } else {
      document.querySelector("#game-log-text").innerHTML += `${defender.name} defeated ${attacker.name} after ${round} ${round>1 ? `rounds` : `round`}<br>`
    }
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
    switch (targetObject.category) {
      case `player`:
        console.log(`MONSTER INITIATES COMBAT`)
        playerCombat(monster1,player)
        if (player.lif <1) {
          executeValidMove(monster1,monsterMoveRow,monsterMoveCol)
          gameOver()
        }
      break;
      case `weapon`: 
        consumeWeapon(monster1, targetObject)
        executeValidMove(monster1, randomMove.charAt(0), randomMove.charAt(1))  
      break;
    } 
  } else {
    document.querySelector("#game-log-text").innerHTML += `${monster1.name} moves to an empty space<br>`
    executeValidMove(monster1, randomMove.charAt(0), randomMove.charAt(1))  
  }
  updatePlayerStats()
}

function playerTurn (moveRow, moveCol) {
//Check valid player move
  let validPlayerBoardMove = checkValidBoardMove(player.row, player.col, moveRow, moveCol)
  if (validPlayerBoardMove == true) {
    
    playerTurnCount++
    document.querySelector("#game-log-text").innerHTML = `<span id="turn">TURN ${playerTurnCount}\n<br>`

    let moveLocationObject = checkNewLocationObject(moveRow,moveCol)
    if (moveLocationObject != null) {
      switch (moveLocationObject.category) {
        case 'monster':
          playerCombat(player, moveLocationObject)
        break;
        case 'weapon':
          consumeWeapon(player, moveLocationObject)
        break;
      }
    } else {
      document.querySelector("#game-log-text").innerHTML += `${player.name} moves to an empty space<br>`
    }
    executeValidMove(player, moveRow, moveCol)
    updatePlayerStats()
  }
}

function randomMonsterLocation () {
  let emptySpaces = []
  Object.keys(boardState).forEach(key => {
    // console.log(boardState[key])
    if ((boardState[key].objectOnLoc == null)||((boardState[key].objectOnLoc.category != 'player')&&(boardState[key].objectOnLoc.category != 'monsters')&&(boardState[key].objectOnLoc.category != 'link'))) {emptySpaces.push(key)}
  })
  // console.log(emptySpaces)

  let location = new String()
  emptySpaces.length>0 ? location=emptySpaces[generateRandom(0,(emptySpaces.length-1))] : location = null

  return location
  
}

function randomMonstersEquipment () {
  let randMonster = monstersArray[generateRandom(0,(monstersArray.length-1))]
  let monsterKey = randomMonsterLocation()
  if (monsterKey == null) {
    document.querySelector("#game-log-text").innerHTML += `BOARD IS FULL. New Monster and Equipment cannot be placed<br>`
    return
  } 
  randMonster.row = monsterKey.charAt(1)
  randMonster.col = monsterKey.charAt(2)
  objectStart(randMonster)

  let randWeapon1 = weaponsArray[generateRandom(0,(weaponsArray.length-1))]
  let randWeapon2 = weaponsArray[generateRandom(0,(weaponsArray.length-1))]
  let randShield1 = shieldsArray[generateRandom(0,(shieldsArray.length-1))]
  let randShield2 = shieldsArray[generateRandom(0,(shieldsArray.length-1))]
  let equipmentOrder = [randWeapon1,randShield1,randWeapon2,randShield2]
  let equipementLoc = getValidRandomMoves(randMonster.row,randMonster.col)

  for (let i = 0; i<equipementLoc.length; i++) {
    if (checkNewLocationObject(equipementLoc[i].charAt(0),equipementLoc[i].charAt(1))==null){
      equipmentOrder[i].row = equipementLoc[i].charAt(0)
      equipmentOrder[i].col = equipementLoc[i].charAt(1)
      objectStart(equipmentOrder[i])  
    }

  }


  console.log(monsterKey)
  console.log(equipementLoc)


}


function objectStart (newObject) {
  // console.log(`objectStart ${newObject.name}`)
  //Update boardState
  let boardKey = `b${newObject.row}${newObject.col}`
  //console.log(boardKey)
  boardState[boardKey].objectOnLoc = newObject
  //console.log(boardState[boardKey])
  
  renderObject(newObject, newObject.row, newObject.col)
  updatePlayerStats()
}

function gameOver () {
  console.log(`GAME OVER`)
}

function newGame () {
  //clear boardState
  Object.values(boardState).forEach(square => {
    // console.log(square.objectOnLoc)
    square.objectOnLoc = null
  })
  objectStart(player)
  objectStart(monster1)
  objectStart(sword1)
  objectStart(sword2)
  objectStart(sword3)
}

//*****GAMEPLAY*****

newGame()

//Begin Game Play with Player Turn
gameSquares.forEach ((square) => {
  square.addEventListener(`click`, () => {
    //Get click location
    randomMonstersEquipment()
    let moveLocation = square.getAttribute(`id`)
    let moveRow = parseInt(moveLocation.charAt(0))
    let moveCol = parseInt(moveLocation.charAt(1))
    playerTurn(moveRow, moveCol)
    if ((playerTurnCount%2) == 0){monsterTurn()}
  })
})

//*****OTHER EVENT LISTENERS*****
// openBtn.addEventListener('click', openModal)

// close.addEventListener('click', closeModal)