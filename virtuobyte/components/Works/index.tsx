'use client'
import Image from "next/image";
import React from "react";
import { Tile, TileBackground, TileContent, TileWrapper } from "@/utils/tile";
import {
  WorkBackground,
  // WorkContainer,
  WorkLeft,
  WorkLink,
  WorkRight,
} from "@/utils/works";

type Props = {};

const Works = () => (
  <TileWrapper numOfPages={4}>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
            <WorkLeft progress={progress}>
              <span>We designed and developed</span>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                <WorkLink href="https://www.storiapp.co/">Stori</WorkLink>
                &#x27;s face filters.
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <div className="relative">
                <div className="absolute rounded-[6%] w-[84.5%] left-[7.7%] top-[2.7%] overflow-hidden">
                  <video
                    id="coinbase-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    width="100%"
                  >
                    <source src="/assets/works/stori.mp4" type="video/mp4" />
                  </video>
                </div>
                <Image
                  src="/assets/iphone-bezels.webp"
                  layout="responsive"
                  width={840}
                  className="absolute top-0 left-0 right-0 bottom-0"
                  height={1620}
                  alt="Stori"
                />
              </div>
            </WorkRight>
          </div>
        )}
      ></Tile>
      <Tile
        page={1}
        renderContent={({ progress }) => (
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
            <WorkLeft progress={progress}>
              <span>We made</span>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                <WorkLink href="https://www.coinbase.com/">
                  Coinbase Wallet
                </WorkLink>{" "}
                faster.
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <div className="relative">
                <div className="absolute rounded-[6%] w-[84.5%] left-[7.7%] top-[2.7%] overflow-hidden">
                  <video
                    id="coinbase-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    width="100%"
                  >
                    <source
                      src="/assets/works/coinbase-wallet.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
                <Image
                  src="/assets/iphone-bezels.webp"
                  layout="responsive"
                  width={840}
                  className="absolute top-0 left-0 right-0 bottom-0"
                  height={1620}
                  alt="Stori"
                />
              </div>
            </WorkRight>
          </div>
        )}
      ></Tile>
      <Tile
        page={2}
        renderContent={({ progress }) => (
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
            <WorkLeft progress={progress}>
              <span>We built</span>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                <WorkLink href="https://pinkpanda.io/">Pink Panda</WorkLink>
                &#x27;s app.
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image
                src="/assets/works/pinkpanda.png"
                layout="responsive"
                width={840}
                height={1620}
                alt="Pink Panda"
              />
            </WorkRight>
          </div>
        )}
      ></Tile>
      <Tile
        page={3}
        renderContent={({ progress }) => (
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
            <WorkLeft progress={progress}>
              <span>We helped</span>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                <WorkLink href="https://showtime.io/">Showtime</WorkLink> ship
                faster.
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image
                src="/assets/works/showtime.png"
                layout="responsive"
                width={840}
                height={1620}
                alt="Showtime"
              />
            </WorkRight>
          </div>
        )}
      ></Tile>
    </TileContent>
  </TileWrapper>
);

export default Works;