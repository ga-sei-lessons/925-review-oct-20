const express = require("express");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

const myApp = {
    listen: function() {
        // listens on a port for incoming http requests
    },
    get: function(url, callback) {
        const request = {
            // information and methods related to the incoming http request
            
        }
        const response = {
            // information and methods related to the outgoing http response
            send: function(thingToSend) {
                // send the passed argument as a http response
            }
        }

        const next = () => {
            // goes to the next defined route when invoekd
        }
        // if we get a http regquest that matches the supllied url
            // pass in the request along with the response to the callback function
        if (request.url === url) {
            callback(request, response, next)
        } 
    }
}

app.use((req, res, next) => {
    // console.log("middleware has been invoked")
    // console.log(req)
    console.log(`incoming request: ${req.method} ${req.url} ${new Date().toLocaleDateString()}`)
    next() // sends us along
})

// callback function -- ??
// invoked by another function

// app.get(string, callback function) -- higher order function
app.get("/", (req, res) => {
    // res.render("file path", { data object })
    res.render("index.ejs", {
        header: "Hello EJS!",
        animals: ["aardvark", "turtle", "cuttlefish", "axelottle", "pig", "cat", "dog"]
    })
})

app.get("/more_animals", (req, res) => {
    res.render("index.ejs", {
        header: "More Animals",
        animals: ["bird", "lion", "snek"]
    })
})

app.listen(PORT, () => console.log(`listening to the smooth sounds of PORT ${PORT} in the morning 🌊`));
