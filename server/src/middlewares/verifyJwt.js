import jwt from 'jsonwebtoken'

export async function Jwtverify (req, res, next) {
  try {
    const { authorization } = req.headers
    const token = authorization.split(' ')[1]

    const payload = await jwt.verify(token, process.env.KEY)
    const { id } = payload
    req.jwt = id
    next()
  } catch (error) {
    const newerror= new Error('token invalido')
    newerror.status=300
    res.json({newerror})
  }
}
