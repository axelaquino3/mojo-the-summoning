const { Attack } = require('./Attack')
const { Card } = require('./Card')
const { Deck } = require('./Deck')
const { User } = require('./User')

// import the rest of your models above

//set up the associations here

// One to One Relationship
User.hasOne(Deck)
Deck.belongsTo(User)


// One to Many Relationship
Deck.hasMany(Card)
Card.belongsTo(Deck)



//Many to Many Relationship
Card.belongsToMany(Attack, {through: "card-attack"})
Attack.belongsToMany(Card, {through: "card-attack"})




// and then export them all below
module.exports = { 
    Attack,
    Card,
    Deck,
    User 
}
