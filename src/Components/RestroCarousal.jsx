import React from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Card } from "@mui/material";


const RestroCarousal = () => {
  const resturantData = useSelector((state) => state.restaurants.resturantData);

  let randomColors = [
    "#d6d46d72",
    "#f4dfb68b",
    "#de905f83",
    "#80b3ff63",
    "#98e4ff71",
    "#3877bf69",
    "#e1aa74566f",
    "#a7d39751",
    "#f8bdeb6a",
    "#d6c7ae69",
    "#b3a49240",
  ];

  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={2.5}
        style={{ marginLeft: "10px" }}
      >
        {resturantData.map((e, i) => (
          <SwiperSlide>
            <Card
              id="restro-carousal-card"
              style={{ backgroundColor: randomColors[i] || randomColors[0] }}
            >
              <img
                alt={e?.restaurant_name}
                src={e?.images[0]?.url}
                style={{ height: "8rem" }}
              />
              <div className="restro-carousal-heading">
                <p style={{ fontWeight: "600" }}>{e?.restaurant_name}</p>
                <p
                  style={{
                    color: "rgba(128, 128, 128, 0.8)",
                    fontSize: "0.8rem",
                  }}
                >
                  {e.location && e.location.city_name}
                </p>
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default RestroCarousal;
