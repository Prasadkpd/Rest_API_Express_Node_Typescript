import { createUserSchema } from './schema/user.schema';
import { Express } from "express";
import { createUserHandler } from "./controller/user.controller";
import validateResource from "./middleware/validateResource";

export default function (app: Express) {
    app.get("/healthcheck", (req, res) => res.sendStatus(200));

    // Register user
    // POST /api/user
    app.post("/api/users", validateResource(createUserSchema) ,createUserHandler)

    // Login
    // POST /api/session

    // Get the user's session
    // GET /api/sessions

    // Logout
    // DELETE /api/sessions


};
