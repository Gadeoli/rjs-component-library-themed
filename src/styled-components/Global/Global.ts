import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        background: ${(props: any) => props.theme.body};
        font-family: ${(props: any) => props.theme.fonts.primary}, sans-serif;
        font-size: ${(props: any) => props.theme.fontSize.text}, sans-serif;
    }
`;