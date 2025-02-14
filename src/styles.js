import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'


export const Logo = styled.img`
  height: 60px;
  width: auto;
  
  @media (max-width: 768px) {
    height: 40px;
  }
`

export const Header = styled.header`
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 10;
  width: 100%;
  top: 0;
  left: 0;
  box-sizing: border-box;
  background-color: ${({ isHome }) => (isHome ? "transparent" : "#333")};

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

export const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  a {
    color: white;
    font-size: 1.1rem;
    font-weight: 500;
    text-decoration: none;
    
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

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(51, 51, 51, 0.98);
    padding: 5rem 2rem;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    z-index: 9;
    
    a {
      width: 100%;
      text-align: center;
      font-size: 1.5rem;
      padding: 1rem;
      margin: 0;
      transition: all 0.3s ease;
      
      &:hover {
        transform: scale(1.1);
      }
      
      &:last-child {
        margin: 0;
        width: auto;
        min-width: 200px;
      }
    }
  }
`

export const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.8rem;
  cursor: pointer;
  padding: 0.5rem;
  position: relative;
  z-index: 10;
  
  @media (max-width: 768px) {
    display: block;
  }
`

export const MainWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  width: 100%;
`

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
`


