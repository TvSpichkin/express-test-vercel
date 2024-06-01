type ProductType = {
  название: string
  ид: string
}

let products: ProductType[] = [{ид: '1', название: 'помидор'}, {ид: '2', название: 'апельсин'}, {ид: '3', название: 'банан'}]

export const productsRepository = {
  getProducts(): ProductType[] {
    return products
  },
    createProduct(название: string): ProductType | null {
        if(!название.trim()) {
      return null
    }

    const newProduct: ProductType = {
      название,
      ид: Date.now().toString()
    }
    products.unshift(newProduct)
    return newProduct
  },
}
