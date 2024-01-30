import express from "express";
import routes from "./routes";
import "reflect-metadata";
import { AppDataSource } from "./data-source";

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use("/api", routes);

app.listen(PORT, () => {

  console.log(process.env.SALTROUNDS);

  AppDataSource.initialize()
    .then(() => {
        console.log("banco de dados funcionando!");
    })
    .catch((error) => console.log(error))

  console.log(`Server is running on port ${PORT}`);
});

export default app;