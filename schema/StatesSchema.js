// Schema for MongoDB
var mongoose = require('mongoose');  

var StatesSchema = new mongoose.Schema({  
    id: String,
    name: String,
    country_id: String,
    code: String,

},
{
    timestamps: true
});
mongoose.model('states', StatesSchema);
module.exports = mongoose.model('states');