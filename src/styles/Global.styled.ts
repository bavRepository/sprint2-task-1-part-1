import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
    margin: 0;
    font-family: 'Poppins',-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #2a2c36;
    display: flex;
    justify-content: center;
    align-items: center;
}

@font-face {
    font-family: 'Poppins';
    src: url('../assets/fonts/Poppins-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'Poppins';
    src: url('../assets/fonts/Poppins-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
}    
    
    
a {
    text-decoration: none;
}
ul {
    list-style: none;
}

button  {
    background-color: unset;
    border: none;
}

@media (prefers-reduced-motion: reduce) {
    *,
    :before,
    *:after {
        animation: none;
        transition: none;
    }
}
`
