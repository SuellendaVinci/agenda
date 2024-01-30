import bcrypt from "bcrypt";
import { User } from "../../entity/User";
import { AppDataSource } from "../../data-source";
import jwt from "jsonwebtoken";

const loginController = async (req, res) => {
  const { body } = req;

  const userRepository = AppDataSource.getRepository(User);

  const userFound = await userRepository.findOneBy({ name: body.username });

  if (!userFound) {
    return res.status(404).json({ error: "usuário ou senha inválida" });
  }

  bcrypt.compare(body.password, userFound.password, (err, result) => {
    if (!result) {
      return res.status(404).json({ error: "usuário ou senha inválida" });
    }

    const token = jwt.sign(
      { id: userFound.id, name: userFound.name },
      process.env.PRIVATE_KEY
    );

    return res.json({
      id: userFound.id,
      name: userFound.name,
      token,
    });
  });
};

export default loginController;
