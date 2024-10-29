import { useParams } from "react-router-dom";
import { carSpaceList } from "../components/CarSpacesList";

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
      <div className="bg-[#202020] rounded-full w-12 h-12 absolute top-0 left-0 m-4" />
      <img className="w-full" src={carSpace.img} alt={carSpace.name} />
      <h1 className="font-bold text-[6vw] text-start w-full pt-4 px-5">
        {carSpace.name}
      </h1>
      <p className="font-semibold text-[#898989] text-[4.5vw] text-start w-full px-5">
        Vagas disponíveis: {carSpace.vagas}
      </p>
    </div>
  );
};
