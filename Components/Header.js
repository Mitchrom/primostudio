import Image from "next/image";
import Link from "next/link";
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
    <div className="flex flex-row justify-center bg-slate-50 dark:bg-slate-600 shadow-lg dark:shadow-none w-full fixed z-10 h-[70px] ">
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
            <Link href={"/"}>Accueil</Link>
            <Link href={"/Realisations"}>Réalisations</Link>
            <Link href={"/About"}>A propos</Link>
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
        <div className="max-w-screen-xl h-40 flex flex-col justify-evenly items-center absolute z-20 rounded-b-3xl bg-primoblue inset-x-0 -bottom-40 animate-down shadow-lg dark:shadow-none">
          <Link className="text-white" href={"/"}>
            Accueil
          </Link>
          <Link className="text-white" href={"/Realisations"}>
            Réalisations
          </Link>
          <Link className="text-white" href={"/About"}>
            A propos
          </Link>
        </div>
      ) : (
        <div className="max-w-screen-xl h-40 flex flex-col justify-evenly items-center absolute z-20 rounded-b-3xl bg-primoblue inset-x-0 -translate-y-full animate-up">
          <Link className="text-white" href={"/"}>
            Accueil
          </Link>
          <Link className="text-white" href={"/Realisations"}>
            Réalisations
          </Link>
          <Link className="text-white" href={"/About"}>
            A propos
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
