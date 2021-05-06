import { getRepository } from 'typeorm'
import User from '../models/User'
import { hash } from 'bcryptjs'

interface Reaquest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: Reaquest): Promise<User> {
    const usersRepository = await getRepository(User)

    const checkUserExists = await usersRepository.findOne({
      where: { email }
    })

    if (checkUserExists) {
      throw new Error('Email address already used')
    }
    const hashedPassword = await hash(password, 8)

    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword,
    })
    await usersRepository.save(user)

    return user
  }
}

export default CreateUserService