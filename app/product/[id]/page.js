// When you add an API, fetch product data here using the id param
// and pass it down to ProductDetail as props

import ProductDetail from './ProductDetail/ProductDetail'

// ── Demo data — replace this with your API call later
const getProduct = (id) => ({
  id,
  name: 'Embroidered Lawn Suit',
  category: 'Suits',
  price: 8500,
  description:
    'A beautifully handcrafted embroidered lawn suit made by skilled Pakistani artisans. This piece combines traditional craftsmanship with modern elegance, featuring intricate threadwork and premium quality fabric that ensures both comfort and style.',
  rating: 4,
  reviewCount: 24,
  images: ['/suit.png', '/suit.png', '/suit.png', '/suit.png'],
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  colors: ['#c8a97e', '#2c2c2c', '#8b5e3c', '#ffffff'],
})

export default function ProductPage({ params }) {
  const product = getProduct(params.id)

  return <ProductDetail product={product} />
}
