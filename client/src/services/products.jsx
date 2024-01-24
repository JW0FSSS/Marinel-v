
export async function getProducts(limit=0) {

    const result = await fetch(`http://localhost:3000/products?limit=${limit}`, {
            headers: {
              "Content-Type": "application/json",
            }})
      
            const data = await result.json();
            const {product}=data
            return product
}