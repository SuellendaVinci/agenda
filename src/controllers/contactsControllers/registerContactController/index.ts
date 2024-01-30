import { AppDataSource } from "../../../data-source"; //banco de dados
import { User } from "../../../entity/User";
import { Contact } from "../../../entity/Contact";

const registerContactController = async (req, res) => {
  const { body } = req;

  const userRepository = AppDataSource.getRepository(User);
  const foundUser = await userRepository.findOneBy({
    id: req.userId,
  });

  const contactRepository = AppDataSource.getRepository(Contact);

  const contact = new Contact();
  contact.name = req.body.name;
  contact.cellphone = req.body.cellphone;
  contact.user = foundUser;

  await contactRepository.save(contact);

  res.status(201).json(contact);
};

export default registerContactController;
