import styled from "styled-components/macro";
import { Link } from "react-router-dom";


export const Container = styled.div `
    min-height:69.2rem;
    position:fixed;
    bottom:0;
    left:0;
    right:0;
    top:0;
    z-index:0;
    overflow:hidden;
    background: linear-gradient(
        180deg,
        rgba(1,147,86,1) 0%,
        rgba(10,201,122,1) 100%
    )
`;

export const FormWrap = styled.div `
        height:100%;
        display:flex;
        flex-direction:column;
        justify-content:center;

        @media screen and (max-width:400px){
            height:80%;
        }
`;

export const Icon = styled(Link)
` 
        margin-left: 3.2rem;
        margin-top:3.2rem;
        text-decoration:none;
        color:#fff;
        font-weight:700;
        font-size:3.2rem;
        @media screen and (max-width:480px){
            margin-left:1.6rem;
            margin-top:0.8rem;
        }
`;

export const FormContent = styled.div `
        height:100%;
        display:flex;
        flex-direction:column;
        justify-content:center;

        @media screen and (max-width:480px){
            padding:1rem;
        }
`;

export const Form = styled.form `
        background:#010101;
        max-width:40rem;
        height:auto;
        width:100%;
        z-index:1;
        display:grid;
        margin: 0 auto;
        padding:8rem 3.2rem;
        border-radius:0.4rem;
        box-shadow: 0 1px 3px rgba(0,0,0,0.9);

        @media screen and (max-width:400px){
            padding:3.2rem 3.2rem;
        }
`;
export const FormH1 = styled.h1 `
        margin-bottom:4rem;
        color:#fff;
        font-size:2rem;
        font-weight:400;
        text-align:center;
`;
export const FormLabel = styled.label `
        margin-bottom:0.8rem;
        font-size:1.4rem;
        color:#fff;
`;
export const FormInput = styled.input `
        padding:1.6rem 1.6rem;
        margin-bottom:3.2rem;
        border:none;
        border-radius:4px;
`;
export const FormButton = styled.button `
        background:#01bf71;
        padding:1.6rem 0;
        border:none;
        border-radius:4px;
        color:#fff;
        font-size:2rem;
        cursor:pointer;
`;
export const Text = styled.span `
        text-align:center;
        margin-top:2.4rem;
        color:#fff;
        font-size:1.4rem;
`;