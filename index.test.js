const { it, expect } = require('@jest/globals')


const StarWars = require('./index.js')


it('Anakin Skywalker', () => {
    expect(StarWars.StarWars('Darth Vador')).toBe('rodaV htraD')
})