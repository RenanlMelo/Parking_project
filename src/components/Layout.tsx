import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import { Header } from "./Header";
import { carSpaceList } from "./CarSpacesList";

export const Layout: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState(0);
  const [nbSize, setNbSize] = useState(0);
  const [filteredItems, setFilteredItems] = useState(carSpaceList);

  return (
    <>
      <div className="flex relative w-full h-[100vh]">
        <Sidebar
          nbSize={nbSize}
          open={open}
          setOpen={setOpen}
          setSize={setSize}
        />

        <div
          className="transition-transform duration-300 w-full"
          style={{
            transform: open
              ? `translateX(calc(${size}px - 1px))`
              : `translateX(0)`,
          }}
        >
          <Header
            open={open}
            setOpen={setOpen}
            setFilteredItems={setFilteredItems}
          />
          <Outlet context={{ filteredItems, nbSize }} />
        </div>
      </div>
      <Navbar setNbSize={setNbSize} />
    </>
  );
};
