// Spinners => Spinner | SpinnerCoin | SpinnerDots | SpinnerDotsCircle | SpinnerRipple | SpinnerView
// From: https://loading.io/css/ (last updated: 2023-05-17)

import  styled, { keyframes } from 'styled-components';

export const SpinnerAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const SpinnerCoinAnimation = keyframes`
    0%, 100% {
        animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
    }
    0% {
        transform: rotateY(0deg);
    }
    50% {
        transform: rotateY(1800deg);
        animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
    }
    100% {
        transform: rotateY(3600deg);
    }
`;

export const SpinnerDotsAnimation1 = keyframes`
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
`;

export const SpinnerDotsAnimation2 = (size : number) => keyframes`
    0% {
        transform: translate(0, 0);
    }
    100% {
        transform: translate(${size * 0.3}px, 0);
    }
`;

export const SpinnerDotsAnimation3 = keyframes`
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(0);
    }
`;

export const SpinnerDotsCircleAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const SpinnerRippleAnimation = (size: number) => keyframes`
    0% {
        top: ${size * 0.45}px;
        left: ${size * 0.45}px;
        width: 0;
        height: 0;
        opacity: 0;
    }
    4.9% {
        top: ${size * 0.45}px;
        left: ${size * 0.45}px;
        width: 0;
        height: 0;
        opacity: 0;
    }
    5% {
        top: ${size * 0.45}px;
        left: ${size * 0.45}px;
        width: 0;
        height: 0;
        opacity: 1;
    }
    100% {
        top: 0px;
        left: 0px;
        width: ${size * 0.9}px;
        height: ${size * 0.9}px;
        opacity: 0;
    }
`;

export const SpinnerViewAnimation = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;

export const Spinner = styled.div<{size: number, customColor: string}>`
    display: inline-block;
    position: relative;
    width: ${(props: any) => props.size}px;
    height: ${(props: any) => props.size}px;

    div{
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: ${(props: any) => props.size * 0.8}px;
        height: ${(props: any) => props.size * 0.8}px;
        margin: ${(props: any) => props.size * 0.07}px;
        border-radius: 50%;
        border: ${(props: any) => props.size * 0.07}px solid ${(props: any) => props.theme.text};
        border-color: ${(props: any) => props.theme.text} transparent transparent transparent;
        animation: ${SpinnerAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    }

    &.danger div{
        border: ${(props: any) => props.size * 0.07}px solid ${(props: any) => props.theme.danger};
        border-color: ${(props: any) => props.theme.danger} transparent transparent transparent;
    }

    &.primary div{
        border: ${(props: any) => props.size * 0.07}px solid ${(props: any) => props.theme.primary};
        border-color: ${(props: any) => props.theme.primary} transparent transparent transparent;
    }

    &.secondary div{
        border: ${(props: any) => props.size * 0.07}px solid ${(props: any) => props.theme.secondary};
        border-color: ${(props: any) => props.theme.secondary} transparent transparent transparent;
    }

    &.success div{
        border: ${(props: any) => props.size * 0.07}px solid ${(props: any) => props.theme.success};
        border-color: ${(props: any) => props.theme.secondary} transparent transparent transparent;
    }

    &.custom div{
        border: ${(props: any) => props.size * 0.07}px solid ${(props: any) => props.customColor} !important;
        border-color: ${(props: any) => props.customColor} transparent transparent transparent !important;
    }

    div:nth-child(1) {
        animation-delay: -0.45s;
    }
    div:nth-child(2) {
        animation-delay: -0.3s;
    }
    div:nth-child(3) {
        animation-delay: -0.15s;
    }
`;

export const SpinnerCoin = styled.div<{size: number, customColor: string}>`
    display: inline-block;
    transform: translateZ(1px);

    div{
        display: inline-block;
        width: ${(props: any) => props.size}px;
        height: ${(props: any) => props.size}px;
        margin: ${(props: any) => props.size * 0.125}px;
        border-radius: 50%;
        background: ${(props: any) => props.theme.text};
        animation: ${SpinnerCoinAnimation} 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }

    &.danger div{
        background: ${(props: any) => props.theme.danger};
    }

    &.primary div{
        background: ${(props: any) => props.theme.primary};
    }

    &.secondary div{
        background: ${(props: any) => props.theme.secondary};
    }

    &.success div{
        background: ${(props: any) => props.theme.success};
    }

    &.custom div{
        background: ${(props: any) => props.customColor};
    }

    div:nth-child(1) {
        animation-delay: -0.45s;
    }
    div:nth-child(2) {
        animation-delay: -0.3s;
    }
    div:nth-child(3) {
        animation-delay: -0.15s;
    }
`;

