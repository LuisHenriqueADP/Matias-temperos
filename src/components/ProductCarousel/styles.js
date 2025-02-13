import styled from 'styled-components';

export const CarouselContainer = styled.section`
  padding: 4rem 2rem;
  background: #f9fafb;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const CarouselTitle = styled.h2`
  text-align: center;
  color: #175d48;
  margin-bottom: 2rem;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const CarouselWrapper = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
`;

export const CarouselContent = styled.div`
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 1rem;
  justify-content: center;

  @media (max-width: 1024px) {
    gap: 1rem;
  }

  @media (max-width: 768px) {
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    padding: 0.5rem;
  }
`;

export const ProductCard = styled.div`
  flex: 0 0 calc(33.333% - 1.33rem);
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  @media (max-width: 1024px) {
    flex: 0 0 calc(50% - 1rem);
  }

  @media (max-width: 768px) {
    flex: 0 0 85%;
    scroll-snap-align: center;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
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
  text-align: center;

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
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(23, 93, 72, 0.8);
  color: white;
  border: none;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease, transform 0.3s ease;

  &.prev {
    left: 10px;
  }

  &.next {
    right: 10px;
  }

  &:hover {
    background: rgba(23, 93, 72, 1);
    transform: translateY(-50%) scale(1.1);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const NavigationButtons = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
  }
`;
