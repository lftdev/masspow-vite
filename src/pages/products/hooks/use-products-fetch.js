import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { useEffect, useState } from 'react'

export default function useProductsFetch (id) {
  const [productById, setProductById] = useState()
  const [productsList, setProductsList] = useState([])

  useEffect(() => {
    async function fetchProducts () {
      try {
        const query = await getDocs(collection(getFirestore(), 'Products'))
        const list = []
        query.forEach(doc => list.push(doc.data()))

        if (id != null) setProductById(list.find(item => item.id === id))
        setProductsList(list)
      } catch (error) {
        console.error('Error occurred on products fetch.', error)
      }
    }

    fetchProducts()
  }, [])

  return {
    productById,
    productsList
  }
}
