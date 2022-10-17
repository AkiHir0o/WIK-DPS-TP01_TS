"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/ping', (req, res) => {
    return res.status(200).json(req.headers);
});
app.get('*', (req, res) => {
    return res.status(404).json({ message: "NOT FOUND" });
});
const port = process.env.PING_LISTEN_PORT || 3000;
app.listen(port, () => {
    console.log(`The application is listening on port ${port}!`);
});
