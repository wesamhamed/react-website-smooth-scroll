import React from 'react'
import { FaFacebook } from 'react-icons/fa';
import {animateScroll as scroll} from "react-scroll";
import { FooterContainer, FooterLink, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterWrap, SocialIconLink, SocialLogo, SocialMedia, SocialMediaIcons, SocialMediaWrap, WebsiteRights } from './styles/Footer';

const Footer = () => {
    const toggleHome =()=>{
        scroll.scrollToTop();
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">How it works</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">How it works</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">How it works</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">How it works</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to ="/" onClick={toggleHome}>
                            dolla
                        </SocialLogo>
                        <WebsiteRights>
                            dolla &copy; {new Date().getFullYear()}
                            All rights reserved.
                        </WebsiteRights>
                        <SocialMediaIcons>
                            <SocialIconLink
                                href="/"
                                target="_blank"
                                aria-label="Facebook"
                            >
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink
                                href="/"
                                target="_blank"
                                aria-label="Facebook"
                            >
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink
                                href="/"
                                target="_blank"
                                aria-label="Facebook"
                            >
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink
                                href="/"
                                target="_blank"
                                aria-label="Facebook"
                            >
                                <FaFacebook/>
                            </SocialIconLink>
                        </SocialMediaIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
