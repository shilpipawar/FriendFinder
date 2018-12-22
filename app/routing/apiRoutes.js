// Your apiRoutes.js file should contain two routes:

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
app.get("/api/friends", function (req, res) {
    return res.json(friends);
});

// A POST routes /api/friends. This will be used to handle incoming survey results. 
//This route will also be used to handle the compatibility logic.
// Create New friends - takes in JSON input
app.post("/api/friends", function (req, res) {
    var newfriend = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();
    
    console.log(newfriend);
  
    characters.push(newfriend);
  
    res.json(newfriend);
});