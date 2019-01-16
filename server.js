// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var mysql = require("mysql")

var connection = mysql.createConnection({
  host: "35.224.5.154",
  port: 3306,
  user: "jfecke",
  password: "",
  database: "hot_restaurant"
});

connection.connect(function(error) {
  if (error) throw error;
  console.log("Connected as ID " + connection.threadId);
})


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000      ;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Array of Table Objects
var tables = [];
var waitlist = [];
var restaurants = [];


// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  
app.get("/tables", function(req, res) {
res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/tables", function(req, res) {
    return res.json(tables);
});

app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist);
});

app.get("/api/restaurants", function(req, res) {
  getRestaurant();
  return res.json(restaurants);
  //connection.end();
});


// Displays a single table, or returns false
app.get("/api/tables/:table", function(req, res) {
    let tableid = req.params.table;

    console.log(tableid);
  
    for (var i = 0; i < tables.length; i++) {
      if (tableid === tables[i].customerID) {
        return res.json(tables[i]);
      }
    }
  
    return res.json(false);
  });

// Create New Table - takes in JSON input
app.post("/api/tables", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    let newtable = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html  
    console.log(newtable);
    if (tables.length > 5) {
        waitlist.push(newtable);
    } else {
        tables.push(newtable);
    } 
    res.json(newtable);
  });

  app.post("/api/clear", function(req, res) {
    tables = [];
    waitlist = [];
    res.json(tables);
  })
  
  // Starts the server to begin listening
  // =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

  function getRestaurant() {
    connection.query("SELECT * FROM restraunts", function(error, results) {
        if (error) throw error;
        restaurants = results;
        for (let i = 0; i < restaurant.length; i++) {
          console.log(restaurant[i]);
          console.log("------------------------")
        }
    })
}