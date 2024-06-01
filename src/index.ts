import express, {Request, Response} from "express";

export const app = express();
const prom = express.json(),
port = process.env.PORT || 3000;

app.use(prom);


app.get('/', (req: Request, res: Response) => {
    res.send('Hello Samurai!');
});

app.listen(port, () => {
    console.log("Server port: " + port);
});
