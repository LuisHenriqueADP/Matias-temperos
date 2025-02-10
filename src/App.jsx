import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import Home from './pages/Home'
import Produtos from './pages/Produtos'
import Fornecedor from './pages/Fornecedor'
import logoImage from './assets/WhatsApp_Image_2025-01-09_at_13.29.47__1_-removebg-preview.png'

const Logo = styled.img`
  height: 65px;
  width: auto;
`

const Header = styled.header`
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 10;
  height: 80px;
  width: 100%;
  top: 0;
  left: 0;
  box-sizing: border-box;

  h2, nav {
    position: relative;
    z-index: 2;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 2rem;

    a {
      color: white;
      font-size: 1.1rem;
      font-weight: 500;
      
      &:hover {
        color: #e2e8f0;
      }

      &:last-child {
        background-color: #175d48;
        padding: 0.8rem 1.5rem;
        border-radius: 25px;
        margin-left: 1rem;

        &:hover {
          background-color: #124a3a;
          color: white;
        }
      }
    }
  }
`

const MainWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  width: 100%;
`

function App() {
  return (
    <Router>
      <MainWrapper>
        <Header>
          <Logo src={logoImage} alt="Logo da empresa" />
          <nav>
            <Link to="/">Home</Link>
            <Link to="/produtos">Produtos</Link>
            <a href="#contato">Contato</a>
            <Link to="/fornecedor">Seja nosso fornecedor</Link>
          </nav>
        </Header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/fornecedor" element={<Fornecedor />} />
        </Routes>
      </MainWrapper>
    </Router>
  )
}

export default App
