import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import fs from 'fs';

const app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json())
app.use(morgan('combined',{
    stream:fs.createWriteStream('./logs/app.log', {flags: 'a'})
}));
app.use(morgan('dev'));

app.get("/", (req, res) => {
    console.log("addiotn inside addition..")
    res.send("Inside addition..")
})

app.post("/", (req, res) => {
    const num1 = parseInt(req.body.num1);
    const num2 = parseInt(req.body.num2);
    const result = num1 + num2;
    res.status(200).send(result+"");
})

app.listen(8001,() => {
    console.log("Listening at port 8001...")
})