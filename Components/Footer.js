import styled from "styled-components";
import React from "react";
import Image from "next/image";
import { FootBtn } from "./Buttons";

const YELLOW = "#FCDA69";

const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
`;

const FootUp = styled.div`
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
  width: 100%;
`;

const FootDown = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${YELLOW};
  width: 100%;
`;

const DivContact = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 0px;
  border-bottom: 2px solid gray;

  img {
    margin-right: 10px;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 50%;
  margin: 8px auto;
`;

const FootLink = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  width: 95%;
  height: 100px;
  margin: 20px auto 25px auto;

  div {
    text-align: start;
    margin: auto 0;
  }
`;

const Footer = () => {
  return (
    <FooterDiv>
      <FootUp className="max-w-screen-xl mx-auto dark:bg-slate-600">
        <div>
          <SocialMedia>
            <Image
              src={"/icone-whatsapp.svg"}
              alt="icone What's App"
              width={24}
              height={24}
              loading="lazy"
            />
            <Image
              src={"/icone-instagram.svg"}
              alt="icone What's App"
              width={24}
              height={24}
              loading="lazy"
            />
            <Image
              src={"/icone-facebook.svg"}
              alt="icone What's App"
              width={24}
              height={24}
              loading="lazy"
            />
          </SocialMedia>

          <div className="w-fit mx-auto my-2">
            <p className="text-center">On discute ?</p>
            <FootBtn>Contactez-nous</FootBtn>
          </div>

          <div className="flex flex-col mx-auto w-fit">
            <DivContact>
              <Image
                src={"/icone-mail.svg"}
                alt=""
                width={24}
                height={24}
                loading="lazy"
              />
              <p>contact@primo-studio.fr</p>
            </DivContact>
            <DivContact>
              <Image
                src={"/icone-whatsapp.svg"}
                alt=""
                width={24}
                height={24}
                loading="lazy"
              />
              <p>+594 694 22 47 17</p>
            </DivContact>
            <DivContact>
              <Image
                src={"/icone-location.svg"}
                alt=""
                width={24}
                height={24}
                loading="lazy"
              />
              <div className="flex flex-col">
                <p>5 Allée des Belimbis,</p>
                <p>97320 Saint-Laurent du Maroni</p>
              </div>
            </DivContact>
            <DivContact>
              <Image
                src={"/icone-siret.svg"}
                alt=""
                width={24}
                height={24}
                loading="lazy"
              />
              <p>913190484 00018</p>
            </DivContact>
          </div>
        </div>

        <FootLink>
          <div>
            <a href="#">Accueil du site web</a>
          </div>
          <div>
            <a href="#">A propos de l'agence web</a>
          </div>
          <div>
            <a href="#">Réalisations Primo studio</a>
          </div>
          <div></div>
        </FootLink>
      </FootUp>
      <FootDown className="max-w-screen-xl mx-auto">
        <p className="mx-auto mt-6 mb-3">2022 All Right Reserved</p>
        <p className="mx-auto mt-3 mb-6">Utilisation des cookies</p>
        <p className="mx-auto mt-3 mb-6">Mention légales</p>
      </FootDown>
    </FooterDiv>
  );
};

export default Footer;
