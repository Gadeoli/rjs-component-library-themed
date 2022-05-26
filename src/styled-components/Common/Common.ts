import  styled, { 
        keyframes,
} from 'styled-components';
import { shade } from 'polished';

export const Body = styled.div`
    min-height: 100vh;
    width: 100%;
    background-color: ${(props: any) => props.theme.body};
`

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

    &.clean{
        background-color: transparent;
        border: 0;
        padding: 0;
        margin: 0;
    }

    &.danger{
        background-color: ${(props: any) => props.theme.danger};
        border-color: ${(props: any) => props.theme.danger};
        
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
        
        :hover{
            background-color: ${(props: any) => shade(0.15, props.theme.primary)};
        }
    }

    &.secondary{
        background-color: ${(props: any) => props.theme.secondary};
        border-color: ${(props: any) => props.theme.secondary};
        
        :hover{
            background-color: ${(props: any) => shade(0.15, props.theme.secondary)};
        }
    }

    &.success{
        background-color: ${(props: any) => props.theme.success};
        border-color: ${(props: any) => props.theme.success};
        
        :hover{
            background-color: ${(props: any) => shade(0.15, props.theme.success)};
        }
    }
`

export const Container = styled.div`
    background-color: ${(props: any) => props.theme.background};
    
    &.full{
        width: 100%;
    }

    &.danger{
        background-color: ${(props: any) => props.theme.danger};
    }

    &.primary{
        background-color: ${(props: any) => props.theme.primary};
    }

    &.secondary{
        background-color: ${(props: any) => props.theme.secondary};
    }

    &.success{
        background-color: ${(props: any) => props.theme.success};
    }
`

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
        h2, p, image{
            width: 100%;
            min-height: 30px;
            border-radius: 2px;

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
        
        :hover{
            background-color: ${(props: any) => shade(0.15, props.theme.danger)};
        }

        &.loading{
            background: linear-gradient(110deg, ${(props: any) => props.theme.danger} 8%, ${(props: any) => props.theme.body} 18%, ${(props: any) => props.theme.danger} 33%);
        }
    }

    &.primary{
        background-color: ${(props: any) => props.theme.primary};
        
        :hover{
            background-color: ${(props: any) => shade(0.15, props.theme.primary)};
        }
    }

    &.secondary{
        background-color: ${(props: any) => props.theme.secondary};
        
        :hover{
            background-color: ${(props: any) => shade(0.15, props.theme.secondary)};
        }
    }

    &.success{
        background-color: ${(props: any) => props.theme.success};
        
        :hover{
            background-color: ${(props: any) => shade(0.15, props.theme.success)};
        }
    }
`

export const CardContent = styled.div`
    width: 100;
    padding: 20px 16px;
` 

export const Input = styled.input`
    background-color: transparent;
    border: 0;
    border: 1px solid ${(props: any) => props.theme.body};
    box-sizing: border-box;
    color: ${(props: any) => props.theme.text};
    outline-color: ${(props: any) => props.theme.outline};
    border-radius: 3px;
    width: 100%;
    padding: 5px 9px;
`

export const TextArea = styled.textarea`
    background-color: transparent;
    border: 0;
    border: 1px solid transparent;
    color: ${(props: any) => props.theme.text};
    outline-color: ${(props: any) => props.theme.outline};
    border-radius: 3px;
    width: 100%;
    padding: 5px 9px;
`

export const InputContainer = styled.div`
    width: 100%;

    .react-datepicker-wrapper{
        width: 100%;
    }

    input{
        background-color: transparent;
        border: 0;
        border: 1px solid transparent;
        color: ${(props: any) => props.theme.text};
        outline-color: coral;
        border-radius: 3px;
        width: 100%;
        padding: 5px 9px;
    }
`

export const InputErrorTxt = styled.span`
    position: absolute;
    bottom: -15px;
    left: 0;
    color: ${(props: any) => props.theme.danger};
    font-weight: bold;
    font-size: ${(props: any) => props.theme.fontSize.text * 0.75};
`

export const P = styled.p`
    color: ${(props: any) => props.theme.text};
    font-size: ${(props: any) => props.theme.fontSize.text};
    text-align: justify;

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
`

export const Span = styled.span`
    color: ${(props: any) => props.theme.text};
    font-size: ${(props: any) => props.theme.fontSize.text};

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
`

export const H1 = styled.h1`
    color: ${(props: any) => props.theme.text};
    font-size: ${(props: any) => props.theme.fontSize.title};
    font-weight: 700;
    margin: 0;
    margin-bottom: 30px;
    /* text-shadow: 0px 3px 2px #000; */
    padding: 0;
    line-height: 1;

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
`

export const H2 = styled.h2`
    color: ${(props: any) => props.theme.text};
    font-size: ${(props: any) => props.theme.fontSize.subtitle};
    font-weight: 700;
    margin: 0;
    padding: 0;
    line-height: 1;

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
`

export const H3 = styled.h3`
    color: ${(props: any) => props.theme.text};
    font-size: ${(props: any) => props.theme.fontSize.subtitle * 0.90};
    margin: 0;
    padding: 0;
    line-height: 1;

    &.danger{
        color: ${(props: any) => props.theme.danger};
    }

    &.link{
        color: ${(props: any) => props.theme.link};

        :hover{
            background-color: ${props => shade(0.15, props.theme.link)};
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
`

export const H4 = styled.h4`
    color: ${(props: any) => props.theme.text};
    font-size: ${(props: any) => props.theme.fontSize.subtitle * 0.80};
    margin: 0;
    padding: 0;
    line-height: 1;

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
`

export const ImageContainer = styled.div`
    max-height: ${(props: any) => props.max_height || '150px'};
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    image{
        max-width: 100%;
        max-height: 100%;
    }

    button{
        position: absolute;
        top: 0;
        right: 0;
    }
`