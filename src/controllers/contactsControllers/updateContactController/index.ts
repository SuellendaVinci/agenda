import { AppDataSource } from "../../../data-source";
import { Contact } from "../../../entity/Contact";

const updateContactController = async (req, res) => {
  const { body, params } = req;

  const contactName = req.body.name;
  const contactCellphone = req.body.cellphone;

  const contactRepository = AppDataSource.getRepository(Contact);

  const contactUpdate = await contactRepository.findOne({
    where: {
      id: req.params.id,
    },
    relations: ["user"],
  });

  if(!contactUpdate) {
    return res.status(404).json({error: "Contato não encontrado!"})
  }

  if (contactUpdate.user.id !== req.userId) {
    return res.status(403).json({error: "Você não tem permissão para alterar os dados deste contato!"})
  }
  
  if (contactName) {
    contactUpdate.name = contactName;
  }

  if (contactCellphone) {
    contactUpdate.cellphone = contactCellphone;
  }

  await contactRepository.save(contactUpdate);

  res.status(200).json({
    message: "Contato atualizado com sucesso!",
  });
};

export default updateContactController;
