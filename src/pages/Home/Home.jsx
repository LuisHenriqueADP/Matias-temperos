import { useState } from 'react'
import { WhatsAppButton, HeroContainer, Hero, AboutSection, ContactSection, ContactText, ContactForm, Input, TextArea, MapText, MapContainer, ContactContainer } from './styles'
import Footer from '../../components/Footer'


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
      </ContactContainer>
      <Footer/>
    </>
  )
}

export default Home 