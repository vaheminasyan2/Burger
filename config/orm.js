// require connection.js
var connection = require("../config/connection.js")

// create methods that will execute MySQL commands in the controllers
var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "Select * from ??";
        //console.log(queryString);
        connection.query(queryString, tableInput, function(err,result){
            if (err) throw err;
            cb(result);
        });
    },

    insertOne: function (tableInput, col1, col2, val1, val2, cb) {
        var queryString = "Insert into ?? (??, ??) values ('?', ?)";
        //console.log(queryString);
        connection.query(queryString, [tableInput, col1, col2, val1, val2], function (err, result){
            if (err) throw err;
            cb(result);
        });
    },

    updateOne: function (tableInput, col1, val1, val2, cb) {
        var queryString = "Update ?? set ?? = ? where id = ?";
        //console.log(queryString);
        connection.query(queryString, [tableInput, col1, val1, val2], function(err,  result){
            if (err) throw err;
            cb(result);
        });
    }
};

// export the orm object in module.exports
module.exports = orm;
