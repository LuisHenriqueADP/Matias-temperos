import styled from 'styled-components'
import backgroundImage from '../../assets/2148211075.jpg'

export const HeroContainer = styled.div`
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

export const Hero = styled.section`
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

export const WhatsAppButton = styled.a`
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

export const ContactSection = styled.section`
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

export const ContactForm = styled.form`
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

export const Input = styled.input`
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

export const TextArea = styled.textarea`
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

export const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 8px;
  overflow: hidden;
`

export const AboutSection = styled.section`
  padding: 2rem 1rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);
  text-align: center;
  height: 100vh;
`

export const ContactText = styled.div`
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

export const MapText = styled.div`
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
export const ContactContainer = styled.div`
  padding: 2rem 2rem;
`