const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studySchema = new Schema({
   
    subject: {type: String, required: true},
    duration: {type: String, required: true},
    date: {type: Date, required: true},
},
{
    timestamps:true,
}

)

const Study = mongoose.model('Study',studySchema);

module.exports=Study;