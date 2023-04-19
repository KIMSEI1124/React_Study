import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  margin-top: 50px;
`;

const Header = styled.h2`
  font-size: 1.5rem;
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
`;

export { Container, Header, Image };
