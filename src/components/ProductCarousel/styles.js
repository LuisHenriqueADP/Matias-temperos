import styled from 'styled-components';

export const CarouselContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #f8fafc;
  position: relative;
`;

export const CarouselTitle = styled.h2`
  text-align: center;
  color: #175d48;
  font-size: 2.5rem;
  margin-bottom: 3rem;
`;

export const CarouselWrapper = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 50px;
`;

export const CarouselContent = styled.div`
  display: flex;
  gap: 2rem;
  overflow: hidden;
  padding: 1rem;
`;

export const ProductCard = styled.div`
  flex: 0 0 calc(33.333% - 2rem);
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
  z-index: 1;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  background: #f9f9f9;
`;

export const ProductInfo = styled.div`
  padding: 1.5rem;

  h3 {
    color: #175d48;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }

  p {
    color: #4a5568;
    font-size: 0.9rem;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const CarouselButton = styled.button`
  background: #175d48;
  color: white;
  border: none;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  transition: all 0.3s ease;
  padding: 0;

  svg {
    width: 24px;
    height: 24px;
    color: white;
  }

  &.prev {
    left: 0;
  }

  &.next {
    right: 0;
  }

  &:hover {
    background: #1a6b55;
    transform: translateY(-50%) scale(1.1);
  }
`; 