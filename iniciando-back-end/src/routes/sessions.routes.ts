import { Router } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService'

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  try {
    const { password, email } = request.body

    const authenticateUser = new AuthenticateUserService()

    const { user } = await authenticateUser.execute({ email, password })

    return response.json({ user })

  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default sessionsRouter;
