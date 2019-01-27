// import orm.js 
var orm = require("../config/orm.js");

// code that calls the ORM functions using burger specific input for the ORM
var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function(data){
            cb(data);
        });
    },

    insertOne: function (col1, col2, val1, val2, cb) {
        orm.insertOne("burgers", col1, col2, val1, val2, function(data) {
            cb(data);
        });
    },

    updateOne: function(col1, val1, val2, cb) {
        orm.updateOne("burgers", col1, val1, val2, function (data){
            cb(data);
        });
    }
};


// export 
module.exports = burger;


