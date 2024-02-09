"use client";
import React from "react";
import { dataNavbar } from "@/data/Navbar";
import { CgMenu, CgMenuRight } from "react-icons/cg";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-transparent z-10 border-3 my-2 fixed w-full min-h-screen ">
      <div className={`${scrolling ? "bg-white shadow-xl" : "bg-white bg-opacity-50"} flex justify-between px-8 py-2 rounded-full mx-8`}>
        <div className="flex justify-center items-center">
          <img src="./Logo.png" className="w-[100%] max-w-[200px] max-h-[60px] gap-5"></img>
        </div>
        <div className="items-center lg:hidden">
          <button
            className="w-[60px] h-[60px] flex justify-center items-center"
            onClick={() => {
              setMenu(true);
            }}
          >
            <CgMenu />
          </button>
        </div>
        <div className="justify-center  gap-4 items-center hidden lg:flex">
          {dataNavbar.map((data, idx) => {
            return (
              <Link legacyBehavior href={data.link} passHref key={idx}>
                <a className="hover:bg-[#FCECD7] flex items-center p-4 rounded-full text-xl font-montserrat">{data.name}</a>
              </Link>
            );
          })}
        </div>
      </div>
      {menu ? (
        <a
          onClick={() => {
            setMenu(false);
          }}
          className="z-top-top fixed  flex  min-h-screen w-screen items-center justify-center px-8 backdrop-blur-md "
        >
          <div className="shadow-black-700/50 flex w-full max-w-[430px] flex-col items-center rounded-md bg-white py-4 drop-shadow-xl">
            {dataNavbar.map((data, idx) => {
              return (
                <Link legacyBehavior href={data.link} passHref key={idx}>
                  <a className=" flex  h-[50px] w-full items-center justify-center border border-b-3 font-montserrat  hover:bg-[#FCECD7]">{data.name}</a>
                </Link>
              );
            })}
            <button
              onClick={() => {
                setMenu(false);
              }}
              className="flex  h-[50px] w-full items-center justify-center font-montserrat hover:bg-[#FCECD7"
            >
              Close
            </button>
          </div>
        </a>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Navbar;
