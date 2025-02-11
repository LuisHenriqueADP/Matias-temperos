import { useState } from 'react';
import { TestimonialsContainer, TestimonialsContent, TestimonialSlider, TestimonialCard, SliderButton, NavigationButtons } from './styles';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: "Lourival Manoel",
    image: "/images/avatar1.jpg",
    text: "Excelente atendimento produtos de alta qualidade atendimento sensacional"
  },
  {
    id: 2,
    name: "Tânia Mara Pinheiro Machado",
    image: "/images/avatar2.jpg",
    text: "Atendimento de primeira e produtos de excelente qualidade. Preço compatível com o mercado. Minha primeira opção de compra sempre."
  },
  {
    id: 3,
    name: "Gutiérrez Vargas",
    image: "/images/avatar3.jpg",
    text: "Excelente atendimento Ótimos preços Recomendo"
  },
  {
    id: 4,
    name: "Maria Silva",
    image: "/images/avatar4.jpg",
    text: "Produtos frescos e de alta qualidade. O atendimento é sempre muito profissional e atencioso. Recomendo fortemente!"
  },
  {
    id: 5,
    name: "João Santos",
    image: "/images/avatar5.jpg",
    text: "Encontrei todos os temperos que precisava para meu restaurante. Preços justos e entrega sempre no prazo."
  },
  {
    id: 6,
    name: "Ana Costa",
    image: "/images/avatar6.jpg",
    text: "Empresa séria e comprometida com a qualidade. Os produtos são sempre frescos e o atendimento é excepcional."
  },
  {
    id: 7,
    name: "Pedro Oliveira",
    image: "/images/avatar7.jpg",
    text: "Melhor fornecedor de temperos da região. Qualidade incomparável e preços competitivos."
  },
  {
    id: 8,
    name: "Carla Rodrigues",
    image: "/images/avatar8.jpg",
    text: "Ótima variedade de produtos e atendimento sempre cordial. Nunca tive problemas com entregas."
  }
];

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