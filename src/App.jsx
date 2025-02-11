import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home/Home'
import Produtos from './pages/Produtos/Produtos'
import Fornecedor from './pages/Fornecedor/Fornecedor'
import Produto from './pages/Produto/Produto'
import logoImage from './assets/logo.png'
import { MainWrapper, Header, Logo, GlobalStyle } from './styles'
import { useLocation } from 'react-router-dom'

const HeaderWithBackground = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <Header isHome={isHome}>
      <Logo src={logoImage} alt="Logo da empresa" />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/produtos">Produtos</Link>
        <a href="#contato">Contato</a>
        <Link to="/fornecedor">Seja nosso fornecedor</Link>
      </nav>
    </Header>
  );
};


function App() {
  return (
    <Router>
      <GlobalStyle />
      <MainWrapper>
        <HeaderWithBackground>
          <Logo src={logoImage} alt="Logo da empresa" />
          <nav>
            <Link to="/">Home</Link>
            <Link to="/produtos">Produtos</Link>
            <a href="#contato">Contato</a>
            <Link to="/fornecedor">Seja nosso fornecedor</Link>
          </nav>
        </HeaderWithBackground>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/produtos/:id" element={<Produto />} />
          <Route path="/fornecedor" element={<Fornecedor />} />
        </Routes>
      </MainWrapper>
    </Router>
  )
}

export default App
