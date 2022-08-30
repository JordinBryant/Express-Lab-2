// require packages/dependencies
const express = require("express");
// const res = require("express/lib/response");

// initialize the express application
const app = express();
const port = 3000;

// define routes
app.get("/:greeting", function(request, response){
    response.send("'Hello, stranger.'");
});

// tell the app to listen on port...
app.listen(3000, function(){
    console.log(`Hello there ${port} `);
})


//Tip Calculator

// define routes
 app.get("/tip/:total?/:tipPercentage?"), function(request, response){
    response.send("'/tip/100/20");
 };

// tell the app to listen on port...
 app.listen(3000, function(){
   console.log(`20 ${port}`);
 })

 
 //Magic 8 Ball


 app.get("/magic/:question", (req, res) => {
    res.send(`
    <h1>${randomResponse}</h1>`)
});

const express = require("express");
const app = express();

const eightBall = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", 
    "You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Yes", "Signs point to yes",
     "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", 
    "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", 
    "Outlook not so good", "Very doubtful"]; //Instantiates the magic eight ball array of responses.
const randomResponse = eightBall[Math.floor(Math.random() * eightBall.length)]; //gets a random number and mataches it to the index of the eightBall array.





// Take one Down and Pass it Around

// Create Route
app.get("/", (req, res) => {
    res.send(`<h3>99 Bottles of beer on the wall</h3>
      <a href ="/98">Take one down, pass it around</a>`);
  });
  app.get("/:numOfBottles", (req, res) => {
    let bottleNumbers = req.params.numOfBottles;
    if (bottleNumbers > 0) {
      res.send(`<h3>${bottleNumbers} Bottles of beer on the wall</h3>
          <a href ="/${bottleNumbers - 1}">Take one down, pass it around</a>`);
    } else {
      res.send(`No more beers! <a href ="/">Please start over</a>`);
    }
  });
  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });





