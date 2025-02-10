import { useState } from 'react'
import styled from 'styled-components'
import backgroundImage from '../assets/2148211075.jpg'

const HeroContainer = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: top center;
  position: relative;
  min-height: 100vh;
  margin-top: -80px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`

const Hero = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  padding: 2rem;
  padding-left: 10%;
  color: white;
  position: relative;
  z-index: 2;

  h1 {
    max-width: 800px;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
    max-width: 600px;
    margin-bottom: 2rem;
  }
`

const WhatsAppButton = styled.a`
  background-color: #175d48;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 25px;
  font-size: 1.1rem;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background-color: #124a3a;
  }
`

const ContactSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 6rem 2rem;
  min-height: 800px;
  background-color: #f8fafc;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    min-height: auto;
    padding: 4rem 2rem;
  }
`

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  height: calc(100% - 150px);
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  box-sizing: border-box;
`

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
  transition: border-color 0.3s ease;
  background-color: #f8fafc;

  &:focus {
    outline: none;
    border-color: #175d48;
    background-color: white;
  }

  &::placeholder {
    color: #94a3b8;
  }
`

const TextArea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;
  width: 100%;
  resize: vertical;
  transition: border-color 0.3s ease;
  background-color: #f8fafc;
  flex: 1;

  &:focus {
    outline: none;
    border-color: #175d48;
    background-color: white;
  }

  &::placeholder {
    color: #94a3b8;
  }
`

const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 8px;
  overflow: hidden;
`

const AboutSection = styled.section`
  padding: 4rem 2rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);
  text-align: center;
`

const ContactText = styled.div`
  margin-bottom: 2rem;
  
  h2 {
    color: #175d48;
    font-weight: 700;
    margin-bottom: 1rem;
    font-size: 2.2rem;
  }

  p {
    color: #4a5568;
    line-height: 1.8;
    font-size: 1.1rem;
  }
`

const MapText = styled.div`
  margin-bottom: 2rem;
  text-align: left;
  
  h2 {
    color: #175d48;
    font-weight: 700;
    margin-bottom: 1.5rem;
    font-size: 2.2rem;
  }

  p {
    color: #4a5568;
    line-height: 1.8;
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }

  .contact-info {
    margin-top: 1.5rem;
    
    h3 {
      color: #175d48;
      font-weight: 600;
      margin-bottom: 0.5rem;
      font-size: 1.3rem;
    }

    p {
      margin-bottom: 1rem;
      font-size: 1.1rem;
    }
  }
`

function Home() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Dados do formulário:', formData)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <>
      <HeroContainer>
        <Hero>
          <h1>Matias Comércio de Especiarias, Ervas e Temperos</h1>
          <p>A maior distribuidora de temperos e ervas do Brejo Paraibano.</p>
          <WhatsAppButton 
            href="https://api.whatsapp.com/send/?phone=5583982196369&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contate-nos
          </WhatsAppButton>
        </Hero>
      </HeroContainer>

      <AboutSection id="sobre">
        <h2>Sobre Nós</h2>
        <p>Somos uma empresa dedicada a criar soluções digitais incríveis.</p>
      </AboutSection>

      <ContactSection id="contato">
        <div>
          <ContactText>
            <h2>Fale Conosco - Estamos aqui para atender você!</h2>
            <p>
              Preencha o formulário abaixo e deixe-nos saber como podemos ajudar. 
              Sua mensagem é importante para nós, e nossa equipe está pronta para 
              responder prontamente às suas necessidades e perguntas.
            </p>
          </ContactText>
          <ContactForm onSubmit={handleSubmit}>
            <Input
              type="text"
              name="nome"
              placeholder="Seu Nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Seu Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextArea
              name="mensagem"
              placeholder="Sua Mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              required
            />
            <WhatsAppButton 
              href="https://api.whatsapp.com/send/?phone=5583982196369&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enviar Mensagem
            </WhatsAppButton>
          </ContactForm>
        </div>

        <div>
          <MapText>
            <h2>CONTATO</h2>
            <p>
              Estamos disponíveis de diversas maneiras. Escolha a opção que mais se adequa a você e fique à vontade para nos ligar, 
              enviar um e-mail, nos contatar via WhatsApp, ou nos fazer uma visita no endereço abaixo.
            </p>
            <div className="contact-info">
              <h3>Endereço:</h3>
              <p>Av. Padre Inácio de Almeida, 171 - Bairro Novo, Guarabira - PB, 58200-000</p>
              
              <h3>Telefone:</h3>
              <p>(83) 9 8219-6369</p>
              
              <h3>Telefone:</h3>
              <p>(83) 9 8780-2712</p>
              
              <h3>E-mail:</h3>
              <p>Comercialmatias1@gmail.com</p>
            </div>
          </MapText>
          <MapContainer>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.1705462779387!2d-46.65390908449991!3d-23.563272167596592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0x63b9f0e3703cb8b4!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1647891512345!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </MapContainer>
        </div>
      </ContactSection>
    </>
  )
}

export default Home 