const app = require('fastify')({bodyLimit: 1024*1024});


app.get('/api', (req, res) => {
    res.json({messages: "hi"});
});

app.listen({port:3000}, (err) => {
    if(err) {
        console.log(err.message);
    }
    else {
        console.log("Fastify server running on port 3000");
    }
});