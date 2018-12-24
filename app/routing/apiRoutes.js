var path = require("path");

var friends = require("../data/friends.js");
var totalDifference = [];
var total;
var match_name;
var match_image;
// Your apiRoutes.js file should contain two routes:
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var newfriend = req.body;

        // Using a RegEx Pattern to remove spaces from newCharacter
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();

        console.log(newfriend);
        //Friend Matching Logic
        for (var i = 0; i < friends.length; i++) {
            for (var j = 0; j < friends[i].scores.length; j++) {
                var temp = parseInt(friends[i].scores[j]) - parseInt(newfriend[j]);
                total = + temp;
                totalDifference.push(total)
            };
            totalDifference.push(total);
            if(totalDifference.length > 1){
                for(var t = 0; t < totalDifference.length; t++){
                    var temp = totalDifference[t];
                    if(temp > totalDifference[t+1]){
                        match_name = friends[i].name;
                        match_image = friends[i].photo;
                        console.log(match_name + "match_image" + match_image);
                    }
                };
            };
        };

        friends.push(newfriend);
        console.log(match_name + "match_image" + match_image + "Friend" + totalDifference);

        res.json({status: 'OK',match_name,match_image});
    });
}