import экспресс, { Request, Response } from 'express'
import { productsRouter } from './routers/products-router';

const app = экспресс()
const port = process.env.PORT || 5000

const parserMiddleware = экспресс.json()
app.use(parserMiddleware)


app.get('/', (req: Request, res: Response) => {
  res.send('Hello Samurai')
})

app.use('/products', productsRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

