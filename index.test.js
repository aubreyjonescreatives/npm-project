const { it, expect } = require('@jest/globals')


const StarWars = require('./index.js')

const Marvel = require('./index.js')


const HarryPotter = require('./index.js')



it('Anakin Skywalker', () => {
    expect(StarWars.StarWars('Darth Vador')).toBe('rodaV htraD')
})


it('Superheroes', () => {
    expect(Marvel.Marvel(4)).toBe(4)
    
})


it('Harry Potter Characters', () => {
    expect(HarryPotter.HarryPotter("Harry")).toBe("Harry")
    
})