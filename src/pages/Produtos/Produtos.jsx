import { useNavigate } from 'react-router-dom'
import { ProductsContainer, ProductsGrid, ProductCard, ProductImage, ProductInfo } from './styles'
import { produtos } from '../../data/produtos'
import Footer from '../../components/Footer'

function Produtos() {
  const navigate = useNavigate()

  const handleCardClick = (id) => {
    navigate(`/produtos/${id}`)
  }

  return (
    <>
      <ProductsContainer>
        <h1>Nossos Produtos</h1>
        <ProductsGrid>
          {produtos.map((produto) => (
            <ProductCard 
              key={produto.id}
              onClick={() => handleCardClick(produto.id)}
              style={{ cursor: 'pointer' }}
            >
              <ProductImage 
                src={produto.image} 
                alt={produto.name}
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/280x200/f3f4f6/175d48?text=${produto.name}`
                }}
              />
              <ProductInfo>
                <h3>{produto.name}</h3>
                <p>{produto.description}</p>
              </ProductInfo>
            </ProductCard>
          ))}
        </ProductsGrid>
      </ProductsContainer>
      <Footer />
    </>
  )
}

export default Produtos 