import { useState } from 'react'
import { WhatsAppButton, HeroContainer, Hero, AboutSection, ContactSection, ContactText, ContactForm, Input, TextArea, MapText, MapContainer, ContactContainer } from './styles'
import Footer from '../../components/Footer'
import Testimonials from '../../components/Testimonials/Testimonials'


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
      <Testimonials />
      <ContactContainer>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.342401686088!2d-35.49327292426145!3d-6.849495467009947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7adb6a66a55705b%3A0xa4ab9e6afeec4005!2sAv.%20Padre%20In%C3%A1cio%20de%20Almeida%2C%20171%20-%20Bairro%20Novo%2C%20Guarabira%20-%20PB%2C%2058200-000!5e0!3m2!1spt-BR!2sbr!4v1739296434291!5m2!1spt-BR!2sbr"
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
      </ContactContainer>
      <Footer/>
    </>
  )
}

export default Home 