import { useEffect, useState } from 'react'
import { fetchProducts } from '../../../services/fetch-products'

export default function useProductsFetch () {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetchProducts().then(res => setProducts(res))
  }, [])

  return products
}
