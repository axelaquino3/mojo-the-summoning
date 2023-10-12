const { describe, test, expect, beforeAll, afterAll } = require('@jest/globals')
const { Deck } = require('./Deck')
const { db } = require('../db/config')


// define in global scope
let deck

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  deck = await Deck.create({ name: 'snake pit', xp: 90 })
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))


describe('Deck', () => {
    
    test('has an id', async () => {
        expect(deck).toHaveProperty('id')
    })

    test('has a name', async () => {
        expect(deck.name).toBe("snake pit")
    })

    test('has an xp', async () => {
        expect(deck.xp).toBe(90)
    })
})
