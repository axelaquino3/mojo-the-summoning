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

        expect(user1All.Deck.name).toBe("snake pit")
    })


    // One to Many Relationship Testing
    
    test("Deck has many Cards", async () => {
        
        // get the Deck
        const deck1 = await Deck.findByPk(1)
        
        // get the Card
        const card1 = await Card.findByPk(1)
        const card2 = await Card.findByPk(2)
        
        // Assign cards to deck
        await deck1.setCards([card1, card2])
        const deckCards = await deck1.getCards()

        expect(deckCards[0].name).toBe("Arcturus Spellweaver")
        expect(deckCards[1].name).toBe("Nimue Mistral")
    })

   

    // Many to Many Relationship Testing
    
    test("Card has many Attacks", async () => {
        // Get card
        const card1 = await Card.findByPk(1)

        // Get Attacks
        const attack1 = await Attack.findByPk(1)
        const attack2 = await Attack.findByPk(2)

        // Set Attacks to Cards
        await card1.setAttacks([attack1, attack2])

        const card1All = await Card.findAll({
            include: Attack
        })

        const cardAttacks = await card1.getAttacks()

        console.log(JSON.stringify(cardAttacks, null, 2))

        expect(cardAttacks[0].title).toBe("Sword")
        expect(cardAttacks[1].title).toBe("Club")

    })


    test("Attacks may belong to Many Cards", () => {
        
    })

    

})