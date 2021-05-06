import { getRepository } from 'typeorm'
import User from '../models/User'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: User,
  token: string
}

class AuthenticateUserService {
  public async execute({ email, password }: Request): Promise<Response> {
    const usersRepository = await getRepository(User)

    const user = await usersRepository.findOne({
      where: { email }
    })

    if (!user) {
      throw new Error('Incorrect password/email combination')
    }

    const passwordMatched = await compare(password, user.password)

    if (!passwordMatched) {
      throw new Error('Incorrect password/email combination')
    }

    const token = sign({}, '72b302bf297a228a75730123efef7c41', {
      subject: user.id,
      expiresIn: '1d'
    })

    return { user, token }
  }
}

export default AuthenticateUserService
