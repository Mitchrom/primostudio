import React, { useEffect } from "react";
import { BlueLine } from "../Components/Body";
import CardRealisation from "../Components/CardRealisation";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { request } from "./api/datocms";

const REALISATIONS_QUERY = `
query MyQuery {
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
    query: REALISATIONS_QUERY,
  });
  return {
    props: { data },
  };
}

const Realisations = (props) => {
  const { data } = props;
  const reals = data.allRealisations;
  useEffect(() => {
    console.log(reals);
  }, []);

  return (
    <>
      <Header />

      <div className="py-32">
        <div>
          <h1>Les réalisations de Primo-Studio dans l'Ouest Guyanais</h1>
        </div>

        <div>
          <h2 className="text-center py-3">Nos projets guyanais</h2>
          <BlueLine>
            <hr className="border-2 rounded-3xl border-blue-700 " />
          </BlueLine>
        </div>

        <CardRealisation reals={reals} />
      </div>

      <Footer />
    </>
  );
};

export default Realisations;
