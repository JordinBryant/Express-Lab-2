const express = require("express");

const app = express();
//ROUTE
app.get("/", (req, res) => {
  res.send("Hello There");
});

//GREETING
app.get("/greeting/:name", (req, res) => {
  res.send("What's up, " + req.params.name + " It's so great to see you!");
});

//TIP/TOTAL/TIPPERCENTAGE

app.get("/tip/:total/:tipPercentage", (req, res) => {
  res.send("Your tip is: " + (req.params.tipPercentage / 100) * req.params.total + "$");
});

//MAGIC-8-BALL

app.get("/magic/:question", (req, res) => {
  res.send(`
  <h1>${randomResponse}</h1>`)
});
const eightBall = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", 
    "You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Yes", "Signs point to yes",
     "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", 
    "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", 
    "Outlook not so good", "Very doubtful"]; 
const randomResponse = eightBall[Math.floor(Math.random() * eightBall.length)]; 


