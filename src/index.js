const express = require('express')
const bodyParser = require('body-parser');

const { PORT } = require('./config/server.config');
const apiRouter = require('./routes')
const app = express();

//Body-Parsers->Middlewares
app.use(bodyParser.json())
app.use(bodyParser.text())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', apiRouter);

app.get('/ping', (req, res) => {
    res.send({ msg: "ping cnd is Working properly" })
})

app.listen(PORT, () => {
    console.log(`Server started at: ${PORT}`);
});