import { DeleteModel,EmailModel,LoginModel,NameModel,PasswordModel,Profilemodel } from '../models/User.js'
import { RegisterModel } from '../models/register.js'

export async function ProfileController (req, res) {
  try {
    const id = req.jwt
    const user  = await Profilemodel(id)
    res.json(user )
  } catch (error) {
    res.status(300).send('ERROR')
  }
}

export async function DeleteController (req, res) {
    try {
      const id = req.jwt
      const { password } = req.body
  
      const user = await DeleteModel({ id, password })
  
      res.json({ user })
    } catch (error) {
      res.status(300).send('ERROR')
    }
  }

  
export async function EmailController (req, res) {
    try {
      const id = req.jwt
      const { newEmail } = req.body
  
      const { message } = await EmailModel({ id, newEmail })
  
      res.json({ message })
    } catch (error) {
      res.status(300).send('ERROR')
    }
  }

export async function LoginController (req, res) {
    try {
      const { password,email } = req.body
      const  user  = await LoginModel({password,email})
      res.json(user)
    } catch (error) {
      res.status(300).send('ERROR')
    }
  }

export async function NameController (req, res) {
    try {
      const id = req.jwt
      const { newName } = req.body
  
      const user = await NameModel({ id, newName })
  
      res.json({ user })
    } catch (error) {
      res.status(300).send('ERROR')
    }
  }

export async function RegisterController (req, res) {
  try {
    const { email, password, username,age,image } = req.body
    
    const user = await RegisterModel({ email, password, username,age,image })

    return res.json( user )
  } catch (error) {
    return new Error(`error : ${error}`)
  }
}

export async function PasswordController (req, res) {
    try {
      const id = req.jwt
      const { oldPassword, newPassword } = req.body
  
      const user = await PasswordModel({ id, newPassword, oldPassword })
  
      res.json({ user })
    } catch (error) {
      res.status(300).send('ERROR')
    }
  }