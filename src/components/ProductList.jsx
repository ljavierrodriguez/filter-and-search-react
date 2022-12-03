const ProductList = ({ orderBy, search, products }) => (
    <ul className="list-group my-3">
        {
            products
                .filter((product) => product.name.toLowerCase().includes(search.toLowerCase()))
                .sort((p1, p2) => p1[orderBy] > p2[orderBy] ? 1 : -1)
                .map((product) => {
                    return (
                        <li className="list-group-item">
                            Name: {product.name} - Price: {product.price} - Category: {product.category}
                        </li>
                    )
                })
        }
    </ul>
)

export default ProductList;