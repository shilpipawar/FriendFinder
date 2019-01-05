var path = require("path");

var friends = require("../data/friends.js");
// Your apiRoutes.js file should contain two routes:
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var matchName;
        var matchImage;
        var totalDifference = 100;
        var newfriend = req.body;
        var scores = req.body.arrayScore.split(",");

        console.log(newfriend);
        console.log(scores);
        //Friend Matching Logic
        for (var i = 0; i < friends.length; i++) {
            var total = 0;
            for (var j = 0; j < friends[i].scores.length; j++) {
                total =+ Math.abs(parseInt(friends[i].scores[j]) - parseInt(scores[j]));
                console.log(total);
            };
            if (total < totalDifference) {
				totalDifference = total;
				matchName = friends[i].name;
				matchImage = friends[i].photo;
            }
        };
        console.log(matchName + " matchImage :" + matchImage + " Friend: " + totalDifference);
        friends.push(newfriend);
        res.json({ status: 'OK', matchName, matchImage });
    });
}