import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

import { fontStyle } from './font';

const style = () => css`
  ${emotionReset}
  ${fontStyle}

  body {
    font-family: 'GmarketSansLight';
    font-size: 1.1rem;
  }

  h1 {
    font-size: 2rem;
  }
`;

function GlobalStyle() {
  return <Global styles={style} />;
}

export default GlobalStyle;
