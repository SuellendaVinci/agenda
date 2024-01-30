import { Router } from "express";

import loginRoute from "./login";
import contactsRoutes from "./contacts";
import usersRoutes from "./users";

const routes = Router();

routes.use(loginRoute);
routes.use(contactsRoutes);
routes.use(usersRoutes)

export default routes;
