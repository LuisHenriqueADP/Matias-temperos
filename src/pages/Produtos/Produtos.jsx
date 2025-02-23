import { useNavigate } from 'react-router-dom'
import { ProductsContainer, ProductsGrid, ProductCard, ProductImage, ProductInfo, PaginationContainer, PaginationButton,  PageNumber } from './styles'
import { produtos } from '../../data/produtos'
import Footer from '../../components/Footer'
import { useState } from 'react'

function Produtos() {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const handleCardClick = (id) => {
    navigate(`/produtos/${id}`)
  }

  const indexLastProduct = currentPage * productsPerPage;
  const indexFirstProduct = indexLastProduct - productsPerPage;
  const produtosPaginaAtual = produtos.slice(indexFirstProduct, indexLastProduct);

  const totalPages = Math.ceil(produtos.length / productsPerPage);

  return (
    <>
      <ProductsContainer>
        <h1>Nossos Produtos</h1>
        <ProductsGrid>
          {produtosPaginaAtual.map((produto) => (
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
                <div className="product-details">
                  <span className="unit-badge">{produto.unidade}</span>
                  <div className="price-info">
                    <p>Preço/Kg: {produto.precoKg}</p>
                    <p>Preço/Fardo: {produto.precoFardo}</p>
                  </div>
                </div>
              </ProductInfo>
            </ProductCard>
          ))}
        </ProductsGrid>

        <PaginationContainer>
          <PaginationButton 
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Anterior
          </PaginationButton>
          
          {(() => {
            const pageWindow = [];
            let startPage = Math.max(1, currentPage - 1);
            let endPage = Math.min(startPage + 2, totalPages);
            
            if (endPage - startPage < 2) {
              startPage = Math.max(1, endPage - 2);
            }

            for (let i = startPage; i <= endPage; i++) {
              pageWindow.push(
                <PageNumber 
                  key={i} 
                  active={currentPage === i}
                  onClick={() => setCurrentPage(i)}
                >
                  {i}
                </PageNumber>
              );
            }

            return (
              <>
                {startPage > 1 && (
                  <>
                    <PageNumber onClick={() => setCurrentPage(1)}>1</PageNumber>
                    {startPage > 2 && <span>...</span>}
                  </>
                )}
                {pageWindow}
                {endPage < totalPages && (
                  <>
                    {endPage < totalPages - 1 && <span>...</span>}
                    <PageNumber onClick={() => setCurrentPage(totalPages)}>
                      {totalPages}
                    </PageNumber>
                  </>
                )}
              </>
            );
          })()}
          
          <PaginationButton 
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Próxima
          </PaginationButton>
        </PaginationContainer>
      </ProductsContainer>
      <Footer />
    </>
  )
}

export default Produtos 