const express = require("express")
const app = express();
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended: true}));
app.post("/", function(req, res) {
    var listthings = req.body.list
    list.push(listthings)
    res.redirect("/");
});


var list = []


app.set('view engine', 'ejs');





app.get("/", function(req, res) {
    var today = new Date();
    var currentDay = today.getDay();
    var day = ""; //empty string 
    // if (currentDay === 6 || currentDay === 0){
    //     day = "weekend";
    //  } else{
    //     day = "weekday";
    //     }
    // days = ["sunday", "monday",  "tuesday", "wednesday", "thursday", "friday","saturday"]
    // day = days[currentDay]

    var options = {
        weekday: "long",
        day: "numberic",
        month: "long"
    };

    res.render('list', {
        kindOfDay: day,
        newListItem: list
    });

});



app.listen(3000, function() {
    console.log("server is running on port 3000")
})