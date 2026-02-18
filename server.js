const ConvertHexToRgb = require('./convert_hex_to_rgb.js')
const express = require("express")
const port = 3000;
const app = express();

/**Root endpoint */
app.get("/", (req, res) => res.send("Reply"))

/**API endpoint for converting hex to rgb*/
app.get('/hex-to-rgb', (req, res) => {
    res.send(ConvertHexToRgb(req.query.hex))
})

if(process.env.NODE_ENV !== "test"){
    app.listen(port, () => {
        console.log(`App listening to port ${port}`)
    })
}

module.exports = app