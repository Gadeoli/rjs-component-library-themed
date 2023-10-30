import  styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import { darken, rgba } from 'polished';
import { deviceMax } from '../../components/device';

const defaultRadius = '.25rem';
const defaultShadow = "rgba(0, 0, 0, 0.08) 0px 1px 4px";

export const ShineAnimation = keyframes`
    to {
        background-position-x: -200%;
    }
`;

export const Body = styled.div`
    min-height: 100vh;
    width: 100%;
    background-color: ${(props: any) => props.theme.body};
`;

export const BodyContent = styled.div`
    width: 100;
    padding: 1.25rem 1rem;
`;

export const Button = styled.button`
    margin: 0;
    padding: .4rem .75rem;
    border-radius: ${defaultRadius};
    transition: background-color .4s ease-in-out;
    border: 1px solid;
    color: ${(props: any) => props.theme.text};
    cursor: ${(props: any) => props.loading ? 'default' : 'pointer'};
    
    :hover {
        box-shadow: ${defaultShadow};
    }

    :disabled {
        opacity: 0.6;
        cursor: default;
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

    &.loading-effect{
        min-width: 50px;
        min-height: 20px;
        border-color: ${(props: any) => props.theme.border};
    }
`;

export const BlinkerAnimation = keyframes`
    50% {
        opacity: 0;
    }
`;

export const Card = styled.div`
    width: 100%;
    box-shadow: ${defaultShadow};
    border-radius: ${defaultRadius};
    background-color: ${(props: any) => props.theme.background};

    &.loading-effect-card{
        h2, h3, h4, p, span, image, div.loading-effect{
            width: 100%;
            min-height: 2rem;
            border-radius: ${defaultRadius};
            color: transparent;
            
            background-color: unset;
            background-size: 200% 100%;
            background: ${(props: any) => props.theme.body};
            background: linear-gradient(110deg, ${(props: any) => props.theme.body} 8%, ${(props: any) => props.theme.background} 18%, ${(props: any) => props.theme.body} 33%);
            background-size: 200% 100%;
            animation: ${ShineAnimation} 1.5s linear infinite;
        }
    }

    &.danger{
        background-color: ${(props: any) => props.theme.danger};
        color: ${(props: any) => props.theme.danger_text};
        
        :hover{
            background-color: ${(props: any) => shade(0.15, props.theme.danger)};
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

    &.reverse{
        background-color: ${(props: any) => props.theme.body};
    }
`;

export const CardContent = styled.div`
    width: 100;
    padding: .4rem .75rem;
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

export const ImageContainer = styled.div`
    border: 1px solid ${(props: any) => props.theme.border};
    border-radius: ${defaultRadius};
    height: ${(props: any) => props.height || '10rem'};
    width: ${(props: any) => props.width || '10rem'};
    background-color: ${(props: any) => props.theme.background};
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    img{
        flex-shrink: 0;
        width: ${(props: any) => props.width};
        max-width: 100%;
        max-height: 100%;

        transition: opacity .3s ease-in;
        transition: filter .3s ease-in;
    }

    &.opacity-effect{
        img{
            filter: grayscale(100%);
            opacity: 0.9;
        }
        img:hover{
            filter: grayscale(0%);
            opacity: 1;
        }
    }

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
`

export const Label = styled.label`
    color: ${(props: any) => props.theme.text};
    font-size: ${(props: any) => (props.theme.fontSize.text * 0.75)+"rem"};
    min-height: 10px;
    min-width: 30px;
    margin-bottom: 5px;

    &.loading-effect{
        min-height: 20px;
        min-width: 50px;
        border-radius: 4px;
        display: inline-block;
    }
