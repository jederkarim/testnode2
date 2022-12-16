const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');
require('./passport-strategies/bearer');


require('dotenv').config();
const app = express();

require('./database/connectbd');


app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

app.get('/', (req,res)=>{
    res.send('hello word!')
})



const clientroute = require('./routes/clientroute')
const adminroute = require('./routes/Adminroute')
const coursroute = require('./routes/coursroute')

app.use('/api',adminroute);
app.use('/api', clientroute);
app.use('/api',coursroute);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`listening on port ${port}...`));