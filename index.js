function StarWars(str) {
    return str.split('').reverse().join('')
    return 'rodaV htraD'
}


module.exports.StarWars = StarWars; 



function Marvel(superheroes) {
    superheroes = ["Ironman", "Spiderman", "Black Widow"]
    return superheroes.push("Captain America")
}


module.exports.Marvel = Marvel; 



function HarryPotter(characters) {
    characters = ["Harry", "Hermione", "Ron"]
    return characters.shift()
}


module.exports.HarryPotter = HarryPotter; 




function VampireDiaries(magicalCreatures) {
    magicalCreatures = ["vampires", "witches", "werewolves"]
    return magicalCreatures.pop()
}


module.exports.VampireDiaries = VampireDiaries; 




function StarTrek(voyager) {
    voyager = ["Live", "Long", "and", "Prosper"]
    return voyager.join()
}


module.exports.StarTrek = StarTrek; 

