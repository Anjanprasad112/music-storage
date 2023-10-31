const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const musicSchema = new Schema({
    title : {type : String,required: true},
    lyrics : {type : String,required: true}
})

module.exports = mongoose.model('MUSIC',musicSchema);



// "";
