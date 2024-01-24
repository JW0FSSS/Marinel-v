import bcrypt from 'bcrypt'
import { User } from '../schemas/user.js'


export async function RegisterModel ({ password, email, username,age,image }) {
  try {
    const user = await User.findOne({email})
    
    if (user) return { error: 'El correo esta en uso' }
    
    const newPassword = await bcrypt.hash(password, 10)
    
    image==''?'':image
    
    const newUser = new User({
      username,
      password : newPassword,
      email,
      age,
      image,
    })
    
    
    await newUser.save()
    
    return newUser

  } catch (error) {

    throw new Error(`error: ${error}`)
  }
}
