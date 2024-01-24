export async function favoriteAll({user}) {
    
    const result = await fetch(`http://localhost:3000/favorite`, {
      method:'post',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({user_id:user._id})
    })
        const data = await result.json();

        return data
}
export async function favoriteAdd({user_id,product_id}) {
    
    const result = await fetch(`http://localhost:3000/favorite/add`, {
      method:'post',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({user_id,product_id})
    })
        const data = await result.json();

        return data
}
