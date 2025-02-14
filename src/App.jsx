import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home/Home'
import Produtos from './pages/Produtos/Produtos'
import Fornecedor from './pages/Fornecedor/Fornecedor'
import Produto from './pages/Produto/Produto'
import logoImage from './assets/logo_correcao.png'
import { MainWrapper, Header, Logo, NavMenu, HamburgerButton, GlobalStyle } from './styles'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const HeaderWithBackground = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Header isHome={isHome}>
      <Logo src={logoImage} alt="Logo da empresa" />
      <HamburgerButton onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </HamburgerButton>
      <NavMenu isOpen={isMenuOpen}>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
        <Link to="/produtos" onClick={() => setIsMenuOpen(false)}>Produtos</Link>
        <a href="#contato" onClick={() => setIsMenuOpen(false)}>Contato</a>
        <Link to="/fornecedor" onClick={() => setIsMenuOpen(false)}>
          Seja nosso fornecedor
        </Link>
      </NavMenu>
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
