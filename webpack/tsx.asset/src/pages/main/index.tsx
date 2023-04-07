import { WebpackSVG } from '../../assets/svg';
import { ReactImage } from '../../assets/image';

import * as S from './index.styled';

function Main() {
  return (
    <S.Container>
      <h1>Webpack App! with.TSX</h1>
      <p>Gmarket Sans - 지마켓 산스</p>
      <S.Header>SVG 파일입니다!</S.Header>
      <WebpackSVG />
      <S.Header>PNG 파일입니다!</S.Header>
      <S.Image src={ReactImage} alt=""></S.Image>
    </S.Container>
  );
}

export default Main;
