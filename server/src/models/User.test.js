const { describe, test, expect, beforeAll, afterAll } = require('@jest/globals')
const { User } = require('./User')
const { db } = require('../db/config')

// define in global scope
let user

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  user = await User.create({ username: 'gandalf' })
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('User', () => {
  test('has an id', async () => {
    // console.log(JSON.stringify(user, null, 2))
    expect(user).toHaveProperty('id')
  })

  /**
   * Create more tests
   * E.g. check that the username of the created user is actually gandalf
   */

  test("user's name is gandalf", async () => {
    expect(user.username).toBe("gandalf")
  })


})