export const SpinnerDots = styled.div<{size: number, customColor: string}>`
    display: inline-block;
    position: relative;
    width: ${(props: any) => props.size}px;
    height: ${(props: any) => props.size}px;

    div{
        position: absolute;
        top: ${(props: any) => props.size * 0.4162}px;
        width: ${(props: any) => props.size * 0.1625}px;
        height: ${(props: any) => props.size * 0.1625}px;
        border-radius: 50%;
        background: ${(props: any) => props.theme.text};
        animation-timing-function: cubic-bezier(0, 1, 1, 0);
    }

    &.danger div{
        background: ${(props: any) => props.theme.danger};
    }

    &.primary div{
        background: ${(props: any) => props.theme.primary};
    }

    &.secondary div{
        background: ${(props: any) => props.theme.secondary};
    }

    &.success div{
        background: ${(props: any) => props.theme.success};
    }

    &.custom div{
        background: ${(props: any) => props.theme.customColor};
    }

    div:nth-child(1) {
        left: ${(props: any) => props.size * 0.1}px;
        animation: ${SpinnerDotsAnimation1} 0.6s infinite;
    }
    div:nth-child(2) {
        left: ${(props: any) => props.size * 0.1}px;
        animation: ${(props : any) => SpinnerDotsAnimation2(props.size)} 0.6s infinite;
    }
    div:nth-child(3) {
        left: ${(props: any) => props.size * 0.4}px;
        animation: ${(props : any) => SpinnerDotsAnimation2(props.size)} 0.6s infinite;
    }
    div:nth-child(4) {
        left: ${(props: any) => props.size * 0.7}px;
        animation: ${SpinnerDotsAnimation3} 0.6s infinite;
    }
`;

export const SpinnerDotsCircle = styled.div<{size: number, customColor: string}>`
    display: inline-block;
    position: relative;
    width: ${(props: any) => props.size}px;
    height: ${(props: any) => props.size}px;

    div{
        animation: ${SpinnerDotsCircleAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        transform-origin: ${(props: any) => props.size * 0.5}px ${(props: any) => props.size * 0.5}px;
    }

    div:after {
        content: " ";
        display: block;
        position: absolute;
        width: ${(props: any) => props.size * 0.0875}px;
        height: ${(props: any) => props.size * 0.0875}px;
        border-radius: 50%;
        background: ${(props: any) => props.theme.text};
        margin: -${(props: any) => props.size * 0.05}px 0 0 -${(props: any) => props.size * 0.05}px;
    }

    &.danger div:after{
        background: ${(props: any) => props.theme.danger};
    }

    &.primary div:after{
        background: ${(props: any) => props.theme.primary};
    }

    &.secondary div:after{
        background: ${(props: any) => props.theme.secondary};
    }

    &.success div:after{
        background: ${(props: any) => props.theme.success};
    }

    &.custom div:after{
        background: ${(props: any) => props.theme.customColor};
    }

    div:nth-child(1) {
        animation-delay: -0.036s;
    }
    div:nth-child(1):after {
        top: ${(props: any) => props.size * 0.7875}px;
        left: ${(props: any) => props.size * 0.7875}px;
    }
    div:nth-child(2) {
        animation-delay: -0.072s;
    }
    div:nth-child(2):after {
        top: ${(props: any) => props.size * 0.85}px;
        left: ${(props: any) => props.size * 0.70}px;
    }
    div:nth-child(3) {
        animation-delay: -0.108s;
    }
    div:nth-child(3):after {
        top: ${(props: any) => props.size * 0.8875}px;
        left: ${(props: any) => props.size * 0.6}px;
    }
    div:nth-child(4) {
        animation-delay: -0.144s;
    }
    div:nth-child(4):after {
        top: ${(props: any) => props.size * 0.9}px;
        left: ${(props: any) => props.size * 0.5}px;
    }
    div:nth-child(5) {
        animation-delay: -0.18s;
    }
    div:nth-child(5):after {
        top: ${(props: any) => props.size * 0.8875}px;
        left: ${(props: any) => props.size * 0.4}px;
    }
    div:nth-child(6) {
        animation-delay: -0.216s;
    }
    div:nth-child(6):after {
        top: ${(props: any) => props.size * 0.85}px;
        left: ${(props: any) => props.size * 0.3}px;
    }
    div:nth-child(7) {
        animation-delay: -0.252s;
    }
    div:nth-child(7):after {
        top: ${(props: any) => props.size * 0.7875}px;
        left: ${(props: any) => props.size * 0.2125}px;
    }
    div:nth-child(8) {
        animation-delay: -0.288s;
    }
    div:nth-child(8):after {
        top: ${(props: any) => props.size * 0.7}px;
        left: ${(props: any) => props.size * 0.15}px;
    }
`;

