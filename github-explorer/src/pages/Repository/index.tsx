import React, { useEffect, useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import { useRouteMatch, Link } from 'react-router-dom'
import { Header, RepositoryInfo, Issues } from './styles';

import Logo from '../../assets/logo.svg'
import api from '../../services/api'

interface RepositoryParams {
  repository: string
}


interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  }
}

interface Issue {
  id: string;
  title: string;
  html_url: string;
  user: {
    login: string;
  }
}


const Repositories: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>()
  const [repository, setRepository] = useState<Repository | null>(null)
  const [issues, setIssues] = useState<Issue[]>([])

  useEffect(() => {
    api.get(`repos/${params.repository}`).then((reponse) => {
      setRepository(reponse.data)
    })

    api.get(`repos/${params.repository}/issues`).then((reponse) => {
      setIssues(reponse.data)
    })

    // async function loadData(): Promise<void> {
    //   const [repository, issues] = await Promise.all([
    //     api.get(`repos/${params.repository}`),
    //     api.get(`repos/${params.repository}/issues`)
    //   ])
    // }

    // loadData()
  }, [params.repository])

  return (
    <>
      <Header>
        <img src={Logo} alt="Logo" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      {repository && (

        <RepositoryInfo>
          <header>
            <img src={repository.owner.avatar_url} alt={repository.owner.login} />
            <div>
              <strong> {repository.full_name} </strong>
              <p> {repository.description} </p>
            </div>
          </header>

          <ul>
            <li>
              <strong> {repository.stargazers_count}</strong>
              <span> Stars </span>
            </li>
            <li>
              <strong> {repository.forks_count} </strong>
              <span> Forks </span>
            </li>
            <li>
              <strong> {repository.open_issues_count} </strong>
              <span> Issues abertas</span>
            </li>
          </ul>
        </RepositoryInfo>

      )}
      <Issues>
        {issues.map(issue => (
          <a
            key={issue.id}
            href={issue.html_url}>

            <div>
              <strong>{issue.title}</strong>
              <p> {issue.user.login} </p>
            </div>

            <FiChevronRight size={28} />
          </a>
        ))}
      </Issues>
    </>
  );
}

export default Repositories;