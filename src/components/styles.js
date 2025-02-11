import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #111;
  color: white;
  padding: 40px 20px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  height: 40vh;
`;

export const FooterSection = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: auto auto;
  gap: 30px;
`;

export const Column = styled.div`
  flex: 1;
  min-width: 200px;

  h3 {
    font-size: 16px;
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 8px;
  }

  a {
    color: white;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const Logo = styled.img`
  width: 150px;
  margin-bottom: 20px;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  font-size: 20px;
  margin-top: 10px;

  a {
    color: white;
    transition: 0.3s;
  }

  a:hover {
    color: #ffcc00;
  }
`;

export const Newsletter = styled.div`

  p {
    margin-bottom: 10px;
  }

  input {
    width: 80%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    margin-right: 5px;
  }

  button {
    padding: 14px;
    background: #175d48;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    font-size: 16px;
  }

  button:hover {
    background: #333;
  }
`;

export const Copyright = styled.div`
  text-align: center;
  margin-top: 30px;
  font-size: 12px;
  border-top: 1px solid #333;
  padding-top: 15px;

  .whatsapp-icon {
    font-size: 24px;
    position: fixed;
    bottom: 20px;
    right: 20px;
    color: #25d366;
    background: white;
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
  }

  .whatsapp-icon:hover {
    background: #1ebe5d;
  }
`;
