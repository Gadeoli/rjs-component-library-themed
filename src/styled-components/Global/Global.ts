import { createGlobalStyle, keyframes } from 'styled-components';
import { darken } from 'polished';

export const ShineAnimation = keyframes`
    to {
        background-position-x: -200%;
    }
`;

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        background: ${(props: any) => props.theme.body};
        font-family: ${(props: any) => props.theme.fonts.primary}, sans-serif;
        font-size: ${(props: any) => props.theme.fontSize.text+"rem"};
    }

    *{
        margin: 0;
        padding: 0;
        font-family: ${(props: any) => props.theme.fonts.primary}, sans-serif;

        .loading-effect{
            background-color: unset;
            background: ${(props: any) => props.theme.body};
            background: linear-gradient(110deg, ${(props: any) => props.theme.body} 8%, ${(props: any) => props.theme.background} 18%, ${(props: any) => props.theme.body} 33%);
            background-size: 200% 100%;
            animation: ${ShineAnimation} 1.5s linear infinite;

            &.loading-primary{
                background: ${(props: any) => props.theme.primary};
                background: linear-gradient(110deg, ${(props: any) => props.theme.primary} 8%, ${(props: any) => darken(-0.2, props.theme.primary)} 18%, ${(props: any) =>  props.theme.primary} 33%);
                background-size: 200% 100%;
                animation: ${ShineAnimation} 1.5s linear infinite;
            }

            &.loading-secondary{
                background: ${(props: any) => props.theme.secondary};
                background: linear-gradient(110deg, ${(props: any) => props.theme.secondary} 8%, ${(props: any) => darken(-0.2, props.theme.secondary)} 18%, ${(props: any) =>  props.theme.secondary} 33%);
                background-size: 200% 100%;
                animation: ${ShineAnimation} 1.5s linear infinite;
            }      
        }
    }
`;