import экспресс, {Response} from "express";
/*import {ЗапросСПарами, ЗапросСТелом, ЗапросСВопросом, ЗапросСПарамиИТелом} from "./типы";
import {типВидео, МодельВидаВидео, МодельЗапросаВидео, МодельУИРПарамовИдВидео, МодельСозданияВидео, МодельОбновленияВидео} from "./схемы";
import {провВводаСозданияВидео, провВводаОбновленияВидео} from "./проверка";
import {бдВвид} from "./конвертер";*/

export const пр = экспресс(); // Определение экспресс приложения
const промежПОтелаЗОДС = экспресс.json(),
//МП = "127.0.0.1", // Адрес межсетевого протокола (МП)
порт = process.env.PORT || 3e3/*, // Порт, прослушиваемый сервером
бд: {видео: типВидео[]} = {
    видео: [
        {
            ид: 0,
            название: "Электрон",
            автор: "Ландау",
            можноСкачать: true,
            минВозрастноеОграничение: null,
            созданВ: "2024-05-27T17:30:34.279Z",
            датаПубликации: "2024-05-27T17:30:34.279Z",
            доступныеРазрешения: ["P144"]
        }, {
            ид: 1,
            название: "Протон",
            автор: "Ландау",
            можноСкачать: true,
            минВозрастноеОграничение: 12,
            созданВ: "2024-05-27T17:30:34.279Z",
            датаПубликации: "2024-05-27T17:30:34.279Z",
            доступныеРазрешения: ["P144", "P240"]
        }, {
            ид: 2,
            название: "Нейтрон",
            автор: "Ландау",
            можноСкачать: true,
            минВозрастноеОграничение: 16,
            созданВ: "2024-05-27T17:30:34.279Z",
            датаПубликации: "2024-05-27T17:30:34.279Z",
            доступныеРазрешения: ["P144", "P240", "P360"]
        }, {
            ид: 3,
            название: "Фотон",
            автор: "Ландау",
            можноСкачать: false,
            минВозрастноеОграничение: 18,
            созданВ: "2024-05-27T17:30:34.279Z",
            датаПубликации: "2024-05-27T17:30:34.279Z",
            доступныеРазрешения: ["P144", "P240", "P360", "P480"]
        }
    ] // Задание массива видео
}; // Объявление базы данных

export const путь = {
    //осн: encodeURI("/hometask_01/api"),
    видео: encodeURI("/videos"),
    тест: encodeURI("/testing/all-data")
}*/;
//путь.видео = путь.осн + путь.видео;
//путь.тест = путь.осн + путь.тест;

пр.use(промежПОтелаЗОДС);


пр.get('/', (запр, отв: Response) => {
    отв.send('Hello Samurai!');
});

/*пр.get(путь.видео, (запр: ЗапросСВопросом<МодельЗапросаВидео>, отв: Response<МодельВидаВидео[]>) => {
    var найдВидео = бд.видео;
    if(запр.query.title) найдВидео = найдВидео.filter(в => в.название.indexOf(запр.query.title) > -1);

    отв.json(найдВидео.map(бдВвид));
});

пр.get(путь.видео + "/:id", (запр: ЗапросСПарами<МодельУИРПарамовИдВидео>, отв: Response<МодельВидаВидео>) => {
    const найдВидео = бд.видео.find(в => в.ид === +запр.params.id);

    if(!найдВидео) {
        отв.sendStatus(404);
        return 404;
    }

    отв.json(бдВвид(найдВидео));
});

пр.post(путь.видео, (запр: ЗапросСТелом<МодельСозданияВидео>, отв: Response<МодельВидаВидео>) => {
    if(провВводаСозданияВидео(запр.body, отв)) return 400;

    const датаСоздания: number = +(new Date());
    const добВидео: типВидео = {
        ид: бд.видео.length ? бд.видео[бд.видео.length - 1].ид + 1 : 0,
        название: запр.body.title,
        автор: запр.body.author,
        можноСкачать: false,
        минВозрастноеОграничение: null,
        созданВ: new Date(датаСоздания).toISOString(),
        датаПубликации: new Date(датаСоздания + 864e5).toISOString(),
        доступныеРазрешения: запр.body.availableResolutions
    };

    бд.видео.push(добВидео);

    отв.status(201).json(бдВвид(добВидео));
});

пр.delete(путь.видео + "/:id", (запр: ЗапросСПарами<МодельУИРПарамовИдВидео>, отв: Response) => {
    const найдВидео = бд.видео.find(в => в.ид === +запр.params.id);

    if(!найдВидео) {
        отв.sendStatus(404);
        return 404;
    }

    бд.видео = бд.видео.filter(в => в.ид !== +запр.params.id);

    отв.sendStatus(204);
});

пр.put(путь.видео + "/:id", (запр: ЗапросСПарамиИТелом<МодельУИРПарамовИдВидео, МодельОбновленияВидео>, отв: Response) => {
    if(провВводаОбновленияВидео(запр.body, отв)) return 400;

    const найдВидео = бд.видео.find(в => в.ид === +запр.params.id);

    if(!найдВидео) {
        отв.sendStatus(404);
        return 404;
    }

    найдВидео.название = запр.body.title;
    найдВидео.автор = запр.body.author;
    найдВидео.можноСкачать = запр.body.canBeDownloaded;
    найдВидео.минВозрастноеОграничение = запр.body.minAgeRestriction;
    найдВидео.датаПубликации = new Date(запр.body.publicationDate).toISOString();
    найдВидео.доступныеРазрешения = запр.body.availableResolutions;

    отв.sendStatus(204);
});

пр.delete(путь.тест, (запр, отв: Response) => {
    бд.видео = [];

    отв.sendStatus(204);
});*/

пр.listen(порт, () => {
    console.log("Сервер доступен по адресу " + "МП" + " и случшает порт " + порт);
});
