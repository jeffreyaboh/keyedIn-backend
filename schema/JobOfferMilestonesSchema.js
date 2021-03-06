// Schema for MongoDB
var mongoose = require('mongoose');  

var JobOfferMilestonesSchema = new mongoose.Schema({  
    id: String,
    job_offer_id: String,
    milestone_description: String,
    due_date: Date,
    amount: Number,
    status: { type: String, enum: ['pending', 'closed', 'opened', 'declined', 'accepted', 'settled', 'ongoing', 'initiated'], default: 'pending' },

},
{
    timestamps: true
});
mongoose.model('job_offer_milestones', JobOfferMilestonesSchema);
module.exports = mongoose.model('job_offer_milestones');