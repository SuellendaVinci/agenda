import { Contact } from "../../../entity/Contact";
import { AppDataSource } from "../../../data-source";

const deleteContactController = async (req, res) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contactDelete = await contactRepository.findOne({
    where: {
      id: req.params.id,
    },
    relations: ["user"],
  });

  if (!contactDelete) {
    return res.status(404).json({ error: "Contato inexistente!" });
  }

  if (contactDelete.user.id !== req.userId) {
    return res
      .status(403)
      .json({ error: "Você não tem autorização para excluir este contato!" });
  }

  await contactRepository.delete(contactDelete);

  res.status(204).send();
};

export default deleteContactController;
