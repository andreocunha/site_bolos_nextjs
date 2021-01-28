import React, { Component, Fragment } from "react";

import {
    BaseDiv,
    StartDiv,
    StartImage,
    StartHeading,
    StartText,
    StartButton,
    ServicesDiv,
    ServicesSegment,
    ServicesItem,
    ItemImageContainer,
    ItemImage,
    ItemHeading,
    ItemText,
    WorksDiv,
    WorksDivLeft,
    WorksImage,
    WorksDivRight,
    WorksHeading,
    WorksTextLink,
    ReviewDiv,
    ReviewIcon,
    ReviewCards,
    ReviewText,
    ReviewProfile,
    ReviewImageContainer,
    ReviewImage,
    ReviewDetail,
    ReviewName,
    ReviewTitle,

} from "./snippets";
import Footer from "./Footer";


class HomePage extends Component {

    scrollToFeatures() {
        document.getElementById("featuresId").scrollIntoView({
            behavior: 'smooth'
        });
    }

    render() {
        return (
            <BaseDiv>
                <StartDiv>
                    <StartImage src="static/images/cozinheira.png" />

                    <StartHeading>Doces da Betânea</StartHeading>

                    <StartText>Os melhores doces e bolos da grande Vitória você encontra aqui. Venha conhecer!!</StartText>

                    <StartButton onClick={this.scrollToFeatures.bind(this)}>Começar</StartButton>
                </StartDiv>

                <ServicesDiv id="featuresId">
                    <ServicesSegment>
                        <ServicesItem>
                            <ItemImageContainer>
                                <ItemImage src="static/images/piece-of-cake.svg" />
                            </ItemImageContainer>
                            <ItemHeading>Bolo de chocolate</ItemHeading>
                            <ItemText>Aqui vai ter alguma descrição bem bacana do bolo. Aqui vai ter alguma descrição bem bacana do bolo. Aqui vai ter alguma descrição bem bacana do bolo.</ItemText>
                        </ServicesItem>

                        <ServicesItem>
                            <ItemImageContainer>
                                <ItemImage src="static/images/birthday-cake.svg" />
                            </ItemImageContainer>
                            <ItemHeading>Bolo de aniversário</ItemHeading>
                            <ItemText>Aqui vai ter alguma descrição bem bacana do bolo. Aqui vai ter alguma descrição bem bacana do bolo. Aqui vai ter alguma descrição bem bacana do bolo.</ItemText>
                        </ServicesItem>
                    </ServicesSegment>

                    <ServicesSegment>
                        <ServicesItem>
                            <ItemImageContainer>
                                <ItemImage src="static/images/piece-of-cake.svg" />
                            </ItemImageContainer>
                            <ItemHeading>Bolo de chocolate</ItemHeading>
                            <ItemText>Aqui vai ter alguma descrição bem bacana do bolo. Aqui vai ter alguma descrição bem bacana do bolo. Aqui vai ter alguma descrição bem bacana do bolo.</ItemText>
                        </ServicesItem>

                        <ServicesItem>
                            <ItemImageContainer>
                                <ItemImage src="static/images/birthday-cake.svg" />
                            </ItemImageContainer>
                            <ItemHeading>Bolo de aniversário</ItemHeading>
                            <ItemText>Aqui vai ter alguma descrição bem bacana do bolo. Aqui vai ter alguma descrição bem bacana do bolo. Aqui vai ter alguma descrição bem bacana do bolo.</ItemText>
                        </ServicesItem>
                    </ServicesSegment>
                </ServicesDiv>

                <WorksDiv>
                    <WorksDivLeft>
                        <WorksImage src="static/images/bolo.png" />
                    </WorksDivLeft>

                    <WorksDivRight>
                        <WorksHeading>Bolos deliciosos!</WorksHeading>
                        <ItemText style={{ textAlign: 'left', margin: '20px 0' }}>
                            Alguma descrição aqui. Alguma descrição aqui. Alguma descrição aqui. Alguma descrição aqui. Alguma descrição aqui.
                                    <br /><br />
                            Outra descrição aqui. Outra descrição aqui. Outra descrição aqui. Outra descrição aqui. Outra descrição aqui. Outra descrição aqui. Outra descrição aqui.
                        </ItemText>
                    </WorksDivRight>
                </WorksDiv>

                <ReviewDiv id="teamsId">
                    <ReviewCards>
                        <ReviewText><i>Descrição de algum plano mensal/semestral ou anual aqui</i></ReviewText>
                        <ReviewProfile>
                            <ReviewImageContainer>
                                <ReviewImage src="static/images/money.svg" />
                            </ReviewImageContainer>

                            <ReviewDetail>
                                <ReviewName>R$ 100,00</ReviewName>
                                <ReviewTitle>Formas de pagamento</ReviewTitle>
                            </ReviewDetail>
                        </ReviewProfile>
                    </ReviewCards>

                    <ReviewCards>
                        <ReviewText><i>Descrição de algum plano mensal/semestral ou anual aqui</i></ReviewText>
                        <ReviewProfile>
                            <ReviewImageContainer>
                                <ReviewImage src="static/images/money.svg" />
                            </ReviewImageContainer>

                            <ReviewDetail>
                                <ReviewName>R$ 100,00</ReviewName>
                                <ReviewTitle>Formas de pagamento</ReviewTitle>
                            </ReviewDetail>
                        </ReviewProfile>
                    </ReviewCards>

                    <ReviewCards>
                        <ReviewText><i>Descrição de algum plano mensal/semestral ou anual aqui</i></ReviewText>
                        <ReviewProfile>
                            <ReviewImageContainer>
                                <ReviewImage src="static/images/money.svg" />
                            </ReviewImageContainer>

                            <ReviewDetail>
                                <ReviewName>R$ 100,00</ReviewName>
                                <ReviewTitle>Formas de pagamento</ReviewTitle>
                            </ReviewDetail>
                        </ReviewProfile>
                    </ReviewCards>
                </ReviewDiv>

                <Footer/>
                
            </BaseDiv>
        );
    }
}

export default HomePage;