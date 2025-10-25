const Hapi = require('@hapi/hapi');
const routes = require('../src/routes.js');

const serverPromise = (async () => {
    const server = Hapi.server({
        port: process.env.PORT || 3000,
        host: '0.0.0.0',
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });

    server.route(routes);
    await server.initialize();

    return server;
})();

module.exports = async (req, res) => {
    const server = await serverPromise;
    const request = {
        method: req.method,
        url: req.url,
        payload: req.body,
        headers: req.headers,
    };

    const response = await server.inject(request);

    res.status(response.statusCode).set(response.headers).send(response.payload);
};
