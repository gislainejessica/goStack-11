import React from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { Container, Title, Form, Repositories } from './styles'
import Logo from '../../assets/logo.svg'

const Dashboard: React.FC = () => {
  return (
    <Container>
      <img src={Logo} alt="Logo" />
      <Title> Dashboard </Title>
      <Form>
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="submit">
          Buscar
        </button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/11761077?v=4"
            alt="Gislaine Jéssica "
          />
          <div>
            <strong>gislainejessica/jogodavelha</strong>
            <p> A melhor forma de fazer um repositório </p>
          </div>

          <FiChevronRight size={28} />
        </a>

        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/11761077?v=4"
            alt="Gislaine Jéssica "
          />
          <div>
            <strong>gislainejessica/jogodavelha</strong>
            <p> A melhor forma de fazer um repositório </p>
          </div>

          <FiChevronRight size={28} />
        </a>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/11761077?v=4"
            alt="Gislaine Jéssica "
          />
          <div>
            <strong>gislainejessica/jogodavelha</strong>
            <p> A melhor forma de fazer um repositório </p>
          </div>

          <FiChevronRight size={28} />
        </a>
      </Repositories>
    </Container>
  );
}

export default Dashboard;