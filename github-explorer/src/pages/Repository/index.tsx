import React from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import { useRouteMatch, Link } from 'react-router-dom'
import { Header, RepositoryInfo, Issues } from './styles';

import Logo from '../../assets/logo.svg'

interface RepositoryParams {
  repository: string
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>()

  return (
    <>
      <Header>
        <img src={Logo} alt="Logo" />
        <Link to="/dashboard">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src="https://avatars.githubusercontent.com/u/69631?s=200&v=4" alt="Logo" />
          <div>
            <strong> rocketseat/unform</strong>
            <p> Descriçãp do repo </p>
          </div>
        </header>

        <ul>
          <li>
            <strong> 211 </strong>
            <span> Stars </span>
          </li>
          <li>
            <strong> 1 </strong>
            <span> Forks </span>
          </li>
          <li>
            <strong> 22 </strong>
            <span> Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link
          key={''}
          to={``}>

          <div>
            <strong>repository.full_name</strong>
            <p> repository.description </p>
          </div>

          <FiChevronRight size={28} />
        </Link>
      </Issues>
    </>
  );
}

export default Repository;