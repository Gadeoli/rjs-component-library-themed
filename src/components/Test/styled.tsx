import styled from "styled-components";

export const AbsoluteContainer = styled.div<{
    top?: string; 
    bottom?: string; 
    right?: string;
    left?: string;
}>`
    position: absolute;
    top: ${props => props.top ? props.top : 'unset'};
    bottom: ${props => props.bottom ? props.bottom : 'unset'};
    left: ${props => props.left ? props.left : 'unset'};
    right: ${props => props.right ? props.right : 'unset'};
`;