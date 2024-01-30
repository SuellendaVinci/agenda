import { Router } from "express";
import { deleteContactController, listContactsController, registerContactController, updateContactController } from "../../controllers";
import { userAuthentication } from "../../middleware";

const contactsRoutes = Router();

contactsRoutes.post("/contacts", userAuthentication, registerContactController);

contactsRoutes.put("/contacts/:id", userAuthentication, updateContactController);

contactsRoutes.get("/contacts", userAuthentication, listContactsController);

contactsRoutes.delete("/contacts/:id", userAuthentication, deleteContactController);

export default contactsRoutes;
