import { useNavigate, useOutletContext } from "react-router-dom";

interface CarSpace {
  name: string;
  slug: string;
  img: string;
  vagas: string;
  total: string;
}

export const CarSpaces = () => {
  const navigate = useNavigate();
  const { filteredItems } = useOutletContext<{ filteredItems: CarSpace[] }>();

  const handleClick = (slug: string) => {
    if (slug) navigate(`/${slug}`);
  };

  return (
    <div className="grid grid-cols-2 grid-rows-3 mt-4 px-4 gap-x-3 gap-y-6 pb-64">
      {filteredItems.map((item, index) => (
        <div key={index}>
          <div
            key={index}
            onClick={() => handleClick(item.slug)}
            className="flex flex-col justify-start items-start h-[200px] cursor-pointer relative"
          >
            <img
              className="rounded-xl h-32 w-full object-cover"
              src={item.img}
              alt=""
            />
            <div className="mt-2 w-full">
              <h5 className="text-[#eee] font-medium leading-5 w-full">
                {item.name}
              </h5>
              <h6 className="text-[#858585] font-semibold w-full">
                {item.vagas} / {item.total}
              </h6>
              <div className="bg-[#ddd] h-1 rounded-full">
                <div
                  style={{
                    width: `${
                      (parseInt(item.vagas) / parseInt(item.total)) * 100
                    }%`,
                  }}
                  className="bg-[#0059a6] h-1 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
