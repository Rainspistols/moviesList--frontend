import { Global, css } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';

const GlobalStyles = () => (
  <Global
    styles={css`
      ${emotionNormalize}
      html,
      body {
        padding: 0;
        margin: 0;
        background: white;
        min-height: 100%;
        font-family: Helvetica, Arial, sans-serif;
      }
      .container {
        max-width: 960px;
        width: 100%;
        margin: 0 auto;
        padding: 30px;
      }
    `}
  />
);

export default GlobalStyles;
