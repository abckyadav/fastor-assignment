import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Card } from "@mui/material";

const CategoryCarousal = () => {

  let offers = [
    "https://couponswala.com/blog/wp-content/uploads/2022/09/Food-Combo-Offers-696x392.jpg.webp",
    "https://www.mealgaadi.co.in/images/slider/photo1_18-09-19-04-24-4.jpg",
    "https://www.mealgaadi.co.in/blog-admin/images/blog/5b570181200a1-2018-07-24-16-07-53.png",
    " https://www.mealgaadi.co.in/blog-admin/images/blog/5b30a73f7b995-2018-06-25-13-56-39.png",
  ];

  return (
    <div>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        lazy={true}
        style={{ margin: "10px", borderRadius: "1rem" }}
      >
        {offers.map((e, i) => (
          <SwiperSlide>
            <Card
              style={{
                boxShadow: "box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 10px",
              }}
            >
              <img
                alt={i}
                src={offers[i]}
                style={{ height: "8rem", width: "100%" }}
              />
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default CategoryCarousal;
