
// accesing products array of object
export default function Product({product}) { // product is a object
    console.log(product);
    return (
        <div>
            <h2>Products:{product.name}</h2>
            <p>Product Price:{product.price}</p>
        </div>
    )

}