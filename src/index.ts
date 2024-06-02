import express, {Request, Response} from "express";

const app = express();
const prom = express.json(),
port = process.env.PORT || 3000;

app.use(prom);


app.get('/', (req: Request, res: Response) => {
    res.send('Hello Samurai!');
});

app.get('/prod', (req: Request, res: Response) => {
    res.json([{id: 0, title: "bolt"}, {id: 1, title: "gaika"}]);
});

app.listen(port, () => {
    console.log("Server port: " + port);
});
