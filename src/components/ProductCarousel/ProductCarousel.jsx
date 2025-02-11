import { useState } from 'react';
import { produtos } from '../../data/produtos';
import { useNavigate } from 'react-router-dom';
import {
  CarouselContainer,
  CarouselTitle,
  CarouselWrapper,
  ProductCard,
  ProductImage,
  ProductInfo,
  CarouselButton,
  CarouselContent
} from './styles';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const productsPerView = 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + productsPerView >= produtos.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? produtos.length - productsPerView : prevIndex - 1
    );
  };

  const handleCardClick = (id) => {
    navigate(`/produtos/${id}`);
  };

  const visibleProducts = produtos.slice(currentIndex, currentIndex + productsPerView);

  return (
    <CarouselContainer>
      <CarouselTitle>NOSSOS PRODUTOS</CarouselTitle>
      <CarouselWrapper>
        <CarouselButton onClick={prevSlide} className="prev">
          <FaChevronLeft />
        </CarouselButton>
        <CarouselContent>
          {visibleProducts.map((produto) => (
            <ProductCard
              key={produto.id}
              onClick={() => handleCardClick(produto.id)}
            >
              <ProductImage
                src={produto.image}
                alt={produto.name}
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/280x200/f3f4f6/175d48?text=${produto.name}`;
                }}
              />
              <ProductInfo>
                <h3>{produto.name}</h3>
                <p>{produto.description}</p>
              </ProductInfo>
            </ProductCard>
          ))}
        </CarouselContent>
        <CarouselButton onClick={nextSlide} className="next">
          <FaChevronRight />
        </CarouselButton>
      </CarouselWrapper>
    </CarouselContainer>
  );
}

export default ProductCarousel; 