import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import { Header } from "./Header";

export const Layout: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState(0);

  return (
    <>
      <div className="flex relative">
        <Sidebar open={open} setOpen={setOpen} size={size} setSize={setSize} />

        <div
          className="transition-transform duration-300"
          style={{
            transform: open
              ? `translateX(calc(${size}px - 1px))`
              : `translateX(0)`,
          }}
        >
          <Header open={open} setOpen={setOpen} size={size} />
          <Outlet />
        </div>
      </div>
      <Navbar />
    </>
  );
};
