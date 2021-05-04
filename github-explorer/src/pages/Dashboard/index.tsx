import React, { useState, FormEvent } from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { Container, Title, Form, Repositories } from './styles'
import Logo from '../../assets/logo.svg'

import api from '../../services/api'


interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('')
  const [repositories, setRepositories] = useState<Repository[]>([])

  async function handleAddRepositories(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault()

    const response = await api.get<Repository>(`repos/${newRepo}`)

    const repository = response.data

    setRepositories([...repositories, repository])

    setNewRepo('')

  }

  return (
    <Container>
      <img src={Logo} alt="Logo" />
      <Title> Dashboard </Title>
      <Form onSubmit={handleAddRepositories}>
        <input
          type="text"
          placeholder="Digite o nome do repositório"
          onChange={(e) => setNewRepo(e.target.value)}
        />
        <button type="submit">
          Buscar
        </button>
      </Form>

      <Repositories>
        {repositories.map(repository => (
          <a key={repository.full_name} href="teste">
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p> {repository.description} </p>
            </div>

            <FiChevronRight size={28} />
          </a>
        ))}

      </Repositories>
    </Container>
  );
}

export default Dashboard;