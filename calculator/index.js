import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';
import winston from './config/winston.js';
import morgan from 'morgan';

const app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(morgan('combined', {stream : winston.stream}));

app.get("/", (req,res) => {
    res.send("Using calc service...");
})

app.get("/addition", async (req,res) => {
    const data = await axios.get("http://localhost:8001");
    res.send(data.data);
    
})

app.get("/subtraction", async (req, res) => {
    const data = await axios.get("http://localhost:8002");
    res.send(data.data);
})

app.get("/multiplication", async (req, res) => {
    const data = await axios.get("http://localhost:8003");
    res.send(data.data);
})

app.post("/addition", async (req, res) => {
    const {num1, num2} = req.body;
    const result = await axios.post("http://localhost:8001",{num1,num2});
    res.send(result.data+"")
})

app.post("/subtraction", async(req, res) => {
    const {num1, num2} = req.body
    const result = await axios.post("http://localhost:8002",{num1, num2});
    res.send(result.data+"");
})

app.post("/multiplication", async(req, res) => {
    const {num1, num2} = req.body
    const result = await axios.post("http://localhost:8003",{num1, num2});
    res.send(result.data+"");
})

app.post("/division", async(req, res) => {
    const {num1, num2} = req.body
    const result = await axios.post("http://localhost:8004",{num1, num2});
    res.send(result.data+"");
})

app.listen(8000,() => {
    console.log("Listening at port 8000...")
})