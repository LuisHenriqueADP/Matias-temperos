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
  }

  @media (max-width: 768px) {
    padding: 1rem;
    flex-direction: column;
    height: auto;
    
    nav {
      margin-top: 1rem;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
      
      a {
        font-size: 1rem;
        
        &:last-child {
          margin-left: 0;
          width: 100%;
          text-align: center;
        }
      }
    }
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


