
export async function getCategories(limit=0) {

    const result = await fetch(`http://localhost:3000/category?limit=${limit}`, {
            headers: {
              "Content-Type": "application/json",
            }})
      
            const data = await result.json();
            const {category}=data
            return category
}