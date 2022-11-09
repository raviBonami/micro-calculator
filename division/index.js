import express from 'express';
import bodyParser from 'body-parser';
import logger from './logger.js';
import morgan from 'morgan';

const app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(morgan('combined',{stream: logger.stream}));

app.get("/", (req, res) => {
    res.send("Inside division..")
})

app.post("/", (req, res) => {
    const num1 = parseInt(req.body.num1);
    const num2 = parseInt(req.body.num2);
    const result = num2 !== 0 ? num1/num2 : NaN;
    res.status(200).send(result+"");
})

app.listen(8004,() => {
    console.log("Listening at port 8004...")
})