import styled from 'styled-components'

export const ProdutoContainer = styled.div`
  padding: 10rem 2rem 4rem;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 6rem 1rem;
  }
`

export const ProdutoImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: contain;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;

  @media (max-width: 768px) {
    height: auto;
    max-height: 400px;
    margin-top: 3rem;
  }
`

export const ProdutoInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-top: 1rem;

  h1 {
    color: #175d48;
    margin-bottom: 1rem;
    font-size: 2rem;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  p {
    color: #4a5568;
    line-height: 1.6;
    font-size: 1.1rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`

export const SolicitarOrcamentoButton = styled.a`
  background: #175d48;
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  text-align: center;
  font-weight: bold;
  margin-top: 2rem;
  transition: background 0.3s ease;
  width: fit-content;

  &:hover {
    background: #1a6b55;
  }

  @media (max-width: 768px) {
    width: 90%;
    text-align: center;
    padding: 1rem;
  }`