import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import config from '../config/config'

export const authRequired = (req: Request, res: Response, next: NextFunction): void => {
  console.log(req.headers)
  const { token } = req.cookies

  if (token == null) res.status(401).json({ message: 'No token' })
  jwt.verify(token, config.jwtSecret, (err: any, decoded: any) => {
    if (err != null) return res.status(401).json({ message: 'Invalid User' })
    console.log(decoded)
    next()
    return res.status(200).json({ message: 'Que todo anda bien' })
  })
}
