import Image from "next/image";
import React, { useState } from "react";
import styled from "styled-components";
import { BtnHeader } from "./Buttons";

const HeaderDesktop = styled.div`
  display: none;

  @media (min-width: 769px) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    min-width: 350px;
  }
`;

const HeaderMobile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Header = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  return (
    <nav className="flex flex-row justify-center bg-slate-50 dark:bg-slate-600 shadow-lg dark:shadow-none w-full fixed z-10 h-[70px] ">
      <div className="max-w-screen-xl flex flex-row justify-between w-full z-30 bg-slate-50 dark:bg-slate-600">
        <div className="flex flex-row items-center pl-6">
          <Image
            src={"/logo-primo-studio-header.svg"}
            alt="Logo de la société Primo-Studio"
            width={37}
            height={33}
            loading="lazy"
          />
          <p className="font-semibold text-large mx-2">Primo-Studio</p>
        </div>
        <div className="flex flex-row items-center justify-center pr-6">
          <HeaderDesktop>
            <p>Accueil</p>
            <p>Réalisations</p>
            <p>A propos</p>
          </HeaderDesktop>
          <BtnHeader>
            <a
              href="#"
              className="text-xs font-semibold flex flex-row items-center"
            >
              Contactez-nous!
              <Image
                src={"/icone-whatsapp-bleu.svg"}
                alt="Icone What's App"
                width={20}
                height={20}
                loading="lazy"
                className="ml-2"
              />
            </a>
          </BtnHeader>
          <HeaderMobile>
            <Image
              src={"/icone-menu-header.svg"}
              alt="Icone menu du header version mobile"
              width={24}
              height={24}
              loading="lazy"
              onClick={() => setMenuClicked(!menuClicked)}
            />
          </HeaderMobile>
        </div>
      </div>
      {menuClicked ? (
        <div className="max-w-screen-xl flex flex-col absolute z-20 rounded-b-3xl bg-primoblue inset-x-0 -bottom-48 animate-down shadow-lg dark:shadow-none">
          <a className="mx-auto my-5 text-slate-300" href="#">
            Accueil
          </a>
          <a className="mx-auto my-5 text-slate-300" href="#">
            Réalisations
          </a>
          <a className="mx-auto my-5 text-slate-300" href="#">
            A propos
          </a>
        </div>
      ) : (
        <div className="max-w-screen-xl flex flex-col absolute z-20 rounded-b-3xl bg-primoblue inset-x-0 -translate-y-full animate-up">
          <a className="mx-auto my-5 text-slate-300" href="#">
            Accueil
          </a>
          <a className="mx-auto my-5 text-slate-300" href="#">
            Réalisations
          </a>
          <a className="mx-auto my-5 text-slate-300" href="#">
            A propos
          </a>
        </div>
      )}
    </nav>
  );
};

export default Header;
