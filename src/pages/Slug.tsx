import { useParams } from "react-router-dom";
import { carSpaceList } from "../components/CarSpacesList";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export const Slug = () => {
  const { slug } = useParams();
  console.log("Slug da URL:", slug);

  const carSpace = carSpaceList.find((item) => item.slug === slug);
  console.log("CarSpace encontrado:", carSpace);

  if (!carSpace) {
    return <div>Estacionamento não encontrado</div>;
  }

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Zoom>
        <img className="w-[100vw]" src={carSpace.img} alt={carSpace.name} />
      </Zoom>
      <a
        href="/"
        className="bg-[#202020] rounded-full w-12 h-12 absolute top-0 left-0 m-4 flex justify-center items-center"
      >
        <svg
          width="21"
          height="30"
          viewBox="0 0 112 160"
          className="-rotate-90"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M48.5 152C48.5 156.142 51.8579 159.5 56 159.5C60.1421 159.5 63.5 156.142 63.5 152H48.5ZM61.3033 2.6967C58.3744 -0.232233 53.6256 -0.232233 50.6967 2.6967L2.96699 50.4264C0.0380592 53.3553 0.0380592 58.1041 2.96699 61.033C5.89592 63.9619 10.6447 63.9619 13.5736 61.033L56 18.6066L98.4264 61.033C101.355 63.9619 106.104 63.9619 109.033 61.033C111.962 58.1041 111.962 53.3553 109.033 50.4264L61.3033 2.6967ZM63.5 152L63.5 8H48.5L48.5 152H63.5Z"
            fill="#aaa"
          />
        </svg>
      </a>
      <h1 className="font-bold text-[6vw] text-start w-full pt-4 px-5">
        {carSpace.name}
      </h1>
      <p className="font-semibold text-[#898989] text-[4.5vw] text-start w-full px-5">
        Vagas disponíveis: {carSpace.vagas}
      </p>
      <p className="font-semibold text-[#898989] text-[4.5vw] text-start w-full px-5">
        Número total de vagas: {carSpace.total}
      </p>
      <p className="font-semibold text-[#898989] text-[4.5vw] text-start w-full px-5 mt-[4vh]">
        Porcentagem de vagas ocupadas:
      </p>
      <div className="mt-4 bg-[#ddd] h-2 rounded-full w-[90vw]">
        <div
          style={{
            width: `${(carSpace.vagas / carSpace.total) * 100}%`,
          }}
          className="bg-[#0059a6] h-full"
        />
      </div>
    </div>
  );
};
