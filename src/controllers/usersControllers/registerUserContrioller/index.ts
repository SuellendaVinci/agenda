import { User } from "../../../entity/User";
import { AppDataSource } from "../../../data-source";
import bcrypt from "bcrypt";

const registerUserController = async (req, res) => {
  const { body } = req;

  const user = new User();
  user.name = body.username;

  bcrypt.genSalt(Number(process.env.SALTROUNDS), function (err, salt) {
    bcrypt.hash(body.password, salt, async function (err, hash) {
      user.password = hash;

      await AppDataSource.manager.save(user);

      res.status(201).json({
        message: "Olá, usuários!",
      });
    });
  });
};

export default registerUserController;
