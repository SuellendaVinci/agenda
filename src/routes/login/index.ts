import { Router } from "express";
import { loginController } from "../../controllers";

const loginRoute = Router();

loginRoute.post("/login", loginController);

export default loginRoute;
