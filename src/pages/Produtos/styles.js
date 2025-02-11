import styled from 'styled-components'

export const ProductsContainer = styled.div`
  padding: 4rem 2rem;
  min-height: 80vh;
  max-width: 1200px;
  margin: 0 auto;
`

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
  place-items: start;
`

export const ProductCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 450px;
`

export const ProductImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  background: #f9f9f9;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`

export const ProductInfo = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;

  h3 {
    color: #175d48;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }

  p {
    color: #4a5568;
    font-size: 0.9rem;
    line-height: 1.4;
    margin-bottom: 0;
  }
`
