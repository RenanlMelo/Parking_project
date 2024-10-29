import { useNavigate } from "react-router-dom";
import { carSpaceList } from "./CarSpacesList";

export const CarSpaces = () => {
  const navigate = useNavigate();

  const handleClick = (slug: string) => {
    if (slug) navigate(`/${slug}`);
  };

  return (
    <section className="grid grid-cols-2 mt-4 mb-24 px-4 gap-x-3 gap-y-6">
      {carSpaceList.map((item, index) => (
        <div
          key={index}
          onClick={() => handleClick(item.slug)}
          className="flex flex-col justify-start items-start h-[200px] cursor-pointer"
        >
          <img
            className="rounded-xl h-32 w-full object-cover"
            src={item.img}
            alt=""
          />
          <div className="mt-2">
            <h5 className="text-[#eee] font-medium leading-5">{item.name}</h5>
            <h6 className="text-[#858585] font-semibold">{item.vagas}</h6>
          </div>
        </div>
      ))}
    </section>
  );
};
