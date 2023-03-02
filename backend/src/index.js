const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const route = require('./routes/route.js');
const app = express();
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://functionup-cohert:yCRgEggIFfjlaB8o@sl0yd7n.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    
})
    .then(() => console.log('mongodb is Connected'))
    .catch(err => console.log(err))

app.use('/', route);

app.listen(process.env.PORT || 4000, function() {
	console.log('Express app running on port ' + (process.env.PORT || 4000))
});

