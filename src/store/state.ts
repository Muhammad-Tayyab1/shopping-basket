import { ProductItem } from '../global'

const INITIAL_STATE: ProductItem[] = [
  {
    id: '123',
    title: 'HELLCAT Boys t-shirt',
    description: 'No fancy sizing charts here, one t-shirt size to rule them all',
    imageUrl: '/pic1.jpg',
    price: 399
  },
  {
    id: '456',
    title: 'DMDM PIG Luminous Short Sleeves  t-shirt',
    description:
      'This unique t-shirt is guaranteed to fit nobody, not even new born babies',
    imageUrl: '/pic2.webp',
    price: 499
  },
  {
    id: '749',
    title: 'Blue t-shirt',
    description: 'The only product on our site that might actually be worth buying',
    imageUrl: '/blue-tshirt.png',
    price: 899
  },
  {
    id: '719',
    title: 'Red t-shirt',
    description: 'The only product on our site that might actually be worth buying',
    imageUrl: '/red-tshirt.png',
    price: 999
  },

  {
    id: '289',
    title: 'orange t-shirt',
    description: 'The only product on our site that might actually be worth buying',
    imageUrl: '/pic2.webp',
    price: 799
  }
]

export { INITIAL_STATE }