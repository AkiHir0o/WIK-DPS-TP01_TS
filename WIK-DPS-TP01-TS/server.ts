'use strict';

import Hapi from "@hapi/hapi";
import { Server } from "@hapi/hapi";

export let server: Server;

export const init = async function(): Promise<Server> {
    server = Hapi.server({
        port: process.env.PORT || 4000,
        host: '127.0.0.1'
    });

    server.route([
        {
            method: "GET",
            path: "/ping",
            handler: (request: Hapi.Request, h: Hapi.ResponseToolkit) => {
                return h.response(request.headers).code(200)
            }
        },
        {
            method: '*',
            path: '/{any*}',
            handler: function (request, h) {
                return h.response().code(404)
            }
        }
    ])

    return server;
};

export const start = async function (): Promise<void> {
    console.log(`Listening on ${server.settings.host}:${server.settings.port}`);
    return server.start();
};

process.on('unhandledRejection', (err) => {
    console.error("unhandledRejection");
    console.error(err);
    process.exit(1);
});