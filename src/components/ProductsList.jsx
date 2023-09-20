import ProductPreview from './ProductPreview'

export default function ProductsList (props) {
  const { list } = props
  return list.map(product => (
    <ProductPreview product={product} key={product.id} />
  ))
}
