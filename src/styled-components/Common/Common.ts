import  styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Body = styled.div`
    min-height: 100vh;
    width: 100%;
    background-color: ${(props: any) => props.theme.body};
`;

export const BodyContent = styled.div`
    width: 100;
    padding: 20px 16px;
`;

export const Button = styled.button`
    margin: 0;
    padding: 5px 10px;
    border-radius: 3px;
    transition: background-color .4s ease-in-out;
    border: 1px solid;
    color: ${(props: any) => props.theme.text};
    cursor: pointer;
    
    :hover {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    }

    :disabled {
        opacity: 0.6;
    }

    &.clean{
        background-color: transparent;
        border: 0;
        padding: 0;
        margin: 0;
    }

    &.danger{
        background-color: ${(props: any) => props.theme.danger};
        border-color: ${(props: any) => props.theme.danger};
        color: ${(props: any) => props.theme.danger_text};
        
        :hover{
            background-color: ${(props: any) => shade(0.15, props.theme.danger)};
        }
    }

    &.full{
        width: 100%;
    }

    &.link{
        color: ${(props: any) => props.theme.link};
        background-color: unset;
        border-color: none;
        box-shadow: none;
        box-shadow: none;

        :hover{
            border-color: ${(props: any) => props.theme.link};
        }
    }

    &.primary{
        background-color: ${(props: any) => props.theme.primary};
        border-color: ${(props: any) => props.theme.primary};
        color: ${(props: any) => props.theme.primary_text};
        
        :hover{
            background-color: ${(props: any) => shade(0.15, props.theme.primary)};
        }
    }

    &.secondary{
        background-color: ${(props: any) => props.theme.secondary};
        border-color: ${(props: any) => props.theme.secondary};
        color: ${(props: any) => props.theme.secondary_text};
        
        :hover{
            background-color: ${(props: any) => shade(0.15, props.theme.secondary)};
        }
    }

    &.success{
        background-color: ${(props: any) => props.theme.success};
        border-color: ${(props: any) => props.theme.success};
        color: ${(props: any) => props.theme.success_text};
        
        :hover{
            background-color: ${(props: any) => shade(0.15, props.theme.success)};
        }
    }
`;

export const ShineAnimation = keyframes`
    to {
        background-position-x: -200%;
    }
`;

export const Card = styled.div`
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 4px;
    border-radius: 2px;
    overflow: hidden;
    background-color: ${(props: any) => props.theme.background};

    &.loading{
        h2, h3, h4, p, span, image, div.loading-effect{
            width: 100%;
            min-height: 30px;
            border-radius: 2px;
            color: transparent;
            
            background-color: unset;
            background-size: 200% 100%;
            background: ${(props: any) => props.theme.body};
            background: linear-gradient(110deg, ${(props: any) => props.theme.body} 8%, ${(props: any) => props.theme.background} 18%, ${(props: any) => props.theme.body} 33%);
            background-size: 200% 100%;
            animation: ${ShineAnimation} 1.5s linear infinite;
            
            /*
                animation-name: ${ShineAnimation};
                animation-duration: 1.5s;
                animation-timing-function: linear;
                animation-iteration-count: infinite;
            */
        }
    }

    &.danger{
        background-color: ${(props: any) => props.theme.danger};
        color: ${(props: any) => props.theme.danger_text};
        
        :hover{
            background-color: ${(props: any) => shade(0.15, props.theme.danger)};
        }

        &.loading{
            background: linear-gradient(110deg, ${(props: any) => props.theme.danger} 8%, ${(props: any) => props.theme.body} 18%, ${(props: any) => props.theme.danger} 33%);
        }
    }

    &.primary{
        background-color: ${(props: any) => props.theme.primary};
        color: ${(props: any) => props.theme.primary_text};
        
        :hover{
            background-color: ${(props: any) => shade(0.15, props.theme.primary)};
        }
    }

    &.secondary{
        background-color: ${(props: any) => props.theme.secondary};
        color: ${(props: any) => props.theme.secondary_text};
        
        :hover{
            background-color: ${(props: any) => shade(0.15, props.theme.secondary)};
        }
    }

    &.success{
        background-color: ${(props: any) => props.theme.success};
        color: ${(props: any) => props.theme.success_text};
        
        :hover{
            background-color: ${(props: any) => shade(0.15, props.theme.success)};
        }
    }
`;

