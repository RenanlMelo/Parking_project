export const Map = () => {
  return (
    <>
      <section className="p-4">
        <div className="w-[90vw] aspect-[1/1.2] bg-black/50 mx-auto rounded-2xl" />
        <div className="flex flex-col justify-center items-center">
          <h2 className="mt-8 my-b-2 pl-1 font-semibold w-full text-start">
            Vagas ocupadas
          </h2>
          <div className="flex justify-between w-full px-1 text-[#707070]">
            <h4>%</h4>
            <h4>75</h4>
          </div>
          <div className="bg-[#978bff] w-[90vw] h-2 rounded-3xl" />
        </div>
      </section>
    </>
  );
};
