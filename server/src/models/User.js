import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { User } from "../schemas/user.js"

export async function Profilemodel (id) {
    try {
      const user = await User.findById({_id:id}).select('username age email image')
      if (!user) return { error: 'Usuario no encontrado' }
      return { user }
    } catch (error) {
      return new Error(`error : ${error}`)
    }
  }

  export async function NameModel ({ id, newName }) {
    try {
      const user = await User.findById({_id:id})
      if (!user) return { id, error: 'Usuario no encontrado' }
  
      user.username = newName
      await user.save()
      return user
    } catch (error) {
      return { error: 'Usuario no encontrado' }
    }
  }

  export async function DeleteModel ({ id, password }) {
    try {
      const user = await User.findById({_id:id})
      if (!user) return { id, error: 'Usuario no encontrado' }
  
      const verify = await bcrypt.compare(password, user.password)
  
      if (!verify) return { id, error: 'Contraseña incorrecta' }
  
      await user.deleteOne()
      return { message: 'usuario eliminado' }
    } catch (error) {
      return { error: 'Usuario no encontrado' }
    }
  }

export async function PasswordModel ({ id, newPassword, password }) {
    try {
      const user = await User.findById({_id:id})
  
      if (!user) return { error: 'Usuario no encontrado' }
        
      const verify = await bcrypt.compare(password, user.password)
  
      if (!verify) return { error: 'Contraseña incorrecta' }

      const newpassword = await bcrypt.hash(newPassword, process.env.SALT)

      user.password = newpassword

      await user.save()

      return user
      
    } catch (error) {
      return { error: 'Usuario no encontrado' }
    }
  }

  export async function EmailModel ({ id, newEmail }) {
    try {
      const user = await User.findById({_id:id})
      if (!user) return { error: 'Usuario no encontrado' }
  
      user.email = newEmail
      await user.save()
      return { message: 'update succesfully' }
    } catch (error) {
      return { error: 'Usuario no encontrado' }
    }
  }
  

export async function LoginModel ({ password, email }) {
    try {
      const user = await User.findOne({email})
      
      if (!user) return { error: 'Usuario o contraseña incorrecta' }

      const verify = await bcrypt.compare(password, user.password)
      
      if (!verify) return { error: 'Usuario o contraseña incorrecta' }

      const token = await jwt.sign({ id: user._id }, process.env.KEY, { algorithm: 'HS256', expiresIn: '1h' })

      return  {token,user}

    } catch (error) {
        
      return new Error(`error : ${error}`)
    }
  }