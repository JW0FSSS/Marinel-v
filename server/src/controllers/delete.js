import { DeleteModel } from '../models/delete.js'

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
