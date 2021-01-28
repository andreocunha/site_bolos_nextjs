import React, { Component, Fragment } from "react";

import {
    StartButton,
    ReviewText,
    FooterDiv,
    FooterTop,
    ContactDiv,
    ContactHeading,
    ContactText,
    ContactForm,
    ContactInput,
    ContactInputBody,
    FooterBottom,
    FooterBottomColumn,
    FooterMid,
    FooterLogoDiv,
    FooterLogo,
    AddressDiv,
    FooterItemDiv,
    SocialMediaImg,
} from "./snippets";

class Footer extends Component {
    render() {
        return (
            <FooterDiv>
                <FooterTop id="signInId">
                    <ContactDiv>
                        <ContactHeading>Entre em contato</ContactHeading>

                        <ContactText>Me envie um email caso tenha alguma dúvida.</ContactText>

                        <ContactForm>
                            <ContactInput placeholder="Email"></ContactInput>
                            <ContactInputBody placeholder="Mensagem"></ContactInputBody>
                            <StartButton style={{ width: '35%' }}>Enviar</StartButton>
                        </ContactForm>
                    </ContactDiv>
                </FooterTop>


                <FooterBottom>
                    <FooterBottomColumn>
                        <FooterItemDiv style={{ alignItems: 'center', alignItems: 'flex-start', justifyContent: 'flex-end', width: '100%', flexDirection: 'row' }}>
                            <SocialMediaImg src="static/images/facebook-white.png" />
                            <SocialMediaImg src="static/images/twitter-white.png" />
                            <SocialMediaImg src="static/images/instagram-white.png" />
                            <SocialMediaImg src="static/images/linkedin-white.png" />
                        </FooterItemDiv>
                    </FooterBottomColumn>
                </FooterBottom>
            </FooterDiv>
        )
    }
}

export default Footer;

