import styled from 'styled-components'

export const ProductsContainer = styled.div`
  padding: 4rem 2rem;
  min-height: 80vh;
  max-width: 1200px;
  margin: 0 auto;

  h1 {
    color: #175d48
  }
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
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 450px;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
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
  padding: 1rem;
  
  h3 {
    color: #175d48;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }

  p {
    color: #666;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  .product-details {
    margin-top: 1rem;
    padding-top: 0.5rem;
    border-top: 1px solid #eee;
  }

  .unit-badge {
    background: #14804c;
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: 500;
    display: inline-block;
    margin-bottom: 0.5rem;
  }

  .price-info {
    p {
      color: #14804c;
      font-weight: 500;
      font-size: 0.9rem;
      margin-bottom: 0.3rem;
    }
  }
`

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 5px;

  span {
    color: #175d48;
    margin: 0 5px;
  }
`;

export const PaginationButton = styled.button`
  background: #175d48;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #14804c;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

/* Estilos para os quadradinhos numerados */
export const PageNumber = styled.button`
  background: ${({ active }) => (active ? '#14804c' : '#f3f3f3')};
  color: ${({ active }) => (active ? '#fff' : '#333')};
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #14804c;
    color: white;
  }
`;