export const SpinnerRipple = styled.div<{size: number, customColor: string}>`
    display: inline-block;
    position: relative;
    width: ${(props: any) => props.size}px;
    height: ${(props: any) => props.size}px;

    div{
        position: absolute;
        border: ${(props: any) => props.size * 0.05}px solid ${(props: any) => props.theme.text};
        opacity: 1;
        border-radius: 50%;
        animation: ${(props: any) => SpinnerRippleAnimation(props.size)} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }

    &.danger div{
        border: ${(props: any) => props.size * 0.05}pxpx solid ${(props: any) => props.theme.danger};
    }

    &.primary div{
        border: ${(props: any) => props.size * 0.05}pxpx solid ${(props: any) => props.theme.primary};
    }

    &.secondary div{
        border: ${(props: any) => props.size * 0.05}pxpx solid ${(props: any) => props.theme.secondary};
    }

    &.success div{
        border: ${(props: any) => props.size * 0.05}pxpx solid ${(props: any) => props.theme.success};
    }

    &.custom div{
        border: ${(props: any) => props.size * 0.05}pxpx solid ${(props: any) => props.theme.customColor};
    }

    div:nth-child(2) {
        animation-delay: -0.5s;
    }
`;

export const SpinnerView = styled.div<{size: number, customColor: string}>`
    color: official;
    display: inline-block;
    position: relative;
    width: ${(props: any) => props.size}px;
    height: ${(props: any) => props.size}px;

    div{
        transform-origin: ${(props: any) => props.size * 0.5}px ${(props: any) => props.size * 0.5}px;
        animation: ${SpinnerViewAnimation} 1.2s linear infinite;
    }

    div:after {
        content: " ";
        display: block;
        position: absolute;
        top: ${(props: any) => props.size * 0.0375}px;
        left: ${(props: any) => props.size * 0.4625}px;
        width: ${(props: any) => props.size * 0.075}px;
        height: ${(props: any) => props.size * 0.2}px;
        border-radius: 20%;
        background: ${(props: any) => props.theme.text};
    }

    &.danger div:after{
        background: ${(props: any) => props.theme.danger};
    }

    &.primary div:after{
        background: ${(props: any) => props.theme.primary};
    }

    &.secondary div:after{
        background: ${(props: any) => props.theme.secondary};
    }

    &.success div:after{
        background: ${(props: any) => props.theme.success};
    }

    &.custom div:after{
        background: ${(props: any) => props.theme.customColor};
    }

    div:nth-child(1) {
        transform: rotate(0deg);
        animation-delay: -1.1s;
    }
    div:nth-child(2) {
        transform: rotate(30deg);
        animation-delay: -1s;
    }
    div:nth-child(3) {
        transform: rotate(60deg);
        animation-delay: -0.9s;
    }
    div:nth-child(4) {
        transform: rotate(90deg);
        animation-delay: -0.8s;
    }
    div:nth-child(5) {
        transform: rotate(120deg);
        animation-delay: -0.7s;
    }
    div:nth-child(6) {
        transform: rotate(150deg);
        animation-delay: -0.6s;
    }
    div:nth-child(7) {
        transform: rotate(180deg);
        animation-delay: -0.5s;
    }
    div:nth-child(8) {
        transform: rotate(210deg);
        animation-delay: -0.4s;
    }
    div:nth-child(9) {
        transform: rotate(240deg);
        animation-delay: -0.3s;
    }
    div:nth-child(10) {
        transform: rotate(270deg);
        animation-delay: -0.2s;
    }
    div:nth-child(11) {
        transform: rotate(300deg);
        animation-delay: -0.1s;
    }
    div:nth-child(12) {
        transform: rotate(330deg);
        animation-delay: 0s;
    }
`;