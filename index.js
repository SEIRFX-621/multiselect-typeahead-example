require('dotenv').config();
let express = require('express');
let ejsLayouts = require('express-ejs-layouts');
let app = express();
let moment = require('moment');
const PORT = process.env.PORT || 3000;
var methodOverride = require('method-override')

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(ejsLayouts)
// TODO you must add methodOverride to your middleware
app.use(methodOverride('_method'))
app.use(express.static(__dirname + '/public/'))

app.use((req, res, next) => {
    res.locals.moment = moment;
    next();
});

app.use('/test', require('./routes/test'));

const server = app.listen(PORT, () => {
    console.log(`listening on PORT: ${PORT}`);
});

module.exports = server