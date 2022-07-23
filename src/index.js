import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import data from './data/data.json';

// Подключение Проводника тем и Глобальных стилей
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const defaultTheme = {
  colors: {
    neutralExtraDark: '#000000',
    neutralDark: '#323232',
    neutralLight: '#C7AA8B',
    neutralTextColor: '#4D4D4D',
  },
  fonts: {
    robotoCondensedRegular: "'Roboto Condensed', sans-serif",
    vollkornRegular: "'Vollkorn', serif",
    robotoRegular: "'Roboto', sans-serif",
  },
  media: {
    phone: '(max-width: 425px)',
    tablet: '(max-width: 768px)',
    desktop: '(max-width: 992px)',
    wideDesktop: '(max-width: 1280px)',
  },
};

const Global = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  border: 0;
  font-family: ${defaultTheme.fonts.robotoCondensedRegular};
}

*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

:focus,
:active {
  outline: none;
}
a:focus,
a:active {
  outline: none;
}

nav,
footer,
header,
aside {
  display: block;
}

html,
body {
  height: 100%;
  width: 100%;
  font-size: 100%;
  line-height: 1;
  font-size: 14px;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

input,
button,
textarea {
  font-family: inherit;
}

input::-ms-clear {
  display: none;
}
button {
  cursor: pointer;
}
button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
a,
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
ul li {
  list-style: none;
}
img {
  vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: 400;
}

body[lock]{
  overflow: hidden;
}

`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <Global />
      <App data={data} />
    </ThemeProvider>
  </React.StrictMode>
);
