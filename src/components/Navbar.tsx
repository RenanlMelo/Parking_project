import { useEffect } from "react";

interface props {
  setNbSize: React.Dispatch<React.SetStateAction<number>>;
}

export const Navbar: React.FC<props> = ({ setNbSize }) => {
  useEffect(() => {
    const section = document.getElementById("nbsection");
    if (section) {
      const size = section.clientHeight;
      setNbSize(size);
    }
  }, [setNbSize]);

  return (
    <section
      id="nbsection"
      className="fixed grid grid-cols-3 grid-rows-1 px-10 justify-evenly items-center bottom-0 right-0 bg-[#1d1d1d] h-[10vh] w-[100vw] text-[3vw] text-[#aaa] z-50"
    >
      <a href="/" className="flex flex-col justify-center items-center h-full">
        <svg
          height="28"
          width="28"
          viewBox="0 0 48 48"
          fill="#aaa"
          xmlns="http://www.w3.org/2000/svg"
          className="my-[2px]"
        >
          <path d="M24 4c-7.73 0-14 6.27-14 14 0 10.5 14 26 14 26s14-15.5 14-26c0-7.73-6.27-14-14-14zm0 19c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
          <path d="M0 0h48v48h-48z" fill="none" />
        </svg>
        <span>Vagas</span>
      </a>
      <a
        href="/map"
        className="flex flex-col justify-center items-center h-full"
      >
        <svg
          enableBackground="new 0 0 64 64"
          className="translate-x-[2px] my-[2px]"
          height="28px"
          width="28px"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 64 64"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g>
            <g>
              <path
                d="M49.162,9.574c-0.701,0-1.172,0.068-1.418,0.136v4.487c0.291,0.066,0.652,0.091,1.148,0.091    c1.824,0,2.953-0.925,2.953-2.48C51.846,10.408,50.875,9.574,49.162,9.574z"
                fill="#aaa"
              />
              <path
                d="M60.779,0.807H38.133c-1.734,0-3.139,1.327-3.139,2.964v21.382c0,1.637,1.404,2.964,3.139,2.964h22.646    c1.73,0,3.139-1.327,3.139-2.964V3.771C63.918,2.134,62.51,0.807,60.779,0.807z M53.852,15.323    c-1.172,1.104-2.908,1.601-4.939,1.601c-0.451,0-0.854-0.021-1.168-0.065v5.432h-3.406V7.297c1.059-0.18,2.547-0.314,4.643-0.314    c2.119,0,3.631,0.406,4.646,1.217c0.971,0.766,1.623,2.029,1.623,3.518C55.25,13.204,54.752,14.467,53.852,15.323z"
                fill="#aaa"
              />
            </g>
            <path
              d="M54.766,31.155H6.132l10.091-17.432c0,0,0.365-0.716,2.067-0.716h10.441c0,0,2.477,0.168,2.386-1.549   c-0.092-0.911-0.593-1.535-1.672-1.535c-1.064,0-13.891,0-13.891,0s-0.654,0.03-1.369,1.262c-0.638,1.094-9.56,16.551-11.55,20.016   c-1.444,0.259-2.554,1.672-2.554,3.389v15.821c0,1.915,1.354,3.435,3.025,3.435h3.024v7.584c0,0.943,0.609,1.703,1.369,1.703h4.878   c0.744,0,1.367-0.76,1.367-1.703v-7.584h30.457v7.646c0,0.942,0.607,1.702,1.354,1.702h4.816c0.744,0,1.354-0.76,1.354-1.702   v-7.646h3.039c1.672,0,3.025-1.52,3.025-3.435V34.59C57.791,32.69,56.438,31.155,54.766,31.155z M11.453,47.729   c-2.885,0-5.225-2.34-5.225-5.225c0-2.886,2.339-5.225,5.225-5.225s5.224,2.339,5.224,5.225   C16.677,45.389,14.338,47.729,11.453,47.729z M46.574,47.729c-2.885,0-5.225-2.34-5.225-5.225c0-2.886,2.34-5.225,5.225-5.225   s5.223,2.339,5.223,5.225C51.797,45.389,49.459,47.729,46.574,47.729z"
              fill="#aaa"
            />
          </g>
        </svg>
        <span>Mapa</span>
      </a>
      <a
        href="profile"
        className="flex flex-col justify-center items-center h-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          fill="#aaa"
          width="24px"
          height="24px"
          className="my-[4px]"
        >
          <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
        </svg>
        <span>Perfil</span>
      </a>
    </section>
  );
};
