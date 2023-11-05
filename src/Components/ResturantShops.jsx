import React from "react";
import { Grid, Typography } from "@mui/material";
import { BiSolidOffer } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ResturantShops = () => {
  const navigate = useNavigate();
  const resturantData = useSelector((state) => state.restaurants.resturantData);

  const handleShops = (id) => {
    navigate(`/restro-details/${id}`, {
      state: { SingleRestro: resturantData, id: id },
    });
  };

  return (
    <div style={{ marginLeft: "10px" }}>
      {resturantData.map((item, i) => (
        <Grid
          container
          xs={12}
          spacing={1}
          style={{ marginTop: "1rem" }}
          onClick={() => {
            handleShops(item.restaurant_id);
          }}
        >
          <Grid item xs={5}>
            <img
              className="shops-image"
              src={item?.images[0].url}
              alt={item?.restaurant_name}
            />
          </Grid>
          <Grid item container xs={7}>
            <Grid item xs={12}>
              <Typography style={{ fontWeight: "500" }}>
                {item?.restaurant_name}
              </Typography>
              <Typography id="popular-ones-details">
                {item?.restaurant_mode}
              </Typography>
              <Typography id="popular-ones-details">
                {item?.location?.city_name}
              </Typography>
              <Typography id="popular-ones-offers">
                <BiSolidOffer className="offer-icon" /> 4 offers trending
              </Typography>
            </Grid>
            <Grid
              container
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Grid Item>
                <Typography id="rating-price">
                  <AiFillStar style={{ marginRight: "5px" }} />
                  {item?.rating?.restaurant_avg_rating}
                </Typography>
                <Typography id="popular-ones-details">popularity</Typography>
              </Grid>
              <Grid Item>
                <Typography id="rating-price">
                  {" "}
                  {item?.currency?.symbol} {item?.avg_cost_for_two}
                </Typography>
                <Typography id="popular-ones-details">cost for two</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </div>
  );
};

export default ResturantShops;
