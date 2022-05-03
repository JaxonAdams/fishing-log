const FishCaught = require('./FishCaught');
const User = require('./User');

// Associations here
User.hasMany(FishCaught, {
    foreignKey: 'user_id'
});

FishCaught.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = {
    FishCaught,
    User
};