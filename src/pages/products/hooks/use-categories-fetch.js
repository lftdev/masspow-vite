import { useEffect, useState } from 'react'
import fetchCategories from '../../../services/fetch-categories'

export default function useCategoriesFetch () {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    fetchCategories().then(response => setCategories(response))
  }, [])

  return categories
}
