export type ProductsType = {
  name: string,
  price: number,
  composition: string,
  image: string
}

export const products: ProductsType[] = [
  {
    name: 'Капучино',
    price: 1,
    composition: 'coffee, milk, water',
    image: 'images/cardsGallery/1.webp'
  },
  {
    name: 'Латте',
    price: 2,
    composition: 'coffee, milk, water',
    image: 'images/cardsGallery/2.webp'
  },
  {
    name: 'Раф',
    price: 3,
    composition: 'coffee, milk, water',
    image: 'images/cardsGallery/3.webp'
  },
  {
    name: 'Американо',
    price: 4,
    composition: 'coffee, milk, water',
    image: 'images/cardsGallery/4.webp'
  },
  {
    name: 'Американо с молоком',
    price: 5,
    composition: 'coffee, milk, water',
    image: 'images/cardsGallery/5.webp'
  },
  {
    name: 'Флэт-уайт',
    price: 6,
    composition: 'coffee, milk, water',
    image: 'images/cardsGallery/6.webp'
  },
  {
    name: 'Чай с лимоном',
    price: 7,
    composition: 'Чай, лимон, вода',
    image: 'images/cardsGallery/7.webp'
  },
  {
    name: 'Цветочный чай',
    price: 8,
    composition: 'Чай, заварка, вода',
    image: 'images/cardsGallery/8.webp'
  },
]