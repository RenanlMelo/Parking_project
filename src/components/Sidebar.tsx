import React, { useEffect, useState } from "react";

interface props {
  image: string;
  setImage: React.Dispatch<React.SetStateAction<string>>;
  nbSize: number;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSize: React.Dispatch<React.SetStateAction<number>>;
}

export const Sidebar: React.FC<props> = ({
  image,
  setImage,
  nbSize,
  open,
  setOpen,
  setSize,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [tempName, setTempName] = useState(name);
  const [tempImage, setTempImage] = useState<string>(image);

  const handleToggle = () => {
    setOpen(!open);
    if (showDropdown) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"; // Trava o scroll
      document.body.style.touchAction = "none"; // Previne gestos no mobile
    } else {
      document.body.style.overflow = "auto"; // Libera o scroll
      document.body.style.touchAction = "auto";
    }

    return () => {
      // Garante que o estilo seja restaurado ao desmontar o componente
      document.body.style.overflow = "auto";
      document.body.style.touchAction = "auto";
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      const sidebar = document.getElementById("sidebar");
      if (sidebar) {
        setSize(sidebar.clientWidth);
      }
    }
  }, [open, setSize]);

  const profileSettings = () => {};

  const signOut = () => {};

  return (
    <nav
      style={{
        height: `calc(100vh - ${nbSize}px)`,
        transform: open ? "translateX(0)" : "translateX(calc(-100% - 1px))",
        position: open ? "fixed" : "absolute",
      }}
      id="sidebar"
      className="bg-[#0a0a0a] z-20 w-[75vw] flex flex-col justify-between border-r border-white/10 transition-transform duration-300"
    >
      <div className="flex justify-between p-6 items-center">
        <div className="grid col-span-2 gap-x-2">
          <svg
            className="scale-90"
            width="32"
            height="32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.19 19h2.95c.18 0 .33-.15.33-.33A2.67 2.67 0 0 0 7.8 16h-.62c-.66 0-1.19.53-1.19 1.19v.62c.01.66.54 1.19 1.2 1.19Z"
              fill="url(#a)"
            />
            <g filter="url(#b)">
              <path
                d="M7.99 29h-2c-.55 0-1-.45-1-1v-4h4v4c0 .55-.45 1-1 1Z"
                fill="url(#c)"
              />
            </g>
            <g filter="url(#d)">
              <path
                d="M25.99 29h-2c-.55 0-1-.45-1-1v-4h4v4c0 .55-.45 1-1 1Z"
                fill="url(#e)"
              />
            </g>
            <path
              d="M24.797 19h-2.931a.332.332 0 0 1-.328-.33c0-1.47 1.182-2.67 2.653-2.67h.616c.656 0 1.183.53 1.183 1.19v.62c-.01.66-.537 1.19-1.193 1.19Z"
              fill="url(#f)"
            />
            <path
              d="M24.95 18H7.03a3.637 3.637 0 0 0-2.04 3.27V24h22v-2.73c0-1.39-.79-2.66-2.04-3.27Z"
              fill="url(#g)"
            />
            <path
              d="M24.95 18H7.03a3.637 3.637 0 0 0-2.04 3.27V24h22v-2.73c0-1.39-.79-2.66-2.04-3.27Z"
              fill="url(#h)"
            />
            <path
              d="M24.99 26h-18c-1.1 0-2-.9-2-2h22a2 2 0 0 1-2 2Z"
              fill="url(#i)"
            />
            <path
              d="M24.99 26h-18c-1.1 0-2-.9-2-2h22a2 2 0 0 1-2 2Z"
              fill="url(#j)"
            />
            <path
              d="M24.99 26h-18c-1.1 0-2-.9-2-2h22a2 2 0 0 1-2 2Z"
              fill="url(#k)"
            />
            <g filter="url(#l)">
              <path
                d="M24.927 20c-.515 0-.937.45-.937 1v1c0 .55.422 1 .938 1h1.874v-1.73c0-.44-.071-.87-.212-1.27h-1.663Z"
                stroke="url(#m)"
                strokeWidth=".2"
              />
            </g>
            <path
              d="M24.99 20c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h2v-1.73c0-.44-.077-.87-.227-1.27H24.99Z"
              fill="url(#n)"
            />
            <g filter="url(#o)">
              <path
                d="M7.99 22v-1c0-.55-.424-1-.943-1l-1.683.015a3.72 3.72 0 0 0-.202 1.255V23h1.885c.519 0 .943-.45.943-1Z"
                stroke="url(#p)"
                strokeWidth=".2"
              />
            </g>
            <path
              d="M7.99 22v-1c0-.55-.45-1-1-1l-1.785.015c-.15.4-.215.815-.215 1.255V23h2c.55 0 1-.45 1-1Z"
              fill="url(#q)"
            />
            <path
              d="M7.99 22v-1c0-.55-.45-1-1-1l-1.785.015c-.15.4-.215.815-.215 1.255V23h2c.55 0 1-.45 1-1Z"
              fill="url(#r)"
            />
            <g filter="url(#s)">
              <path
                d="M17.99 20h-1 1Zm0 0h-4c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h4-1 1c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1Z"
                stroke="url(#t)"
                strokeWidth=".2"
              />
            </g>
            <g filter="url(#u)">
              <path
                d="M17.99 20h-1 1-4c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h4-1 1c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1Z"
                fill="url(#v)"
              />
              <path
                d="M17.99 20h-1 1-4c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h4-1 1c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1Z"
                fill="url(#w)"
              />
            </g>
            <g filter="url(#x)">
              <path
                d="M17.33 25h-.67.67-2.67c-.37 0-.67.3-.67.67v.67c0 .37.3.67.67.67h2.67-.67.67c.37 0 .67-.3.67-.67v-.67c0-.37-.3-.67-.67-.67Z"
                fill="url(#y)"
              />
              <path
                d="M17.33 25h-.67.67-2.67c-.37 0-.67.3-.67.67v.67c0 .37.3.67.67.67h2.67-.67.67c.37 0 .67-.3.67-.67v-.67c0-.37-.3-.67-.67-.67Z"
                fill="url(#z)"
              />
            </g>
            <g filter="url(#A)">
              <path
                d="M10.49 23a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                stroke="url(#B)"
                strokeWidth=".2"
              />
            </g>
            <path
              d="M10.49 23a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
              fill="url(#C)"
            />
            <g filter="url(#D)">
              <path
                d="M21.49 23a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                stroke="url(#E)"
                strokeWidth=".2"
              />
            </g>
            <path
              d="M21.49 23a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
              fill="url(#F)"
            />
            <path
              d="M19.49 10h-7c-1.62 0-2.91 1.01-3.47 2.53L6.99 18h17.94l-2.03-5.47c-.57-1.52-1.79-2.53-3.41-2.53Z"
              fill="url(#G)"
            />
            <path
              d="M19.49 10h-7c-1.62 0-2.91 1.01-3.47 2.53L6.99 18h17.94l-2.03-5.47c-.57-1.52-1.79-2.53-3.41-2.53Z"
              fill="url(#H)"
            />
            <path
              d="M19.49 10h-7c-1.62 0-2.91 1.01-3.47 2.53L6.99 18h17.94l-2.03-5.47c-.57-1.52-1.79-2.53-3.41-2.53Z"
              fill="url(#I)"
            />
            <path
              d="M19.49 10h-7c-1.62 0-2.91 1.01-3.47 2.53L6.99 18h17.94l-2.03-5.47c-.57-1.52-1.79-2.53-3.41-2.53Z"
              fill="url(#J)"
            />
            <g filter="url(#K)" fillRule="evenodd" clipRule="evenodd">
              <path
                d="M9.255 12c.643-1.22 1.812-2 3.235-2h7c1.423 0 2.538.78 3.174 2H9.255Z"
                fill="url(#L)"
              />
              <path
                d="M9.255 12c.643-1.22 1.812-2 3.235-2h7c1.423 0 2.538.78 3.174 2H9.255Z"
                fill="url(#M)"
              />
            </g>
            <defs>
              <linearGradient
                id="c"
                x1="5.594"
                y1="26.506"
                x2="8.235"
                y2="26.506"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#361752" />
                <stop offset="1" stopColor="#2D1E3B" />
              </linearGradient>
              <linearGradient
                id="e"
                x1="23.594"
                y1="26.506"
                x2="26.235"
                y2="26.506"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#361752" />
                <stop offset="1" stopColor="#2D1E3B" />
              </linearGradient>
              <linearGradient
                id="g"
                x1="15.365"
                y1="24.813"
                x2="15.365"
                y2="18.875"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#E53A94" />
                <stop offset="1" stopColor="#F53759" />
              </linearGradient>
              <linearGradient
                id="h"
                x1="15.99"
                y1="17.737"
                x2="15.99"
                y2="19.631"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#CB545A" />
                <stop offset="1" stopColor="#CB545A" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="i"
                x1="14.892"
                y1="25.49"
                x2="27.7"
                y2="25.49"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9076A8" />
                <stop offset="1" stopColor="#A99EB7" />
              </linearGradient>
              <linearGradient
                id="j"
                x1="15.99"
                y1="26"
                x2="15.99"
                y2="25.25"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#7B539E" />
                <stop offset="1" stopColor="#7B539E" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="m"
                x1="24.576"
                y1="22.891"
                x2="26.38"
                y2="21.637"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D13459" stopOpacity="0" />
                <stop offset="1" stopColor="#D13459" />
              </linearGradient>
              <linearGradient
                id="n"
                x1="23.834"
                y1="20.375"
                x2="26.49"
                y2="23"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#EFCD4B" />
                <stop offset="1" stopColor="#FFF371" />
              </linearGradient>
              <linearGradient
                id="p"
                x1="5.751"
                y1="22.891"
                x2="7.558"
                y2="21.627"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FD4070" stopOpacity="0" />
                <stop offset="1" stopColor="#FD4070" />
              </linearGradient>
              <linearGradient
                id="q"
                x1="5.271"
                y1="20"
                x2="7.052"
                y2="22.813"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FDD86D" />
                <stop offset="1" stopColor="#FFE666" />
              </linearGradient>
              <linearGradient
                id="r"
                x1="8.302"
                y1="22.313"
                x2="7.24"
                y2="22.313"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFE96A" />
                <stop offset="1" stopColor="#FFE96A" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="t"
                x1="13.506"
                y1="20.141"
                x2="18.49"
                y2="23"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F83A70" />
                <stop offset="1" stopColor="#C51F66" />
              </linearGradient>
              <linearGradient
                id="v"
                x1="12.99"
                y1="21.5"
                x2="18.99"
                y2="21.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#362A59" />
                <stop offset="1" stopColor="#381F4E" />
              </linearGradient>
              <linearGradient
                id="w"
                x1="12.99"
                y1="21.844"
                x2="14.365"
                y2="21.844"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3D3861" />
                <stop offset="1" stopColor="#3A355F" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="y"
                x1="15.998"
                y1="25"
                x2="15.998"
                y2="27.01"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#998CAD" />
                <stop offset="1" stopColor="#9988B1" />
              </linearGradient>
              <linearGradient
                id="z"
                x1="15.995"
                y1="27.297"
                x2="15.995"
                y2="26.797"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#8F77AE" />
                <stop offset="1" stopColor="#8F77AE" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="B"
                x1="9.615"
                y1="22.891"
                x2="10.594"
                y2="20.444"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F84C91" />
                <stop offset="1" stopColor="#C21D62" />
              </linearGradient>
              <linearGradient
                id="E"
                x1="20.615"
                y1="22.891"
                x2="21.594"
                y2="20.444"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F84C91" />
                <stop offset="1" stopColor="#C21D62" />
              </linearGradient>
              <linearGradient
                id="G"
                x1="14.835"
                y1="12.051"
                x2="14.835"
                y2="17.313"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#289BFD" />
                <stop offset="1" stopColor="#50E2FF" />
              </linearGradient>
              <linearGradient
                id="H"
                x1="15.96"
                y1="11.875"
                x2="15.96"
                y2="13.563"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".259" stopColor="#1285EB" />
                <stop offset="1" stopColor="#1285EB" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="J"
                x1="24.429"
                y1="15.531"
                x2="24.155"
                y2="15.594"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".313" stopColor="#76EAFF" />
                <stop offset="1" stopColor="#76EAFF" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="L"
                x1="9.646"
                y1="11"
                x2="22.666"
                y2="11.002"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FA3344" />
                <stop offset="1" stopColor="#F83444" />
              </linearGradient>
              <linearGradient
                id="M"
                x1="22.664"
                y1="12.188"
                x2="20.865"
                y2="11.594"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF4E5B" />
                <stop offset="1" stopColor="#FF4E5B" stopOpacity="0" />
              </linearGradient>
              <filter
                id="b"
                x="4.99"
                y="24"
                width="4"
                height="5"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation=".375" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix values="0 0 0 0 0.396078 0 0 0 0 0.329412 0 0 0 0 0.466667 0 0 0 1 0" />
                <feBlend in2="shape" result="effect1_innerShadow_18_10575" />
              </filter>
              <filter
                id="d"
                x="22.99"
                y="24"
                width="4"
                height="5"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation=".375" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix values="0 0 0 0 0.396078 0 0 0 0 0.329412 0 0 0 0 0.466667 0 0 0 1 0" />
                <feBlend in2="shape" result="effect1_innerShadow_18_10575" />
              </filter>
              <filter
                id="l"
                x="23.79"
                y="19.8"
                width="3.212"
                height="3.4"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation=".05"
                  result="effect1_foregroundBlur_18_10575"
                />
              </filter>
              <filter
                id="o"
                x="4.962"
                y="19.8"
                width="3.228"
                height="3.4"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation=".05"
                  result="effect1_foregroundBlur_18_10575"
                />
              </filter>
              <filter
                id="s"
                x="12.79"
                y="19.8"
                width="6.4"
                height="3.4"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation=".05"
                  result="effect1_foregroundBlur_18_10575"
                />
              </filter>
              <filter
                id="u"
                x="12.49"
                y="19.9"
                width="6.5"
                height="3.1"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-.5" dy="-.1" />
                <feGaussianBlur stdDeviation=".5" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix values="0 0 0 0 0.117647 0 0 0 0 0.0352941 0 0 0 0 0.156863 0 0 0 1 0" />
                <feBlend in2="shape" result="effect1_innerShadow_18_10575" />
              </filter>
              <filter
                id="x"
                x="13.99"
                y="25"
                width="4.01"
                height="2.11"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy=".1" />
                <feGaussianBlur stdDeviation=".1" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix values="0 0 0 0 0.490196 0 0 0 0 0.458824 0 0 0 0 0.52549 0 0 0 1 0" />
                <feBlend in2="shape" result="effect1_innerShadow_18_10575" />
              </filter>
              <filter
                id="A"
                x="8.79"
                y="19.8"
                width="3.4"
                height="3.4"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation=".05"
                  result="effect1_foregroundBlur_18_10575"
                />
              </filter>
              <filter
                id="D"
                x="19.79"
                y="19.8"
                width="3.4"
                height="3.4"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation=".05"
                  result="effect1_foregroundBlur_18_10575"
                />
              </filter>
              <filter
                id="K"
                x="9.255"
                y="10"
                width="13.659"
                height="2"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx=".25" />
                <feGaussianBlur stdDeviation=".2" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix values="0 0 0 0 0.686275 0 0 0 0 0.278431 0 0 0 0 0.298039 0 0 0 1 0" />
                <feBlend in2="shape" result="effect1_innerShadow_18_10575" />
              </filter>
              <radialGradient
                id="a"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(-.8358 1.26362 -1.19203 -.78845 10.239 16.327)"
              >
                <stop stopColor="#3E355C" />
                <stop offset="1" stopColor="#36284C" />
              </radialGradient>
              <radialGradient
                id="f"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="rotate(123.319 8.477 15.11) scale(1.51217 1.42301)"
              >
                <stop stopColor="#3E355C" />
                <stop offset="1" stopColor="#36284C" />
              </radialGradient>
              <radialGradient
                id="k"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="rotate(123.802 .162 16.758) scale(1.1094 .60232)"
              >
                <stop offset=".31" stopColor="#694A84" />
                <stop offset="1" stopColor="#694A84" stopOpacity="0" />
              </radialGradient>
              <radialGradient
                id="C"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(1.76563 -1.90625 1.93154 1.78906 9.63 22.422)"
              >
                <stop stopColor="#fff" />
                <stop offset="1" stopColor="#E7C9F4" />
              </radialGradient>
              <radialGradient
                id="F"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(1.76563 -1.90625 1.93154 1.78906 20.63 22.422)"
              >
                <stop stopColor="#fff" />
                <stop offset="1" stopColor="#E7C9F4" />
              </radialGradient>
              <radialGradient
                id="I"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="rotate(131.448 9.191 11.121) scale(3.21025 1.15153)"
              >
                <stop offset=".373" stopColor="#23AAF5" />
                <stop offset="1" stopColor="#23AAF5" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
          <h2 className="place-self-center translate-y-[2px] font-semibold text-[calc(3.5vw+5px)] col-start-2">
            Facens Park
          </h2>
        </div>
        <svg
          onClick={handleToggle}
          xmlns="http://www.w3.org/2000/svg"
          fill="#eeeeee90"
          width="24"
          height="24"
          viewBox="0 0 48 48"
          tabIndex={0}
          role="button"
          aria-label="Toggle Sidebar"
        >
          <path d="M 39.486328 6.9785156 A 1.50015 1.50015 0 0 0 38.439453 7.4394531 L 24 21.878906 L 9.5605469 7.4394531 A 1.50015 1.50015 0 0 0 8.484375 6.984375 A 1.50015 1.50015 0 0 0 7.4394531 9.5605469 L 21.878906 24 L 7.4394531 38.439453 A 1.50015 1.50015 0 1 0 9.5605469 40.560547 L 24 26.121094 L 38.439453 40.560547 A 1.50015 1.50015 0 1 0 40.560547 38.439453 L 26.121094 24 L 40.560547 9.5605469 A 1.50015 1.50015 0 0 0 39.486328 6.9785156 z"></path>
        </svg>
      </div>

      <div className="flex justify-between items-center p-6 w-full mb-14">
        {tempImage ? (
          <img
            src={tempImage}
            alt=""
            className="bg-white/50 rounded-full w-8 h-8 pr-2"
          />
        ) : (
          <div className="bg-white/50 rounded-full w-8 h-8 pr-2" />
        )}
        <div className="flex items-center gap-x-3">
          <div className=" flex flex-col">
            <h3
              id="name"
              className="font-semibold text-[#fefefe] tracking-wide truncate max-w-[98%]"
            >
              Renan Lara Melo
            </h3>
            <h4
              id="email"
              className="text-[#8e8e8e] font-medium pl-px text-[3vw] truncate max-w-[90%]"
            >
              renanlarameleo@gmail.com
            </h4>
          </div>
        </div>
        <div
          className="p-2 relative"
          onClick={() => setShowDropdown(!showDropdown)}
          tabIndex={0}
          role="button"
          aria-label="Toggle Profile Options"
        >
          {showDropdown && (
            <div className="flex flex-col justify-evenly items-start gap-y-1 absolute bg-[#1f1f1f] top-0 -translate-y-full p-1 rounded-xl truncate border border-[#303030]">
              <a
                href="/profile"
                onClick={profileSettings}
                className="font-medium border-b border-[#303030] pb-[6px] pt-[7px] pl-3 pr-10 hover:bg-[#2f2f2f] rounded-lg"
              >
                View Profile
              </a>
              <p
                onClick={signOut}
                className="font-medium pb-[6px] pt-[7px] pl-3 pr-10 w-full hover:bg-[#2f2f2f] rounded-lg"
              >
                Sign Out
              </p>
            </div>
          )}
          <svg
            fill="none"
            height="25"
            width="25"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 6C8.89543 6 8 5.10457 8 4C8 2.89543 8.89543 2 10 2C11.1046 2 12 2.89543 12 4C12 5.10457 11.1046 6 10 6Z"
              fill="#d1d1d1"
            />
            <path
              d="M10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12Z"
              fill="#d1d1d1"
            />
            <path
              d="M10 18C8.89543 18 8 17.1046 8 16C8 14.8954 8.89543 14 10 14C11.1046 14 12 14.8954 12 16C12 17.1046 11.1046 18 10 18Z"
              fill="#d1d1d1"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};
