import {Express} from "express";

export default function (app: Express) {
    app.get("/healthcheck", (req, res) => res.sendStatus(200))

    // Register user
    // POST /api/user

    // Login
    // POST /api/session

    // Get the user's session
    // GET /api/sessions

    // Logout
    // DELETE /api/sessions


};
