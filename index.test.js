const { it, expect } = require('@jest/globals')


const StarWars = require('./index.js')

const Marvel = require('./index.js')


it('Anakin Skywalker', () => {
    expect(StarWars.StarWars('Darth Vador')).toBe('rodaV htraD')
})


it('Superheroes', () => {
    expect(Marvel.Marvel(4)).toBe(4)
    
})