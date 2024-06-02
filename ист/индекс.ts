import экспресс, {Request, Response} from "express";

const пр = экспресс();
const промежПОтелаЗОДС = экспресс.json(),
порт = process.env.PORT || 3000;

пр.use(промежПОтелаЗОДС);


пр.get('/', (запр: Request, отв: Response) => {
    отв.send('Hello Samurai!!');
});

пр.get('/prod', (запр: Request, отв: Response) => {
    отв.json([{id: 0, title: "болт"}, {id: 1, title: "гайка"}]);
});

пр.listen(порт, () => {
    console.log("Сервер доступен по адресу " + "МП" + " и случшает порт " + порт);
});
