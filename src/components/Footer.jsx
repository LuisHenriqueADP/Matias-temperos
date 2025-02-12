import { FooterContainer, FooterSection, Logo, Column, SocialIcons, Copyright, Newsletter } from "./styles";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import logoImage from "../assets/logo.png"; 

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <Column>
          <Logo src={logoImage} alt="Logo da Empresa" />
          <Newsletter>
            <div>
              <p>Receba em primeira mão as novidades e promoções, diretamente em seu e-mail.</p>
            </div>
            <div style={{ display: "flex" }}>
              <input type="email" placeholder="Digite seu e-mail" />
            <button>→</button>
            </div>
          </Newsletter>
        </Column>

        <Column>
          <h3>NAVEGAÇÃO</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/produtos">Produtos</a></li>
            <li><a href="/contato">Fale Conosco</a></li>
          </ul>
        </Column>

        <Column>
          <h3>INSTITUCIONAL</h3>
          <ul>
            <li><a href="/termos">Termos de Uso</a></li>
            <li><a href="/privacidade">Política de Privacidade</a></li>
          </ul>
        </Column>

        <Column>
          <h3>CONTATO</h3>
          <p>(83) 98219-6369</p>
          <p>(83) 98780-2712</p>
          <p>Comercialmatias1@gmail.com</p>
          <SocialIcons>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebook /></a>
          </SocialIcons>
        </Column>
      </FooterSection>

      <Copyright>
        <p>© 2025 Empresa. Todos os direitos reservados.</p>
        <p>CNPJ: 00.000.000/0001-00 - Rua Exemplo, 222 - Guarabira, PB</p>
        <a href="#"><FaWhatsapp className="whatsapp-icon" /></a>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
