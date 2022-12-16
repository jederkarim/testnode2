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
    roleadmin: {
        type: String
    }
   
}, {
    versionKey: false,
    timetamps: true
}
)
module.exports = mongoose.model('Admin',clientSchema,'Admin')