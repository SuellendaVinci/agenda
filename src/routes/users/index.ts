import { Router } from "express";
import { registerUserController, updateUserController } from "../../controllers";
import { userAuthentication } from "../../middleware";
import deleteUserController from "../../controllers/usersControllers/deleteUserController";

const usersRoutes = Router();

usersRoutes.post("/users", registerUserController);

usersRoutes.put("/users", userAuthentication, updateUserController);

usersRoutes.delete("/users", userAuthentication, deleteUserController);

export default usersRoutes;
