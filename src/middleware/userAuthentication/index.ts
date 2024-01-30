import jwt from "jsonwebtoken";

const userAuthentication = (req, res, next) => {
  const authorization = req.headers.authorization;

  if (!authorization) {
    return res.status(403).json({ message: "Usuário não autenticado!" });
  }

  const token = authorization.split("Bearer ")[1];

  jwt.verify(token, process.env.PRIVATE_KEY, function (err, decoded) {
    if (err) {
      return res.status(403).json({ message: "Token inválido!" });
    }

    req.userId = decoded.id;
    next();
  });
};

export default userAuthentication;
