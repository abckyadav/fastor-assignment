import React, { useState } from "react";
import { Button, Card, Grid, Modal, Typography } from "@mui/material";

import { useLocation, useNavigate } from "react-router-dom";
import { BiSolidOffer } from "react-icons/bi";
import { AiOutlineShareAlt } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import { toast } from "react-toastify";

const SingleRestro = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { id, SingleRestro } = location.state;
  const restaurant = SingleRestro.find((e) => e.restaurant_id === id);
  console.log("restaurant:", restaurant);

  const shareImage = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Restro Image",
          text: restaurant.restaurant_name,
          url: restaurant.images[0].url,
        });
        console.log("Image shared successfully");
        toast.success("Image shared successfully");
        setOpen(false);
      } catch (error) {
        toast.error(error);
      }
    } else {
      console.log("Web Share API is not supported");
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <div className="backarrow" onClick={() => navigate("/restro-lists")}>
        <AiOutlineLeft style={{ color: "white", fontSize: "2rem" }} />
      </div>

      <Grid container>
        <Grid item xs={12}>
          <img
            className="single-restro-image"
            src={restaurant?.images[0].url}
            alt={restaurant.resturant_name}
          />
        </Grid>
        <Grid item container>
          <Card id="single-restro-card">
            <Grid container style={{ margin: "1rem 1rem 0rem 1rem" }}>
              <Grid item xs={9}>
                <Typography style={{ fontWeight: "600" }}>
                  {restaurant?.restaurant_name}
                </Typography>
                <Typography>{restaurant?.location?.city_name}</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography id="rating-price">
                  <AiFillStar style={{ marginRight: "5px" }} />
                  {restaurant?.rating?.restaurant_avg_rating}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              style={{
                margin: "0 1rem",
                display: "flex",
                width: "90%",
                alignContent: "center",
                justifyContent: "space-between",
              }}
            >
              <Grid item xs={6} style={{ display: "flex" }}>
                <Typography id="popular-ones-offers">
                  <BiSolidOffer className="offer-icon" /> 4 offers trending
                </Typography>
              </Grid>
              <Grid item={6}>
                <Card id="share-card" onClick={() => setOpen(true)}>
                  <AiOutlineShareAlt /> Share
                </Card>
              </Grid>
            </Grid>
            <Grid container style={{ margin: "1rem" }}>
              <Grid item xs={12} style={{ marginRight: "2rem" }}>
                <Typography style={{ marginTop: "1rem", fontSize: "0.8rem" }}>
                  Our delicate vanilla cake swirled with chocolate and filled
                  with mocha chocolate chip cream and a layer of dark chocolate
                  ganache
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>

      <Modal open={open} setOpen={setOpen} id="modal">
        <Card id="modal-card">
          <Grid container>
            <Grid item xs={12} style={{ position: "relative" }}>
              <div className="backarrow" onClick={() => setOpen(false)}>
                <AiOutlineLeft style={{ color: "white", fontSize: "2rem" }} />
              </div>
              <img
                className="single-restro-image"
                src={restaurant?.images[0].url}
                alt={restaurant.resturant_name}
              />
            </Grid>
            <Grid item xs={12} style={{ padding: "0.5rem" }}>
              <Typography style={{ fontSize: "0.8rem" }}>
                Note: You can drag Fastor logo to reposition anywhere before
                sharing.
              </Typography>
            </Grid>
            <Grid item xs={12} style={{ margin: "1rem" }}>
              <Button onClick={shareImage} id="share-button">
                Share
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Modal>
    </div>
  );
};

export default SingleRestro;
