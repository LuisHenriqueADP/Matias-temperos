import { useParams } from 'react-router-dom'
import { produtos } from '../../data/produtos'
import { ProdutoContainer, ProdutoImage, ProdutoInfo, SolicitarOrcamentoButton } from './styles'
import Footer from '../../components/Footer'

function Produto() {
  const { id } = useParams()
  const produto = produtos.find(p => p.id === Number(id))

  if (!produto) {
    return <ProdutoContainer>Produto não encontrado</ProdutoContainer>
  }

  return (
    <>
      <ProdutoContainer>
        <ProdutoImage 
          src={produto.image} 
          alt={produto.name}
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/400x300/f3f4f6/175d48?text=${produto.name}`
          }}
        />
        <ProdutoInfo>
          <h1>{produto.name}</h1>
          <p>{produto.description}</p>
          <SolicitarOrcamentoButton 
            href="https://api.whatsapp.com/send/?phone=5583982196369&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Solicitar Orçamento
          </SolicitarOrcamentoButton>
        </ProdutoInfo>
      </ProdutoContainer>
      <Footer />
    </>
  )
}

export default Produto 