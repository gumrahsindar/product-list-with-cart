export type Dessert = {
  image: {
    thumbnail: string
    mobile: string
    tablet: string
    desktop: string
  }
  name: string
  category: string
  price: number
}

export type TCartItem = Dessert & {
  quantity: number
}
