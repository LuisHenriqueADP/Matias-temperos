import styled from 'styled-components'

export const FornecedorContainer = styled.div`
  padding: 8rem 2rem 4rem;
  min-height: 80vh;
  max-width: 800px;
  margin: 0 auto;
`

export const FornecedorText = styled.div`
  margin-bottom: 2rem;
  text-align: center;
  
  h1 {
    color: #175d48;
    margin-bottom: 1rem;
  }

  p {
    color: #4a5568;
    line-height: 1.8;
    font-size: 1.1rem;
  }
`

export const FornecedorForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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

  &:focus {
    outline: none;
    border-color: #175d48;
    background-color: white;
  }

  &::placeholder {
    color: #94a3b8;
  }
`

export const SubmitBtn = styled.button`
  background-color: #175d48;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #124a3a;
  } 
`