import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer `
    background-color:#101522;
`;

export const FooterWrap = styled.div `
    padding:4.8rem 2.4rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    max-width:110rem;
    margin:0 auto
`;

export const FooterLinksContainer = styled.div `
    display:flex;
    justify-content:center;
    @media screen and (max-width: 820px){
        padding-top:3.2rem;
    }
`;

export const FooterLinksWrapper = styled.div `
    display:flex;
    
    @media screen and (max-width:820px){
        flex-direction:column;
    }
`;

export const FooterLinkItems = styled.div `
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    margin:1.6rem;
    text-align:left;
    width:16rem;
    box-sizing: border-box;
    color:#fff;

    @media screen (max-width:420px){
        margin:0;
        padding:1rem;
        width:100%;
    }
`;
export const FooterLinkTitle = styled.h1 `
    font-size:1.4rem;
    margin-bottom:1.6rem;
`;

export const FooterLink = styled(Link)
`
    color:#fff;
    text-decoration:none;
    margin-bottom:0.8rem;
    font-size:1.4rem;

    &:hover{
        color:#01bf71;
        transition:0.3s ease-out;
    }
`;

export const SocialMedia = styled.div `
    max-width:100rem;
    width:100%;
`;

export const SocialMediaWrap = styled.div `
    display:flex;
    justify-content:space-between;
    align-items:center;
    max-width:110rem;
    margin:4rem auto 0 auto;
    @media screen and (max-width:820px){
        flex-direction:column;
    }
`;
export const SocialLogo = styled(Link)
`
    color:#fff;
    justify-self:start;
    cursor:pointer;
    text-decoration:none;
    font-size:2.4rem;
    display:flex;
    align-items:center;
    margin-bottom:1.6rem;
    font-weight:bold;
`;
export const WebsiteRights = styled.small `
    color:#fff;
    font-size:1.6rem;
`;
export const SocialMediaIcons = styled.div `
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:24rem;
`;

export const SocialIconLink = styled.a `
    color:#fff;
    font-size:2.4rem;
`;