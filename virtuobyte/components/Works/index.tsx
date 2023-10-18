"use client";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { Tile, TileContent, TileWrapper } from "@/utils/tile";
import { WorkLeft, WorkLink, WorkRight } from "@/utils/works";

import useWindowDimension from "@/hooks/useWindowDimension";

const Works = () => {
  const windowDimension: null | number = useWindowDimension();

  return (
    <>
      <TileWrapper numOfPages={2.01}>
        <TileContent>
          <Tile
            page={0}
            renderContent={({ progress }) => (
              <div className="flex h-full items-center flex-col   w-full ">
                <WorkLeft progress={progress}>
                  <span>We built</span>
                  <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                    <WorkLink href="https://pinkpanda.io/">AARASTA</WorkLink>
                    &#x27;s app.
                  </div>
                </WorkLeft>
                <WorkRight progress={progress}>
                  <Image
                    layout="responsive"
                    width={501}
                    height={1024}
                    src={
                      windowDimension && windowDimension <= 610
                        ? "/assets/works/AARASTA_MOBILE.png"
                        : "/assets/works/AARASTA.png"
                    }
                    alt="Pink Panda"
                  />
                </WorkRight>
              </div>
            )}
          ></Tile>

          <Tile
            page={1}
            renderContent={({ progress }) => (
              <div className="flex h-full items-center flex-col   w-full ">
                <WorkLeft progress={progress}>
                  <span>We built</span>
                  <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                    <WorkLink href="https://pinkpanda.io/">AARASTA</WorkLink>
                    &#x27;s app.
                  </div>
                </WorkLeft>
                <WorkRight progress={progress}>
                  <Image
                    layout="responsive"
                    width={501}
                    height={1024}
                    src={
                      windowDimension && windowDimension <= 610
                        ? "/assets/works/AARASTA_MOBILE.png"
                        : "/assets/works/AARASTA.png"
                    }
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
};

export default Works;
