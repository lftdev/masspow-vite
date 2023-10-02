import { useEffect, useState } from 'react'
import { getProductById } from '../../../services/fetch-products'

export default function useProductFetchById (id) {
  const [product, setProduct] = useState()
  useEffect(() => {
    getProductById(parseInt(id)).then(response => setProduct(response))
  }, [])

  return product
}
