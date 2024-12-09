import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export const Map = () => {
  return (
    <section className="p-4">
      <Zoom>
        <img
          src="/campus.png"
          alt="Campus Map"
          className="w-[90vw] aspect-[2/1] bg-black/50 mx-auto rounded-2xl"
        />
      </Zoom>

      <div className="flex flex-col justify-center items-center">
        <h2 className="mt-8 my-b-2 pl-1 font-semibold w-full text-start">
          Vagas ocupadas
        </h2>
        <div className="flex justify-between w-full px-1 text-[#707070] font-medium">
          <h4>%</h4>
          <h4>75</h4>
        </div>
        <div className="bg-[#181723] w-[90vw] rounded-3xl">
          <div className="bg-[#978bff] w-3/4 h-2 rounded-3xl" />
        </div>
      </div>
    </section>
  );
};