export const CardContent = styled.div`
    width: 100;
    padding: 20px 16px;
`;

export const Container = styled.div`
    background-color: ${(props: any) => props.theme.background};
    
    &.full{
        width: 100%;
    }

    &.danger{
        background-color: ${(props: any) => props.theme.danger};
        color: ${(props: any) => props.theme.danger_text};
    }

    &.primary{
        background-color: ${(props: any) => props.theme.primary};
        color: ${(props: any) => props.theme.primary_text};
    }

    &.secondary{
        background-color: ${(props: any) => props.theme.secondary};
        color: ${(props: any) => props.theme.secondary_text};
    }

    &.success{
        background-color: ${(props: any) => props.theme.success};
        color: ${(props: any) => props.theme.success_text};
    }
`;

export const Span = styled.span`
    color: ${(props: any) => props.theme.text};
    font-size: ${(props: any) => props.theme.fontSize.text+"rem"};

    &.danger{
        color: ${(props: any) => props.theme.danger};
    }

    &.link{
        color: ${(props: any) => props.theme.link};

        :hover{
            background-color: ${(props: any) => shade(0.15, props.theme.link)};
        }
    }

    &.primary{
        color: ${(props: any) => props.theme.primary};
    }

    &.secondary{
        color: ${(props: any) => props.theme.secondary};
    }

    &.success{
        color: ${(props: any) => props.theme.success};
    }
`;

export const Input = styled.input`
    color: ${(props: any) => props.theme.text};
    font-size: ${(props: any) => props.theme.fontSize.text+"rem"};

    background-color: transparent;
    border: 0;
    border: 1px solid ${(props: any) => props.theme.body};
    box-sizing: border-box;
    outline-color: ${(props: any) => props.theme.outline};
    border-radius: 3px;
    width: 100%;
    padding: 5px 9px;

    &.full{
        width: 100%;
    }
`;

// Toogle Components
export const ToggleLabel = styled.label`
    width: ${(props: any) => props.sizes.width};
    height: ${(props: any) => props.sizes.height};
    border-radius: ${(props: any) => props.sizes.borderRadius};
    display: inline-block;
    cursor: pointer;
    position: relative;

    input{
        display: none;

        &:checked ~ .fill{
            background: ${(props: any) => props.colors.background};
        }

        &:checked ~ .fill::after {
            transform: translateX(${(props: any) => props.sizes.height});
        }

        &::checked ~ fill-icon{
            top: 1px;
            left: 2px;
        }
    }
`

export const ToggleFillIcon = styled.div`
    position: absolute;
    z-index: 2;
    top: 1px; 
    right: ${(props: any) => props.checked ? (props.sizes.main / 11) + 'px' : (props.sizes.main / 1.7) + 'px'};
    svg{
        font-size: ${(props: any) => (props.sizes.main / 3) + 'px'} 
    }
`

export const ToggleFill = styled.div`
    /* Fill is the background bar */
    position: relative;
    width: ${(props: any) => props.sizes.width};
    height: ${(props: any) => props.sizes.height};
    border-radius: ${(props: any) => props.sizes.borderRadius};
    background: ${(props: any) => props.colors.background};
    transition: background 0.2s;

    /* Fill after is the circle */
    &:after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: ${(props: any) => props.sizes.height};
        height: ${(props: any) => props.sizes.height};
        background: ${(props: any) => props.colors.cicle};
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
        border-radius: ${(props: any) => props.sizes.borderRadius};
        transition: transform 0.2s;
    }
`

export const ToggleContainer = styled.div`
    flex-direction: row;
    opacity: ${(props: any) => props.disabled ? 0.6 : 1};
`
// End Toogle Components