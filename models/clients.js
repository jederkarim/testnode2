const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
    nom: {
        type: String
    },
    prenom: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    genre: {
        type: String
    },
    cours: [{type:Schema.Types.ObjectId, ref:'cours'}]
    
}, {
    versionKey: false,
    timetamps: true
}
)
module.exports = mongoose.model('Client',clientSchema,'Client')