`;

export const Span = styled.span`
    color: ${(props: any) => props.theme.text};
    font-size: ${(props: any) => props.theme.fontSize.text+"rem"};
    min-height: 10px;
    min-width: 30px;

    &.danger{
        color: ${(props: any) => props.theme.danger};
    }

    &.link{
        color: ${(props: any) => props.theme.link};

        :hover{
            text-decoration: underline;
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

    &.blink{
        animation: ${BlinkerAnimation} .7s linear infinite;
    }

    &.loading-effect{
        min-height: 20px;
        min-width: 50px;
        border-radius: 4px;
        display: inline-block;
    }
`;

export const P = styled.p`
    color: ${(props: any) => props.theme.text};
    font-size: ${(props: any) => props.theme.fontSize.text + "rem"};

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

    &.loading-effect{
        min-height: 20px;
        min-width: 60px;
        border-radius: 4px;
    }
`;

export const TitleH1 = styled.h1`
    color: ${(props: any) => props.theme.text};
    font-size: ${(props: any) => props.theme.fontSize.title + "rem"};
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

    &.loading-effect{
        min-height: 20px;
        min-width: 60px;
        border-radius: 4px;
    }
`;

export const TitleHn = styled.h2`
    color: ${(props: any) => props.theme.text};
    font-size: ${(props: any) => (props.n > 1 ? (props.theme.fontSize.subtitle * (1 - (0.1 * (props.n - 1)))).toFixed(3) : props.theme.fontSize.subtitle) + "rem"};
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

    &.loading-effect{
        min-height: 20px;
        min-width: 60px;
        border-radius: 4px;
    }
`;

export const FormGroup = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const Input = styled.input`
    color: ${(props: any) => props.theme.text};
    font-size: ${(props: any) => props.theme.fontSize.text+"rem"};
    background-color: transparent;
    border: 0;
    border: 1.5px solid ${(props: any) => props.theme.border};
    box-sizing: border-box;
    outline-color: ${(props: any) => props.theme.outline};
    border-radius: ${defaultRadius};
    padding: .4rem .75rem;

    &.full{
        width: 100%;
    }

    &:focus {
        outline-style: solid;
    }

    /* avoid autocomplete background-color */
    &:-webkit-autofill { 
        -webkit-background-clip: text;
        -webkit-text-fill-color: ${props => props.theme.text};
    }
`;

export const Textarea = styled.textarea`
    color: ${(props: any) => props.theme.text};
    font-size: ${(props: any) => props.theme.fontSize.text+"rem"};
    background-color: transparent;
    border: 0;
    border: 1px solid ${(props: any) => props.theme.border};
    box-sizing: border-box;
    outline-color: ${(props: any) => props.theme.outline};
    border-radius: ${defaultRadius};
    min-height: 10rem;
    padding: .4rem .75rem;

    &.full{
        width: 100%;
    }

    &:focus {
        outline-style: solid;
    }

    /* avoid autocomplete background-color */
    &:-webkit-autofill { 
        -webkit-background-clip: text;
        -webkit-text-fill-color: ${props => props.theme.text};
    }
`;

//A component with flex children direction choise (row or column)
export const DirectionContainer = styled.div`
    display: flex;
    flex-direction: ${(props: any) => props.direction === 'row' ? 'row' : 'column'};
    cursor: pointer;

    .cl-themed__checkbox, .cl-themed__radio{
        margin-bottom: .5rem;
        margin-right: .75rem;
    }
`;

/* Radio Components */
export const RadioMultiContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: row;
    cursor: pointer;
`;

export const RadioContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    cursor: pointer;

    &.disabled{
        cursor: default;
        opacity: 0.6;
    }
`;

export const RadioCircle = styled.div`
    width: ${(props: any) => props.size || '1rem'};
    height: ${props => props.size || '1rem'};
    border: 1px solid ${(props: any) => props.colors.selected};
    border-radius: ${(props: any) => props.size || '1rem'};
    background-color: ${(props: any) => props.selected ? props.colors.selected : props.colors.unselect};
    justify-content: center;
    align-items: center;
    padding: 2px;
    margin-right: .5rem;

    span{
        color: ${(props: any) => props.colors.unselect};;
    }
`;
/* End Radio Components */

/* Toogle Components */
export const ToggleLabel = styled.label`
    width: ${(props: any) => props.sizes.width};
    height: ${(props: any) => props.sizes.height};
    border-radius: ${(props: any) => props.sizes.borderRadius};
    display: inline-block;
    cursor: pointer;
    position: relative;

    .disabled{
        opacity: 0.6;
    }

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
`;

export const ToggleFillIcon = styled.div`
    position: absolute;
    z-index: 2;
    top: 1px; 
    right: ${(props: any) => props.checked ? (props.sizes.main / 11) + 'px' : (props.sizes.main / 1.7) + 'px'};
    svg{
        font-size: ${(props: any) => (props.sizes.main / 3) + 'px'} 
    }
`;

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
`;

export const ToggleContainer = styled.div`
    flex-direction: row;
    opacity: ${(props: any) => props.disabled ? 0.6 : 1};
`;
/* End Toogle Components */

/* Checkbox Components */
export const CheckboxContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    cursor: pointer;

    input{
        display: none;
    }

    span{
        margin-left: .5rem;
    }

    &.disabled{
        cursor: default;
        opacity: 0.6;
    }
`;

export const CheckboxSquare = styled.div`
    width: ${(props: any) => props.size || '.75rem'};
    height: ${(props: any) => props.size || '.75rem'};
    border: 1px solid ${(props: any) => props.colors.checked};
    border-radius: ${defaultRadius};
    background-color: ${(props: any) => props.checked ? props.colors.checked : props.colors.unchecked};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px;

    &.disabled{
        cursor: default;
        opacity: 0.6;
    }
`;
/* End Checkbox Components */

/* Select Component */
export const Magnifier = styled.div<{size: number}>`
    position:relative;
    display:inline-block;
    border-radius: 30px;
    height: ${(props: any) => props.size}px;
    width: ${(props: any) => props.size}px;
    border: ${(props: any) => props.size / 3}px solid ${(props: any) => props.theme.text};
    margin-right: 10px;

    &:after {
        content: "";
        height: ${(props: any) => props.size / 3}px;
        width: ${(props: any) => props.size}px;
        background: ${(props: any) => props.theme.text};
        position:absolute;
        top: ${(props: any) => props.size + 1}px;
        left: ${(props: any) => props.size - 1}px;
        transform: rotate(45deg);
    }
`;

export const SelectContainer = styled.div`
    position: relative;
    width: fit-content;
    min-width: 150px;

    &.full{
        width: 100%;
    }
`;

export const SelectedResult = styled.div<{outline: boolean}>`
    background-color: transparent;
    border: 0;
    border: 1.5px solid ${(props: any) => props.outline ? props.theme.outline : props.theme.border};
    color: ${(props: any) => props.theme.text};
    outline-color: ${(props: any) => props.theme.outline};
    border-radius: ${defaultRadius};
    box-sizing: border-box;
    padding: .4rem .75rem;
    cursor: pointer;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
`;

export const SelectedResultItem = styled.span`
    font-family: ${(props: any) => props.theme.fonts.primary}, sans-serif;
    font-size: ${(props: any) => props.theme.fontSize.text+"rem"};
    background-color: ${(props: any) => props.theme.body};
    color: ${(props: any) => props.theme.text};
    border-radius: ${defaultRadius};
    margin-right: .1rem;
    display: flex;
    align-items: center;

    span{
        font-size: 90%;
        padding-left: .25rem;
    }
`;

export const SelectDrawerContainer = styled.div`
    position: relative;
    width: 100%;
    max-height: 350px;
    overflow-y: auto;

    &.inline-options{
        display: flex;
        align-items: flex-start;
        flex-direction: column;
    }   
`;

export const SelectDrawer = styled.div`
    width: 100%;
    margin: 0;
    padding: 0;
    margin-top: .5rem;
    padding: .4rem .75rem;
    background-color: ${(props: any) => props.theme.background};
    border: 1px solid ${(props: any) => props.theme.border};
    border-radius: 4px;  
    box-sizing: border-box;

    select{
        display: none;
    }

    &.focus{
        border-color: ${(props: any) => props.theme.outline};
    }
`;

export const SelectDrawerSearchContainer = styled.div`
    position: relative;
    display: flex;
    border: 1px solid transparent;
`;

export const SelectDrawerSearchActions = styled.div`
    display: flex;
    align-items: center;
    overflow: hidden;
    
    position: absolute;
    right: 0;
    top: 0;

    padding-right: 0.5rem;

    height: 100%;

    button{
        height: 100%;
        font-size: 60%;
        border-radius: unset;
    }
`;

export const SelectDrawerItem = styled.button`
    color: ${(props: any) => props.selected ? props.theme.secondary_text : props.theme.text};
    background-color: ${(props: any) => props.selected ? props.theme.secondary : props.theme.body};
    padding: .25rem;
    border-radius: ${defaultRadius};
    cursor: pointer;
    border: none;
    margin: .2rem;
    margin-left: 0;
`

export const SelectBtn = styled.button`
    width: ${(props: any) => props.width + 'px'};
    height: ${(props: any) => props.width + 'px'};
    background-color: ${(props: any) => props.bgcolor};
    border: 1px solid ${(props: any) => props.bgcolor};
    border-radius: ${defaultRadius};
    text-align: center;
    cursor: pointer;
    color: ${(props: any) => shade(0.15, props.color)};

    :hover{
        border: 1px solid ${(props: any) => shade(0.15, props.bgcolor)};
        background-color: ${(props: any) => shade(0.15, props.bgcolor)};
    }
`;

export const SelectSelectedOptions = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

    & > div{
        display: flex;
    }
`

export const SelectDropSymbol = styled.div`
    position: relative;
    height: 15px;
    width: 15px;
    margin-left: 15px;

    &::before,&::after{
        content: "";
        position: absolute;
        bottom: 5px;
        width: 0.5rem;
        height: 3px;
        transition: all 0.5s;
        background-color: ${props => props.theme.border};
    }

    &::before{
        left: -0.1rem;
        transform: rotate(45deg);
    }

    &.toggled::before{
        transform: rotate(-45deg) !important;
    }

    &::after {
        left: 0.15rem;
        transform: rotate(-45deg);
    }

    &.toggled::after{
        transform: rotate(45deg) !important;
    }
`;

export const TabsContent = styled.div`
    width: 100%;
    height: auto;
    min-height: 250px;
    background: ${props => props.theme.background};
    border-radius: ${defaultRadius};
`;

export const TabsNav = styled.ul`
    width: 99%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 1px solid ${props => props.theme.border};
    border-top-right-radius: ${defaultRadius};
    overflow: auto;
    li:first-child{
        border-top-left-radius: ${defaultRadius};
    }

    li:last-child{
        border-top-right-radius: ${defaultRadius};
    }
`;

export const TabsNavItem = styled.li<{active: boolean}>`
    padding: .4rem .75rem;
    list-style: none;
    text-align: center;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    border: 1px solid ${props => props.theme.border};
    display: flex;
    justify-content: center;
    align-items: center;

    &.active{
        border-color: ${props => props.theme.secondary};
        color: ${props => props.theme.secondary};
    }

    &.emphasis-active{
        padding: .5rem .75rem;
        margin-top: -4px; //fix bigger padding
        border-top-left-radius: ${defaultRadius};
        border-top-right-radius: ${defaultRadius};
    }
`;

export const TabsBody = styled.div`
    min-height: 150px;
    padding: .4rem .75rem;
    border: 1px solid ${props => props.theme.border};
    border-radius: ${defaultRadius};
    border-top-left-radius: unset;
    margin-top: -1px; //fix doble border (its border and the nav border)
`;

export const MultiFormContent = styled.div`
    width: 100%;
    height: auto;
    min-height: 250px;
    background: ${props => props.theme.background};
`;

export const MultiFormBody = styled.div`
    min-height: 150px;
`;

export const MultiFormNavContainer = styled.ul`
    margin: 0 auto;
    overflow-x: auto;
    display: flex;
`;

export const MultiFormNav = styled.ul`
    margin: 0 auto;
    display: flex;
    align-items: center;
`;

export const MultiFormNavItem = styled.li`
    margin: .4rem 0;
    list-style: none;
    text-align: center;
    cursor: default;
    transition: all 0.4s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MultiFormNavItemKey = styled.div`
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 1.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;

    /* disabled */
    border: 1px solid;
    border-color: ${props => props.theme.disabled};
    color: ${props => props.theme.disabled_text};
    background-color: unset;

    &.completed, &.current{
        background-color: unset;
        color: ${props => props.theme.secondary};
        border-color: ${props => props.theme.secondary};
    }

    &.current{
        color: ${props => props.theme.secondary_text};
        background-color: ${props => props.theme.secondary};
    }
`;

export const MultiFormNavItemDivisor = styled.div`
    width: 3rem;
    height: 1px;
    margin-left: 1.5rem;
    margin-right: 1.5rem;

    /* disabled */
    background-color: ${props => props.theme.disabled};

    &.completed{
        background-color: ${props => props.theme.secondary};
    }

    @media ${deviceMax.tablet}{
        width: 1.5rem;
        margin-left: 1rem;
        margin-right: 1rem;
    }
`;

export const MultiFormNavItemLabel = styled.div`
    /* disabled */
    color: ${props => props.theme.disabled_text};

    * { 
        color: ${props => props.theme.disabled_text};
    }

    &.completed, &.current{
        color: ${props => props.theme.text};
    }

    &.completed *, &.current *{
        color: ${props => props.theme.text};
    }
`;

export const LoadingContainer = styled.div<{align: string}>`
    text-align: ${props => props.align};
`;
/* End Select Component */

export const Tooltip = styled.div<{show: boolean}>`
    position: relative;
    width: fit-content;

    &.loading-effect{
        min-width: 20px;
        min-height: 16px;
        background-color: unset;
        background-size: 200% 100%;
        background: ${(props: any) => props.theme.body};
        background: linear-gradient(110deg, ${(props: any) => props.theme.body} 8%, ${(props: any) => props.theme.background} 18%, ${(props: any) => props.theme.body} 33%);
        background-size: 200% 100%;
        animation: ${ShineAnimation} 1.5s linear infinite;
    }

    //pointer
    &:before{
        content: '';
        display: ${props => props.show ? 'block' : 'none'};
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 0;
    }

    &.bottom:before{
        border-left: 5px solid black;
        border-right: 5px solid transparent;
        border-bottom: 5px solid black;
    }
`;

export const TooltipContext = styled.div`
`;

export const TooltipContent = styled.div<{position?: string, type?: string, show: boolean}>`
    position: absolute;
    display: ${props => props.show ? 'block' : 'none'};
    padding: .4rem .75rem;
    border-radius: ${defaultRadius};
    min-width: 25px;
    min-height: ${props => props.position === 'left' || props.position === 'right' ? '20px' : '14px'};

    //pointer
    :before{
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border: 9px solid;
    }

    //position
    &.right{
        left: calc(100% + 15px);
        top: 2px;

        :before{
            top: 5px;
            left: -9px;
            
            border-left: unset; 
            border-top-color: transparent;
            border-bottom-color: transparent;
        }
    }

    &.left{
        right: calc(100% + 15px);
        top: 2px;

        :before{
            top: 5px;
            right: -9px;
            
            border-right: unset; 
            border-top-color: transparent;
            border-bottom-color: transparent;
        }
    }
    
    &.top{
        bottom: calc(100% + 15px);
        left: 2px;

        :before{
            bottom: -9px;
            left: 6px;
            
            border-bottom: unset; 
            border-left-color: transparent;
            border-right-color: transparent;
        }
    }

    &.bottom{
        top: calc(100% + 15px);
        left: 2px;

        :before{
            top: -9px;
            left: 6px;
            
            border-top: unset; 
            border-left-color: transparent;
            border-right-color: transparent;
        }
    }

     //colors (keep colors after position)
     &.default{
        background-color: ${(props: any) => rgba(darken(0.2, props.theme.background), 0.8)};

        &.bottom:before{border-bottom-color: ${(props: any) => rgba(darken(0.2, props.theme.background), 0.8)};}
        &.top:before{border-top-color: ${(props: any) => rgba(darken(0.2, props.theme.background), 0.8)};}
        &.left:before{border-left-color: ${(props: any) => rgba(darken(0.2, props.theme.background), 0.8)};}
        &.right:before{border-right-color: ${(props: any) => rgba(darken(0.2, props.theme.background), 0.8)};}
    }
    
    &.danger{
        background-color: ${(props: any) => props.theme.danger};

        &.bottom:before{border-bottom-color: ${(props: any) => props.theme.danger};}
        &.top:before{border-top-color: ${(props: any) => props.theme.danger};}
        &.left:before{border-left-color: ${(props: any) => props.theme.danger};}
        &.right:before{border-right-color: ${(props: any) => props.theme.danger};}
    }

    &.link{
        background-color: ${(props: any) => props.theme.link};

        &.bottom:before{border-bottom-color: ${(props: any) => props.theme.link};}
        &.top:before{border-top-color: ${(props: any) => props.theme.link};}
        &.left:before{border-left-color: ${(props: any) => props.theme.link};}
        &.right:before{border-right-color: ${(props: any) => props.theme.link};}
    }

    &.primary{
        background-color: ${(props: any) => props.theme.primary};

        &.bottom:before{border-bottom-color: ${(props: any) => props.theme.primary};}
        &.top:before{border-top-color: ${(props: any) => props.theme.primary};}
        &.left:before{border-left-color: ${(props: any) => props.theme.primary};}
        &.right:before{border-right-color: ${(props: any) => props.theme.primary};}
    }

    &.secondary{
        background-color: ${(props: any) => props.theme.secondary};

        &.bottom:before{border-bottom-color: ${(props: any) => props.theme.secondary};}
        &.top:before{border-top-color: ${(props: any) => props.theme.secondary};}
        &.left:before{border-left-color: ${(props: any) => props.theme.secondary};}
        &.right:before{border-right-color: ${(props: any) => props.theme.secondary};}
    }

    &.success{
        background-color: ${(props: any) => props.theme.success};

        &.bottom:before{border-bottom-color: ${(props: any) => props.theme.success};}
        &.top:before{border-top-color: ${(props: any) => props.theme.success};}
        &.left:before{border-left-color: ${(props: any) => props.theme.success};}
        &.right:before{border-right-color: ${(props: any) => props.theme.success};}
    }   
`;
