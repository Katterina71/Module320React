import ProductCategory from "./ProductCategory"
import ProductRow from "./ProductRow"



function ProductTable({ products }) {

    let rows = []
    let lastCategory = null

    products.forEach((product) => {
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategory
                    key={product.category}
                    category={product.category}
                /> 
            )
        }
        rows.push(
            <ProductRow 
                key={product.name}
                product={product}
            />
        )
        lastCategory = product.category
    })

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

export default ProductTable