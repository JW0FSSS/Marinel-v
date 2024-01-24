export async function register({user}) {

  const result = await fetch(`http://localhost:3000/register`, {
    method:'post',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({...user})
  })
  
  const data = await result.json();
  
  return data
}