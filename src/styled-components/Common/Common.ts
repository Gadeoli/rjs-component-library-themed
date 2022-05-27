import  styled from 'styled-components';
import { shade } from 'polished';

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
`;