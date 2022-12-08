import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { BtnAccueil } from "../Components/Buttons";
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
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Partenaires } from "../Components/item/Partenaires";
import { request } from "./api/datocms";
import CardRealisation from "../Components/CardRealisation";

const HOMEPAGE_QUERY = `
query MyQuery {
  allServiceCards {
    iconeService {
      url
    }
    service {
      service
    }
    caption1
    caption2
    caption3
    caption4
    bgColor {
      hex
    }
  },
    allRealisations {
    photoCard {
      url
      alt
    }
    entreprise {
      entreprise
    }
    secteurActivite
    descriptif
    services {
      service
    }
  }
}
`;
export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
  });
  return {
    props: { data },
  };
}

export default function Home(props) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [ajd, setAjd] = useState(new Date());

  const { data } = props;
  const cards = data.allServiceCards;
  const reals = data.allRealisations;
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
      <Header />
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
          {cards.map((card, i) => (
            <div
              key={i}
              className="flex flex-row shadow-xl my-4 w-[340px] h-[150px] mx-auto"
            >
              <div
                style={{ backgroundColor: card.bgColor.hex }}
                className="flex flex-col justify-around min-w-[120px] max-w-[120px]"
              >
                <div>
                  <Image
                    src={card.iconeService.url}
                    alt={"icone service " + card.service.service}
                    width={24}
                    height={24}
                    loading="lazy"
                  />
                  <p className="text-[15px] font-bold">
                    {card.service.service}
                  </p>
                </div>
                <div className="flex justify-center">
                  <button className="w-3/4">
                    <p className="text-xs">En savoir plus {">"}</p>
                  </button>
                </div>
              </div>
              <div className="flex flex-col self-center min-w-[225px] max-w-[225px]">
                <p className="text-xs font-medium mx-2 my-1 text-start">
                  {card.caption1}
                </p>
                <p className="text-xs font-medium mx-2 my-1 text-start">
                  {card.caption2}
                </p>
                <p className="text-xs font-medium mx-2 my-1 text-start">
                  {card.caption3}
                </p>
                <p className="text-xs font-medium mx-2 my-1 text-start">
                  {card.caption4}
                </p>
              </div>
            </div>
          ))}
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

        <CardRealisation reals={reals} />
      </div>
      <Footer />
    </div>
  );
}
