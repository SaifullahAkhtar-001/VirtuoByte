import React from "react";
import Carousel from "./Carousel";
import CarouselItem from "./Carousel_Item";
import Review from "./Review";

const Testimonials: React.FC = () => {
  return (
    <Carousel className="text-black  dark:text-white py-10">
      <CarouselItem index={0}>
        <Review by="Ali (AARASTA)">
          Working with VirtuoByte on our ecommerce site has been an exceptional experience. They delivered high-quality software, shared our passion for creating valuable solutions, and consistently strived for excellence. I would wholeheartedly recommend VirtuoByte and their team; it&apos;s a 10/10 collaboration!
        </Review>
      </CarouselItem>
      <CarouselItem index={1}>
        <Review by="Asfaq (Elite Watches)">
          VirtuoByte to create our business landing site, and the results were nothing short of exceptional. VirtuoByte&apos;s attention to detail, creativity, and technical expertise shine through in every aspect of our website. The design is not only visually appealing but also functional and user-friendly, ensuring that visitors have a seamless experience.
        </Review>
      </CarouselItem>
      <CarouselItem index={2}>
        <Review by="Fatima (H&amp;F Cosmetics)">
          VirtuoByte crafted our website, which is the cornerstone of our business. Their dedication to delivering high-quality software, their shared passion for creating valuable solutions, and their relentless pursuit of excellence have left us thoroughly impressed.
        </Review>
      </CarouselItem>
      <CarouselItem index={3}>
        <Review by="Jawed (Khan Traders)">
          VirtuoByte&apos;s expertise in crafting our inventory management system was exceptional. Their dedication to delivering top-notch software, coupled with a shared passion for creating valuable solutions and a relentless commitment to excellence, made it a 10/10 experience. I highly recommend VirtuoByte and their team!
        </Review>
      </CarouselItem>
    </Carousel>
  );
};

export default Testimonials;
