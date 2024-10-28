export const CarSpaces = () => {
  const carSpaceList = [
    { img: "/1.jpg", name: "Estacionamento Principal", vagas: 120 },
    {
      img: "/2.jpg",
      name: "Prédio L",
      vagas: 50,
    },
    { img: "/3.jpg", name: "Prédio B", vagas: 90 },
    { img: "/4.jpg", name: "Prédio C", vagas: 30 },
    { img: "/5.jpg", name: "LINCE", vagas: 80 },
    { img: "/6.jpg", name: "Cantina", vagas: 40 },
    { img: "/7.jpg", name: "Biblioteca", vagas: 20 },
    { img: "/8.jpg", name: "Portaria 1", vagas: 70 },
  ];

  return (
    <section className="grid grid-cols-2 mt-4 mb-24 px-4 gap-x-3 gap-y-6">
      {carSpaceList.map((item, index) => (
        <div
          key={index}
          className="flex flex-col justify-start items-start h-[200px]"
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
