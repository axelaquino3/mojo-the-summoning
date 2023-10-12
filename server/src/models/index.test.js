const { db } = require("../db/config")
const { User, Deck, Card, Attack } = require("../models/index")

// define in global scope
let user, user2
let deck, deck2
let card, card2
let attack, attack2

// clear db and create new card, attack, user, and deck before tests





describe("Mojo Summoning Test", () => {

    beforeAll(async () => {
        await db.sync({ force: true })
    
        user = await User.create({ username: 'gandalf' })
        user2 = await User.create({username: "hobbit"})
    
        card = await Card.create({ name: 'Arcturus Spellweaver', mojo: 100, stamina: 5, imgUrl: "http://localhost:5000/img/arcturus-spellweaver.jpg"})
        card2 = await Card.create({ name: 'Nimue Mistral', mojo: 100, stamina: 15, imgUrl: "http://localhost:5000/img/nimue-mistral.jpg"})
    
    
        attack = await Attack.create({ title: 'Sword', mojoCost: 10, staminaCost: 3 })
        attack2 = await Attack.create({ title: 'Club', mojoCost: 8, staminaCost: 1 })
    
        deck = await Deck.create({ name: 'snake pit', xp: 90 })
        deck2 = await Deck.create({ name: 'the matrix', xp: 90 })
    
    
    })
    
    // clear db after tests
    // afterAll(async () => await db.sync({ force: true }))
    
    //One to One Relationship Testing
    test("user has a deck", async () => {
        // get a user
        const user1 = await User.findByPk(1)
        // chose a deck
        const d1 = await Deck.findByPk(1)
        // assign deck to a user
        await user1.setDeck(d1)
        const user1All = await User.findByPk(1, {
            include: Deck
        })
        
        console.log(JSON.stringify(user1All, null, 2))

        expect(user1All.Deck.name).toBe("snake pit")
    })


    // One to Many Relationship Testing
    
    // test("", async () => {
        
    // })

   

    // Many to Many Relationship Testing
    // test("", async () => {
        
    // })

    // test("", async () => {
        
    // })

})