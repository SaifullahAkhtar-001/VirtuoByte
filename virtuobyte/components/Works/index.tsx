'use client'
import Image from "next/legacy/image";
import React from "react";
import { Tile, TileBackground, TileContent, TileWrapper } from "@/utils/tile";
import {
  WorkBackground,
  // WorkContainer,
  WorkLeft,
  WorkLink,
  WorkRight,
} from "@/utils/works";

import AARASTA from '@/public/assets/works/MacBook_Pro_16.png'

const Works = () => (
  <>
    <TileWrapper numOfPages={2}>
      <TileContent>
        <Tile
          page={0}
          renderContent={({ progress }) => (
            <div className="flex h-full items-center flex-col  w-full ">
              <WorkLeft progress={progress}>
                <span>We built</span>
                <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                  <WorkLink href="https://pinkpanda.io/">Pink Panda</WorkLink>
                  &#x27;s app.
                </div>
              </WorkLeft>
              <WorkRight progress={progress}>
                <Image
                  src={AARASTA}
                 
                  alt="Pink Panda"
                  className="w-[800px]"
                />
              </WorkRight>
            </div>
          )}
        ></Tile>
        <Image
          src={AARASTA}
          alt="Pink Panda"
        
          layout="responsive"
          className="hidden z-[-200] opacity-0"
        />
         <Tile
          page={1}
          renderContent={({ progress }) => (
            <div className="flex h-full items-center flex-col  w-full ">
              <WorkLeft progress={progress}>
                <span>We built</span>
                <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                  <WorkLink href="https://pinkpanda.io/">Pink Panda</WorkLink>
                  &#x27;s app.
                </div>
              </WorkLeft>
              <WorkRight progress={progress}>
                <Image
                  src={AARASTA}
                  alt="Pink Panda"
                  className="w-[200px]"
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