import { useRef, useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

interface props {
  image: string;
  setImage: React.Dispatch<React.SetStateAction<string>>;
}

export const Profile: React.FC<props> = ({ image, setImage }) => {
  const [name, setName] = useState("Renan Lara Melo");
  const [open, setOpen] = useState(false);
  const nbSize = useOutletContext<{ nbsize: number }>();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [tempName, setTempName] = useState(name);
  const [tempImage, setTempImage] = useState<string>(image);

  const handleEditProfile = () => {
    setOpen(!open);
    setTempName(name);
    setTempImage(image);
  };

  const handleImageChange = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setTempImage(URL.createObjectURL(file));
    } else {
      setTempImage("");
    }
  };

  useEffect(() => {
    const storedImage = localStorage.getItem("profileImage");
    if (storedImage) {
      setTempImage(storedImage);
      setImage(storedImage);
    }
    return () => {
      if (tempImage) {
        URL.revokeObjectURL(tempImage);
      }
    };
  }, []);

  const handleSave = () => {
    setName(tempName);
    setImage(tempImage);
    localStorage.setItem("profileImage", tempImage); // Save to localStorage
    setOpen(false);
  };

  return (
    <>
      <section className="h-[70vh] w-[100vw] relative">
        {tempImage ? (
          <img
            src={tempImage}
            alt=""
            className="absolute bg-[#505050] w-28 aspect-square rounded-full right-1/2 translate-x-1/2 -translate-y-1/2 border-4 border-white/20"
          />
        ) : (
          <div className="absolute bg-[#505050] w-28 aspect-square rounded-full right-1/2 translate-x-1/2 -translate-y-1/2 border-4 border-white/20" />
        )}
        <div className="flex flex-col justify-center items-center pt-16">
          <h2 className="font-bold text-[#eee] text-[6vw]">{name}</h2>
          <h3 className="font-semibold text-[#666666] text-[4.5vw]">
            Estudante
          </h3>
        </div>
        <div className="w-full px-[10vw] my-[5vh] flex flex-col justify-evenly items-center gap-y-4">
          <button
            onClick={handleEditProfile}
            className="rounded-full border border-white/30 px-8 py-4 mx-[10vw] w-full"
          >
            Editar perfil
          </button>
          <button className="bg-red-800 border-2 border-red-700 rounded-full px-8 py-4 mx-[10vw] w-full">
            Sair
          </button>
        </div>
        {open && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#202020] py-16 rounded-2xl flex flex-col gap-y-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              fill="#aaa"
              viewBox="0 0 48 48"
              onClick={handleEditProfile}
              className="absolute top-0 right-0 m-2 cursor-pointer"
              aria-label="Close edit profile"
            >
              <path d="M 39.486328 6.9785156 A 1.50015 1.50015 0 0 0 38.439453 7.4394531 L 24 21.878906 L 9.5605469 7.4394531 A 1.50015 1.50015 0 0 0 8.484375 6.984375 A 1.50015 1.50015 0 0 0 7.4394531 9.5605469 L 21.878906 24 L 7.4394531 38.439453 A 1.50015 1.50015 0 1 0 9.5605469 40.560547 L 24 26.121094 L 38.439453 40.560547 A 1.50015 1.50015 0 1 0 40.560547 38.439453 L 26.121094 24 L 40.560547 9.5605469 A 1.50015 1.50015 0 0 0 39.486328 6.9785156 z"></path>
            </svg>
            <div className="flex flex-col mx-[10vw]">
              <h4 className="px-[4vw] font-semibold text-[5vw]">Nome</h4>
              <input
                type="text"
                value={tempName}
                onChange={(e) => setTempName(e.currentTarget.value)}
                className="bg-[#202020] border border-white/30 py-2 rounded-full px-[4vw]"
                aria-label="Name"
              />
            </div>
            <div className="flex flex-col mx-[10vw]">
              <h4 className="px-[4vw] font-semibold text-[5vw]">
                Foto de Perfil
              </h4>
              <input
                ref={inputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileSelected}
                aria-label="Profile picture upload"
              />
              <button
                onClick={handleImageChange}
                className="bg-[#202020] border border-white/30 py-2 rounded-full px-[4vw] text-start"
                aria-label="Choose profile picture"
              >
                Escolher foto de perfil
              </button>
            </div>
            <button
              onClick={handleSave}
              className="text-blue-600 text-[4vw] border-2 border-blue-600/80 px-4 py-2 mx-[10vw] mt-[2vh] rounded-full"
            >
              Salvar
            </button>
          </div>
        )}
      </section>
    </>
  );
};
