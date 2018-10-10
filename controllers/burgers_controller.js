// Imports Express application object
var express = require("express");

// And uses it to get a Router object
var router = express.Router();

// Import the model (burger.js) to use its database functions
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required

// Home page route
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

// Route to insert a new burger
router.post("/", function(req, res) {
    burger.insertOne(req.body.burger_name, function() {
        
        // Redirect to the index page
        res.redirect("/");
    });
});

// Route to update burger once it's devoured
router.put("/:id", function(req, res) {
    var id = req.params.id;

    console.log("id", id);

    burger.updateOne(id, function() {
            
        // Redirect to the index page
        res.redirect("/");
        
    });
});

// Export routes for server.js to use
module.exports = router;
