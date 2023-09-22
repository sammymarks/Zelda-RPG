let compendiumURL = `https://botw-compendium.herokuapp.com/api/v3/compendium/all`
let compendiumObject = axios.get(compendiumURL)
let compendiumList
setTimeout(() => {
    compendiumList = compendiumObject.data
  }, "4000");

console.log(compendiumObject)
console.log(compendiumList)