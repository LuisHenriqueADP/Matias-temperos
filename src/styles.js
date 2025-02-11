import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'


export const Logo = styled.img`
  height: 65px;
  width: auto;
`

export const Header = styled.header`
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
