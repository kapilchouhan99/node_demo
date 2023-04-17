const app = require('./app');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const {ConnectionWithMongodb} = require('./database/db')

dotenv.config({path: './config/config.env'})
ConnectionWithMongodb().catch(console.dir)
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json({extended: true}))
app.use(cors())

app.listen(process.env.PORT, ()=>{
    console.log(`server is working on http://localhost:${process.env.PORT}`)
});
