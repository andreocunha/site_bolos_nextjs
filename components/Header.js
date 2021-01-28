import React, { Component, Fragment } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import {
    HeaderBody,
    NavLeft,
    LogoDiv,
    NavRight,
    NavLinks,
    MobileNavRight,
    NavbarToggle
} from "./snippets";




class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navOpen: false,
        }
        this.showMobileNav = this.showMobileNav.bind(this);
    }

    showMobileNav() {
        this.setState(state => ({
            navOpen: !this.state.navOpen, 
        }));
    }

    scrollToTeams() {
        document.getElementById("teamsId").scrollIntoView({
            behavior: 'smooth'
        });
    }

    scrollToFeatures() {
        document.getElementById("featuresId").scrollIntoView({
            behavior: 'smooth'
        });
    }

    scrollToSignIn() {
        document.getElementById("signInId").scrollIntoView({
            behavior: 'smooth'
        });
    }
    


    render() {
        return (
            <HeaderBody>
                
                <NavLeft>
                    <Link href="/">
                        <LogoDiv />
                    </Link>
                </NavLeft>

                <NavRight>
                    <NavLinks onClick={this.scrollToFeatures.bind(this)}>Informações</NavLinks>
                    
                    <NavLinks onClick={this.scrollToTeams.bind(this)}>Planos</NavLinks>
                    
                    <NavLinks onClick={this.scrollToSignIn.bind(this)}>Contato</NavLinks>
                </NavRight>

                <NavbarToggle onClick={this.showMobileNav}>
                    &#9776;
                </NavbarToggle>

                {
                    this.state.navOpen ? 
                        <MobileNavRight>
                            <NavLinks onClick={this.scrollToFeatures.bind(this)} style={{ justifyContent: 'center', fontWeight: '600' }}>Informações</NavLinks>

                            {/* <Link href="/about">
                                <NavLinks style={{justifyContent: 'center', fontWeight: '600'}}>Features</NavLinks>
                            </Link> */}

                            <NavLinks onClick={this.scrollToTeams.bind(this)} style={{ justifyContent: 'center', fontWeight: '600' }}>Planos</NavLinks>
                            
                            <NavLinks onClick={this.scrollToSignIn.bind(this)} style={{ justifyContent: 'center', fontWeight: '600' }}>Contato</NavLinks>
                            
                        </MobileNavRight>
                        :
                        ""
                }

                
                
            </HeaderBody>
        )
    }
}

export default Header;