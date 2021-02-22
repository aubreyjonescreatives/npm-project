const { it, expect } = require('@jest/globals')


const StarWars = require('./index.js')

const Marvel = require('./index.js')


const HarryPotter = require('./index.js')


const VampireDiaries = require('./index.js')



const StarTrek = require('./index.js')



it('Anakin Skywalker', () => {
    expect(StarWars.StarWars('Darth Vador')).toBe('rodaV htraD')
})


it('Superheroes', () => {
    expect(Marvel.Marvel(4)).toBe(4)
    
})


it('Harry Potter Characters', () => {
    expect(HarryPotter.HarryPotter("Harry")).toBe("Harry")
    
})



it('Vampire Diaries Magical Creatures', () => {
    expect(VampireDiaries.VampireDiaries("werewolves")).toBe("werewolves")
    
})


it('Spock says to', () => {
    expect(StarTrek.StarTrek("Live,Long,and,Prosper")).toBe("Live,Long,and,Prosper")
    
})