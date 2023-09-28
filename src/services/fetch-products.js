const PRODUCTS = [
  { id: 1, name: 'Protein', variant: 'whey', price: 12, brand: 'Gold Standard', key_name: 'protein-whey-gold_standard', stock: 10, category: 'proteins', description: 'Milk whey has the most complete type of protein. It has essential amino acids that your body needs to different biological processes, including, of course, muscles building.' },
  { id: 2, name: 'Creatine', variant: 'monohydrate', price: 20, brand: 'IDN', key_name: 'creatine-monohydrate-idn', stock: 50, category: 'creatines', description: 'After a few weeks consuming it, creatine will help you increase your strength and your muscles recovery.' },
  { id: 3, name: 'C4 Preworkout', variant: null, price: 10, brand: 'Cellucor', key_name: 'preworkout-c4-cellucor', stock: 20, category: 'preworkouts', description: 'Improves your strength, resistance and your general performance for a training session.' }
]

export const fetchProducts = () => new Promise(resolve => setTimeout(() => resolve(PRODUCTS), 2000))

export async function getProductById (id) {
  try {
    const products = await fetchProducts()
    return products.find(product => product.id === id)
  } catch (error) {
    console.log('Error occurred while getting product by ID.', error)
  }
}
