
const { describe, test, expect, beforeAll, afterAll } = require('@jest/globals')
const { Attack } = require('./Attack')
const { db } = require('../db/config')

// define in global scope
let attack



beforeAll(async () => {
    await db.sync({ force: true })
    attack = await Attack.create({ title: 'Sword', mojoCost: 10, staminaCost: 3
  })
  })
  
  // clear db after tests
  afterAll(async () => await db.sync({ force: true }))
  
  describe('Attack', () => {
    test('has an id', async () => {
      // console.log(JSON.stringify(user, null, 2))
      expect(attack).toHaveProperty('id')
    })
  
    /**
     * Create more tests
     * E.g. check that the name of the created card is actually Arcturus Spellweaver
     */
  
    test("attack's title is Arcturus Spellweaver", async () => {
      expect(attack.title).toBe("Sword")
    })

    test("attack's mojoCost is number", async () => {
        expect(typeof attack.mojoCost).toBe("number")
      })

      test("attack's staminaCost is number", async () => {
        expect(typeof attack.staminaCost).toBe("number")
      })
  
    
  
  })