import { User } from "../../../entity/User";
import { AppDataSource } from "../../../data-source";

const deleteUserController = async (req, res) => {

    const userRepository = AppDataSource.getRepository(User);

    const userDelete = await userRepository.findOneBy({
        id: req.userId
    });

    await userRepository.delete(userDelete);

    res.status(204).send();

}

export default deleteUserController;