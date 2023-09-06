"use client"
import Image from "next/legacy/image";
import React from "react";
import { Tile, TileBackground, TileContent, TileWrapper } from "@/utils/tile";
import {
  WorkBackground,
  WorkLeft,
  WorkLink,
  WorkRight,
} from "@/utils/works";

const Works = () => (
  <>
  <TileWrapper numOfPages={1}>
    <div className="absolute h-full w-full">
      <WorkBackground />
    </div>
    <TileBackground>
      <WorkBackground />
    </TileBackground>
    <TileContent>
      <Tile
        page={0}
        renderContent={({ progress }) => (
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full">
            <WorkLeft progress={progress}>
              <span>We built</span>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                <WorkLink href="https://pinkpanda.io/">Pink Panda</WorkLink>
                &#x27;s app.
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
               <img
                src='/assets/works/MacBook_Pro_16.png'
                alt="Pink Panda"
              />
            </WorkRight>
          </div>
        )}
      ></Tile>
    
       
    </TileContent>
  </TileWrapper>
  </>

);

export default Works;