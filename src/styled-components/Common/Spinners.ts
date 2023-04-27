import  styled, { keyframes } from 'styled-components';

export const SpinnerDefaultAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const Spinner = styled.div<{size: number}>`
    color: ${(props: any) => props.color ? props.color : props.theme.text};
    font-size: ${props => props.size + 'px'} ;
    text-indent: -99999em;
    position: relative;
    margin: 0 auto;
    width: 10em;
    height: 10em;
    box-shadow: inset 0 0 0 1em;
    transform: translateZ(0);
    border-radius: 50%;
    
    &:before,
    &:after {
        width: 5.2em;
        height: 10.2em;
        border-radius: 50%;
        position: absolute;
        content: '';
        background: ${(props: any) => props.backgroundColor ? props.backgroundColor : props.theme.background};
    }

    &:before {
        border-radius: 10.2em 0 0 10.2em;
        top: -0.1em;
        left: -0.1em;
        transform-origin: 5.1em 5.1em;
        animation: ${SpinnerDefaultAnimation} 2s infinite ease 1.5s;
    }
    
    &:after {
        border-radius: 0 10.2em 10.2em 0;
        top: -0.1em;
        left: 4.9em;
        transform-origin: 0.1em 5.1em;
        animation: ${SpinnerDefaultAnimation} 2s infinite ease;
    }

    &.danger{
        color: ${(props: any) => props.theme.danger_text};
    }

    &.primary{
        color: ${(props: any) => props.theme.primary_text};
    }

    &.secondary{
        color: ${(props: any) => props.theme.secondary_text};
    }

    &.success{
        color: ${(props: any) => props.theme.success_text};
    }

    &.danger{
        &:before,
        &:after {
            background: ${(props: any) => props.theme.danger};
        }
    }

    &.primary{
        &:before,
        &:after {
            background: ${(props: any) => props.theme.primary};
        }
    }

    &.secondary{
        &:before,
        &:after {
            background: ${(props: any) => props.theme.secondary};
        }
    }

    &.success{
        &:before,
        &:after {
            background: ${(props: any) => props.theme.success};
        }
    }
`;
