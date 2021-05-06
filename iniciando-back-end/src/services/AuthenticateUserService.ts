import { getRepository } from 'typeorm'
import User from '../models/User'
import { compare } from 'bcryptjs'

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: User
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
    // @ts-ignore
    delete user.password

    return { user }
  }
}

export default AuthenticateUserService
