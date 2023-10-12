const { describe, test, expect, beforeAll, afterAll } = require('@jest/globals')
const { Card } = require('./Card')
const { db } = require('../db/config')

// define in global scope
let card

// clear db and create new card before tests
beforeAll(async () => {
  await db.sync({ force: true })
  card = await Card.create({ name: 'Arcturus Spellweaver', mojo: 100, stamina: 5, imgUrl: "http://localhost:5000/img/arcturus-spellweaver.jpg"
})
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('Card', () => {
  test('has an id', async () => {
    // console.log(JSON.stringify(user, null, 2))
    expect(card).toHaveProperty('id')
  })

  /**
   * Create more tests
   * E.g. check that the username of the created user is actually gandalf
   */

  test("card's name is Arcturus Spellweaver", async () => {
    expect(card.name).toBe("Arcturus Spellweaver")
  })


})