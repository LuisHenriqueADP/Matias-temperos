import { useState } from 'react'
import { FornecedorContainer, FornecedorForm, Input, TextArea, SubmitBtn, FornecedorText } from './styles'
import Footer from '../../components/Footer'

function Fornecedor() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cnpj: '',
    mensagem: ''
  })

  const formatCNPJ = (value) => {

    const cnpj = value.replace(/\D/g, '')
    
    return cnpj
      .replace(/^(\d{2})(\d)/, '$1.$2')
      .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
      .replace(/\.(\d{3})(\d)/, '.$1/$2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .slice(0, 18) 
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    
    if (name === 'cnpj') {
      setFormData(prev => ({
        ...prev,
        [name]: formatCNPJ(value)
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.nome && formData.email && formData.cnpj && formData.mensagem) {
      handleEmail(formData)
    }
  }

  const handleEmail = ({email, nome, cnpj, mensagem}) => {
    const subject = `Contato de Fornecedor - ${email}`;
    const body = `Nome: ${nome}%0D%0AEmail: ${email}%0D%0ACNPJ: ${cnpj}%0D%0A%0D%0A${mensagem.replace(/\n/g, "%0D%0A")}`;
  
    window.location.href = `mailto:comercialmatias1@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <FornecedorContainer>
        <FornecedorText>
          <h1>Seja Nosso Fornecedor</h1>
          <p>
            Junte-se à nossa rede de fornecedores e faça parte de uma empresa comprometida 
            com a qualidade e excelência em temperos e especiarias. Preencha o formulário 
            abaixo e entraremos em contato.
          </p>
        </FornecedorText>
        
        <FornecedorForm onSubmit={handleSubmit}>
          <Input
            type="text"
            name="nome"
            placeholder="Nome da Empresa"
            value={formData.nome}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Email Comercial"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="cnpj"
            placeholder="CNPJ (XX.XXX.XXX/XXXX-XX)"
            value={formData.cnpj}
            onChange={handleChange}
            maxLength={18}
            required
          />
          <TextArea
            name="mensagem"
            placeholder="Descreva seus produtos e serviços"
            value={formData.mensagem}
            onChange={handleChange}
            required
          />
          <SubmitBtn type="submit">
            Enviar Proposta
          </SubmitBtn>
        </FornecedorForm>
      </FornecedorContainer>
      <Footer />
    </>
  )
}

export default Fornecedor 