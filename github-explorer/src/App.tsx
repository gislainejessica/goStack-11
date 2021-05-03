import Routes from './routes'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './styles/Global'

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </>
)

export default App;
