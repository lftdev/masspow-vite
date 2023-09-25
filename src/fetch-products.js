const PRODUCTS = [
  { id: 1, name: 'Protein', variant: 'whey', price: 12, brand: 'Gold Standard', key_name: 'protein-whey-gold_standard', stock: 10 },
  { id: 2, name: 'Creatine', variant: 'monohydrate', price: 20, brand: 'IDN', key_name: 'creatine-monohydrate-idn', stock: 50 },
  { id: 3, name: 'C4 Preworkout', variant: null, price: 10, brand: 'Cellucor', key_name: 'preworkout-c4-cellucor', stock: 20 }
]

const fetchProducts = () => new Promise(resolve => setTimeout(() => resolve(PRODUCTS), 2000))

export default fetchProducts
