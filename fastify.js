const app = require('fastify')({ bodyLimit: 1024 * 1024 });

app.get('/api', async (req, reply) => {
    return { messages: "hi" };
});

const start = async () => {
    try {
        await app.listen({
            port: process.env.PORT || 3000,
            host: '0.0.0.0'
        });
        console.log("Fastify server running");
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

start();