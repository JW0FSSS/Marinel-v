export async function account({userData}) {
    
    const result = await fetch(`http://localhost:3000/account`, {
            method:'post',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({...userData})
          })
          const data = await result.json();
            
            return data
}

export async function profile({token}) {
    const result = await fetch(`http://localhost:3000/account/profile`, {
            headers: {
              "Content-Type": "application/json",
              "Authorization":`Beare ${token}`
            }
          })
          const data = await result.json();

            return data
        }