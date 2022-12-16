const mongoose = require('mongoose');

mongoose.connect(process.env.DB).then(()=>
console.log('db works')).catch((error)=>
console.log(error));
mongoose.Promise= global.Promise;