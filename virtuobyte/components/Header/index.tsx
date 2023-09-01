"use client";
import React, { useState } from "react";
import ThemeToggler from "./ThemeToggle";
import menuData from "./menuData";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { useTheme } from "next-themes";
import { VscChromeClose } from "react-icons/vsc";

import { Menu } from "@/types/menu";
const Navbar: React.FC = () => {
  const [menu, setMenu] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { theme, setTheme } = useTheme();

  return (
    <>
    
      <div className="flex items-center sticky justify-between z-50 transition duration-300 ease-in-out">
        <div className="z-[50] text-[21px]">VirtuoByte</div>
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-4 z-[50]">
            {menu ? (
              <VscChromeClose
                size={26}
                className="dark:text-white cursor-pointer text-black "
                onClick={() => {
                  setMenu(!menu);
                }}
              />
            ) : (

              <RxHamburgerMenu
                size={26}
                className="dark:text-white cursor-pointer text-black "
                onClick={() => {
                  setMenu(!menu);
                }}
              />
            )}

            {/* <ThemeToggler /> */}
          </div>
        </div>
      </div>
      {menu && (
        <div id="menu">
          <div id="menu-items">
            {menuData.map((data: Menu) => (
              <Link
                href={data.path!}
                key={data.id}
                className={`text-black dark:text-white menu-item ${activeIndex === data.id ? "active" : ""
                  }`}
                onMouseOver={() => {
                  setActiveIndex(data.id);
                }}
              >
                {data.title}
              </Link>
            ))}
          </div>
          <div
            id={
              theme === "dark"
                ? "menu-background-pattern-dark"
                : "menu-background-pattern"
            }
            className={
              theme === "dark"
                ? "bg-black"
                : "bg-white"
            }
            style={{
              backgroundPosition: `0% -${activeIndex ? (activeIndex + 1) * 25 : 0
                }%`,
            }}
          ></div>
        </div>
      )}
    </>
  );
};

export default Navbar;
