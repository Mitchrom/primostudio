import Image from "next/image";
import React, { useEffect } from "react";

const CardRealisation = ({ reals }) => {
  useEffect(() => {
    console.log(reals);
  }, []);
  return (
    <div className="flex flex-row wrap">
      {reals.map((real, i) => (
        <div
          key={i}
          className="flex flex-col justify-between p-3 mx-auto w-[330px] min-h-[400px] border border-black"
        >
          <div>
            <Image
              src={real.photoCard.url}
              alt={real.photoCard.alt}
              width={100}
              height={100}
              loading="lazy"
              className="mx-auto"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold">{real.entreprise.entreprise}</h3>
            <p>{real.secteurActivite}</p>
          </div>
          <div className="text-[.825rem]">{real.descriptif}</div>
          <div>
            <h4>Services proposés</h4>
            <div className="flex flex-row wrap justify-evenly my-2">
              {real.services.map((service, j) => (
                <p
                  key={j}
                  className="text-[.6rem] p-0.5 border border-neutral-200 rounded-md bg-sky-200"
                >
                  {service.service}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardRealisation;
