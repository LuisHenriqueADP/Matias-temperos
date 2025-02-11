import { useState } from 'react';
import { TestimonialsContainer, TestimonialsContent, TestimonialSlider, TestimonialCard, SliderButton, NavigationButtons } from './styles';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { testimonials } from '../../data/testimonials';

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <TestimonialsContainer>
      <TestimonialsContent>
        <h2>O que nossos clientes falam sobre nossa empresa</h2>
        <p>Testemunhos reais destacam a qualidade dos nossos serviços e o impacto positivo que temos na vida dos nossos parceiros.</p>
        
        <TestimonialSlider>
          {testimonials.map((testimonial) => (
            <TestimonialCard 
              key={testimonial.id}
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: 'transform 0.5s ease-in-out'
              }}
            >
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                onError={(e) => {
                  e.target.src = `https://ui-avatars.com/api/?name=${testimonial.name}&background=175d48&color=fff`
                }}
              />
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={20} />
                ))}
              </div>
              <h3>{testimonial.name}</h3>
              <p>{testimonial.text}</p>
            </TestimonialCard>
          ))}
        </TestimonialSlider>

        <NavigationButtons>
          <SliderButton type="button" onClick={prevSlide}>
            <FaChevronLeft style={{ fontSize: '24px' }} />
          </SliderButton>
          <SliderButton type="button" onClick={nextSlide}>
            <FaChevronRight style={{ fontSize: '24px' }} />
          </SliderButton>
        </NavigationButtons>
      </TestimonialsContent>
    </TestimonialsContainer>
  );
}

export default Testimonials; 