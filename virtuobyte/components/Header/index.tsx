"use client";
import React, { useState,useEffect } from "react";
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
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > 100) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[80px] duration-300 trasnsition ease-in-out");
      } else {
        setShow(" duration-300 trasnsition ease-in-out");
      }
      setLastScrollY(window.scrollY);
    } else {
      setShow("translate-y-0");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY, mobileMenu]);

  useEffect(() => {
    if (menu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menu]);

  return (
    <>
      <div
        className={`flex items-center sticky top-8 z-[10000]  justify-between ${show}`}
      >
        <div className={`z-[50] text-[25px] max-[600px]:text-[20px] font-[500] ${
          menu && "opacity-0"
        }`}>VirtuoByte</div>
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

            <ThemeToggler />
          </div>
        </div>
      </div>
      {menu && (
        <div id="menu">
          <div id="menu-items" className="sticky-menu-items">
            {menuData.map((data: Menu) => (
              <Link
                href={data.path!}
                key={data.id}
                className={`text-black dark:text-white menu-item ${
                  activeIndex === data.id ? "active" : ""
                }`}
                onMouseOver={() => {
                  setActiveIndex(data.id);
                }}
                onClick={()=>(setMenu(!menu))}
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
              backgroundPosition: `0% -${activeIndex ? (activeIndex + 1) * 25 : 0}%`,
            }}
          ></div>
        </div>
      )}
    </>
  );
};

export default Navbar;