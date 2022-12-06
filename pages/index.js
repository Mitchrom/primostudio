import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import {
  DivContact,
  FootDown,
  Footer,
  FootLink,
  FootUp,
  SocialMedia,
} from "../Components/Footer";
import { BtnAccueil, BtnHeader, FootBtn } from "../Components/Buttons";
import { Stats } from "../Components/item/Stats";
import { StatCard, StatContainer } from "../Components/Stats";
import {
  BlueLine,
  Presentation,
  PresentationImg,
  PresentationTxt,
} from "../Components/Body";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import { HeaderDesktop, HeaderMobile } from "../Components/Header";
import { Partenaires } from "../Components/item/Partenaires";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [ajd, setAjd] = useState(new Date());
  const [menuClicked, setMenuClicked] = useState(false);

  setTimeout(() => {
    setAjd(new Date());
  }, 1000);

  const getTheme = () => {
    if (ajd.getHours() < 6 || ajd.getHours() > 17) {
      setTheme("dark");
    }
    if (ajd.getHours() >= 6 && ajd.getHours() <= 17) {
      setTheme("light");
    }
  };

  useEffect(() => {
    setMounted(true);
    setMenuClicked(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getTheme();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ajd]);
  if (!mounted) return null;

  // const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="dark:bg-zinc-700">
      {/* ----------------------HEADER--------------------------- */}
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
      {/* --------------------------------------BODY----------------------------------------------------- */}
      <div className="w-auto max-w-screen-xl mx-auto">
        <Presentation className="pt-20">
          <PresentationImg>
            <Image
              src={"/photo-accueil-primo-studio.png"}
              alt="Photo représentative pour l'accueil du site Primo Studio"
              width={370}
              height={370}
              loading="lazy"
            />
          </PresentationImg>

          <PresentationTxt>
            <p className="text-sm mt-8">
              Agence web sur Saint-Laurent du Maroni
            </p>
            <h1 className="text-4xl font-semibold my-3">
              Primo Studio Agence Digitale 360°
            </h1>
            <p className="text-sm">
              Nous analysons votre business et vous proposons un projet
              correspondant à vos attentes.
            </p>
            <p>{ajd.toLocaleTimeString}</p>
            <BtnAccueil className="bg-primoblue">
              <p>Demander un devis</p>
            </BtnAccueil>
          </PresentationTxt>
        </Presentation>

        <p className="text-sm text-center mt-6 mb-3">
          Sociétés guyanaises qui soutiennent et travaillent avec l'agence Primo
          Studio
        </p>

        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          allowTouchMove={false}
          loop={true}
          slidesPerView={3}
          spaceBetween={20}
          className="flex flex-row justify-center"
        >
          {Partenaires.map((partenaire, i) => (
            <SwiperSlide key={i}>
              <Image
                src={partenaire.src}
                alt={partenaire.alt}
                width={126}
                height={126}
                loading="lazy"
                className=""
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="my-4">
          <p className="text-xs text-center">Nos services digitaux</p>
          <h2 className="text-2xl text-center font-bold mx-4 mb-3">
            Développez votre business avec des services adaptés à votre besoin
          </h2>
          <BlueLine>
            <hr className="border-2 rounded-3xl border-blue-700 " />
          </BlueLine>
        </div>

        <div className="flex flex-row flex-wrap justify-center">
          <div className="w-[340px] h-[195px] m-4 bg-red-300" />
          <div className="w-[340px] h-[195px] m-4 bg-sky-300" />
          <div className="w-[340px] h-[195px] m-4 bg-green-300" />
          <div className="w-[340px] h-[195px] m-4 bg-indigo-300" />
          <div className="w-[340px] h-[195px] m-4 bg-yellow-300" />
        </div>

        <div className="my-4">
          <p className="text-xs text-center">Primo Studio en chiffres</p>
          <h2 className="text-2xl text-center font-bold mx-4 mb-3">
            Nos chiffres en Guyane
          </h2>
          <BlueLine>
            <hr className="border-2 rounded-3xl border-blue-700 " />
          </BlueLine>
        </div>

        <StatContainer>
          {Stats.map((stat, i) => (
            <StatCard key={i}>
              <div className="w-1/5 ml-2">
                <p className="text-2xl">{stat.number}</p>
              </div>
              <div className="w-4/5">
                <p className="text-sm">{stat.txt}</p>
              </div>
            </StatCard>
          ))}
        </StatContainer>

        <div className="my-4">
          <p className="text-xs text-center">Réalisations web en Guyane</p>
          <h2 className="text-2xl text-center font-bold mx-4 mb-3">
            Nos projets digitaux en Guyane
          </h2>
          <BlueLine>
            <hr className="border-2 rounded-3xl border-blue-700 " />
          </BlueLine>
        </div>

        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          allowTouchMove={false}
          slidesPerView={2}
          spaceBetween={20}
          loop={true}
          className="mb-12"
        >
          <SwiperSlide className="mx-auto">
            <div className="w-auto border border-black">
              <div className="w-[250px] h-[250px] mx-auto bg-blue-500" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="mx-4">
            <div className="w-auto border border-black">
              <div className="w-[250px] h-[250px] mx-auto bg-blue-500" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="mx-4">
            <div className="w-auto border border-black">
              <div className="w-[250px] h-[250px] mx-auto bg-blue-500" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="mx-4">
            <div className="w-auto border border-black">
              <div className="w-[250px] h-[250px] mx-auto bg-blue-500" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* ----------------------------------------------------FOOTER---------------------------------------------- */}
      <Footer>
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
      </Footer>
    </div>
  );
}
