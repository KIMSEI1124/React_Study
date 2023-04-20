import { getApi } from 'apis/request/api';
import * as S from './index.styled';

function Main() {
  const api = () => {
    getApi()
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <S.Container>
      <h1>Webpack App! with.TSX</h1>
      <p>Gmarket Sans - 지마켓 산스</p>
      <S.Header>AXIOS API 호출입니다</S.Header>
      <button onClick={api}>호출</button>
    </S.Container>
  );
}

export default Main;
