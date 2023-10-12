const { Attack } = require('./Attack')
const { Card } = require('./Card')
const { Deck } = require('./Deck')
const { User } = require('./User')

// import the rest of your models above

//set up the associations here

// One to One Relationship
User.hasOne(Deck)
Deck.belongsTo(User)



// and then export them all below
module.exports = { 
    Attack,
    Card,
    Deck,
    User 
}
