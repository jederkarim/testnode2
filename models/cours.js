const { version } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
    nomcours: {
        type: String
    },
    description: {
        type: String
    },
    nombreachat: {
        type: Number
    }
}, {
    versionKey: false,
    timetamps: true
}
)
module.exports = mongoose.model('client',clientSchema,'client')