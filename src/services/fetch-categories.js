const categories = [
  { id: 1, name: 'proteins' },
  { id: 2, name: 'creatines' },
  { id: 3, name: 'preworkouts' }
]

const fetchCategories = () =>
  new Promise(resolve => setTimeout(() => resolve(categories), 2000))

export default fetchCategories
