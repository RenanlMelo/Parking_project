import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

interface props {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  size: number
}

export const Header: React.FC<props> = ({ open, setOpen, size }) => {
  const location = useLocation()
  const currentPath = location.pathname

  useEffect(() => {
    const textContent = document.getElementById('title')
    const inputContent = document.getElementById('inputDiv')
    if (textContent && inputContent) {
      if (currentPath === '/') textContent.innerText = 'Vagas'
      else if (currentPath === '/map') {
        textContent.innerText = 'Mapa do Campus'
        inputContent.style.display = 'none'
      } else {
        textContent.innerText = ''
        inputContent.style.display = 'none'
      }
    }
  }, [currentPath])

  return (
    <section
      className={`bg-[var(--main)] min-w-[100vw] flex flex-col p-6 pb-4`}>
      <svg
        onClick={() => setOpen(!open)}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="32"
        viewBox="0 0 30 30"
        fill="#ffffff">
        <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
      </svg>
      <h1 id="title" className="text-[calc(5vw+10px)] mt-4 mb-2 font-bold">
        Vagas
      </h1>
      <div id="inputDiv" className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="22"
          height="22"
          fill="#9499f6"
          viewBox="0 0 30 30"
          className="absolute top-1/2 -translate-y-1/2 translate-x-1/3">
          <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
        </svg>
        <label
          htmlFor="search"
          className="absolute text-[#9499f6] font-medium top-1/2 -translate-y-1/2 translate-x-9">
          Search
        </label>
        <input
          id="search"
          type="text"
          className="w-full h-7 bg-[#3d46ee] rounded-lg border-none py-4 focus:outline-1 focus:outline-white/20"
        />
      </div>
    </section>
  )
}
