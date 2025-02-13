import styled from 'styled-components';

export const TestimonialsContainer = styled.section`
  padding: 4rem 2rem;
  background-image: url('/images/temperos-de-cozinha.jpeg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
  }
`;

export const TestimonialsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;

  h2 {
    color: #ffffff;
    margin-bottom: 2rem;
    font-size: 2rem;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  p {
    color: #ffffff;
    margin-bottom: 3rem;
    font-size: 1rem;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;

export const TestimonialSlider = styled.div`
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 1rem;
  margin-bottom: 2rem;
  justify-content: center;
  
  @media (max-width: 768px) {
    gap: 1rem;
    padding: 0.5rem;
  }
`;

export const NavigationButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  z-index: 2;
  position: relative;
`;

export const SliderButton = styled.button`
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
    left: 10px;
  }

  &.next {
    right: 10px;
  }

  &:hover {
    background: #1a6b55;
    transform: translateY(-50%) scale(1.1);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const TestimonialCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  min-width: 300px;
  max-width: 400px;
  flex: 1;
  backdrop-filter: blur(5px);
  text-align: center;

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-bottom: 1rem;
    border: 3px solid #175d48;
  }

  .stars {
    color: #ffd700;
    margin-bottom: 1rem;
  }

  h3 {
    color: #175d48;
    margin-bottom: 0.5rem;
  }

  p {
    color: #4a5568;
    font-size: 0.9rem;
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    min-width: 260px;
  }
`;
