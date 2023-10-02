const getProductKeyName = ({ name, brand }) => `${name}-${brand}`.toLowerCase().replace(/ /g, '_')

export default getProductKeyName
