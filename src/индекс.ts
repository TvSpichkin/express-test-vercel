import экспресс, { Request, Response } from 'express'
import { productsRouter } from './routers/products-router';

const пр = экспресс()
const port = process.env.PORT || 3000

const parserMiddleware = экспресс.json()
пр.use(parserMiddleware)


пр.get('/', (req: Request, res: Response) => {
  res.send('Hello Samurai')
})

пр.use('/products', productsRouter)

пр.listen(port, () => {
  console.log(`Пример app listening on port ${port}`)
})

