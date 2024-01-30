import { AppDataSource } from "../../../data-source"; //conexao com o banco de dados
import { User } from "../../../entity/User";

const updateUserController = async (req, res) => {
    const username = req.body.username;

    const userRepository = AppDataSource.getRepository(User);

    const userUpdate = await userRepository.findOneBy({
        id: req.userId
    });

    if(username) {
        userUpdate.name = username
    }
    
    await userRepository.save(userUpdate);

    res.status(200).json({message: "Usuário atualizado!"})
}

export default updateUserController;