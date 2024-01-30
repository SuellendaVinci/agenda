import { Contact } from "./../../../entity/Contact";
import { AppDataSource } from "../../../data-source";
import { User } from "../../../entity/User";

const listContactsController = async (req, res) => {
  const userRepository = AppDataSource.getRepository(User);
  const foundUser = await userRepository.findOneBy({
    id: req.userId,
  });

  const contactsRepository = AppDataSource.getRepository(Contact);
  const foundContacts = await contactsRepository.find({
    where: { user: foundUser },
  });

  res.json(foundContacts);
};

export default listContactsController;
