const express = require("express");
const app = express();


app.use(express.json());

// const check = (req, res, next) => {
//     console.log(req.method, req.url);
//     next();
// }

app.get('/api', (req, res) => {
    res.json({message: "HI"});
})

app.listen(3000, (err) => {
    if(err) {
        console.log(err.message);
    }
    else {
        console.log("Server started on port 3000");
    }
})