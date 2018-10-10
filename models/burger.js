var orm = require("../config/orm.js");

// Burger object that will call ORM functions
var burger = {
    selectAll: function(cb) {
        orm.selectAll(function(res) {
            cb(res);
        });
    },
    insertOne: function(burger, cb) {
        orm.insertOne(burger, function(res) {
            cb(res);
        });
    },
    updateOne: function(id, cb) {
        orm.updateOne([id], function(res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (burgers_controller.js) 
module.exports = burger;