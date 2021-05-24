import styled from "styled-components/macro";

export const ServicesContainer = styled.div `
    height:80rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background:#010606;

    @media screen and (max-width: 768px) {
        height:110rem;
    }

    @media screen and (max-width:460px){
        height:130rem;
    }
`;

export const ServicesWrapper = styled.div `
    max-width:100rem;
    margin:0 auto;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items:center;
    grid-gap:1.6rem;
    padding:0 5rem;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width:768px){
        grid-template-columns:1fr;
        padding:0 2rem;
    }
`;

export const ServicesCard = styled.div `
    background:#fff;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    border-radius:1rem;
    max-height:34rem;
    padding:3rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition:all 0.2s ease-in-out;

    &:hover{
        transform:scale(1.02);
        transition:all 0.2s ease-in-out;
        cursor:pointer;
    }
`;

export const ServicesIcon = styled.img `
    height:16rem;
    width:16rem;
    margin-bottom:1rem;
`;

export const ServicesH1 = styled.h1 `
    font-size:2.5rem;
    color:#fff;
    margin-bottom:6.4rem;

    @media screen and (max-width:480px){
        font-size:2rem;
    }
`;

export const ServicesH2 = styled.h2 `
    font-size:1rem;
    margin-bottom:1rem;
`;

export const ServicesP = styled.p `
    font-size:1rem;
    text-align:center;
`;