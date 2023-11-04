import React from "react";
import { Grid } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { IoMdWallet } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import RestroCarousal from "./RestroCarousal";

export const RestroLists = () => {
  return (
    <div>
      <Grid container>
        <Grid xs={12} item className="header">
          <div style={{ display: "flex" }}>
            <p>Pre Order From</p>{" "}
            <LocationOnOutlinedIcon style={{ opacity: 0.4 }} />
          </div>
          <p>Connaught Place</p>
        </Grid>
      </Grid>

      <Grid container className="sub-header" spacing={2}>
        <Grid item xs={6}>
          <div className="sub-header-heading">
            <p>Abhishek</p>
            <p>Lets explore this evening</p>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="offers-icon">
            <BiSolidOffer style={{ color: "white", fontSize: "2rem" }} />
          </div>
          <p className="icon-text">Offers</p>
        </Grid>
        <Grid item xs={3}>
          <div className="wallet-icon">
            <IoMdWallet style={{ color: "white", fontSize: "2rem" }} />
          </div>
          <p className="icon-text">Wallet</p>
        </Grid>
      </Grid>

      <Grid container className="your-taste">
        <Grid item>
          <p>Your Taste</p>
        </Grid>
      </Grid>
      <Grid container className="restro-carousal">
        <Grid item>
          <RestroCarousal />
        </Grid>
      </Grid>
      <Grid container className="category-carousal">
        <Grid item></Grid>
      </Grid>
    </div>
  );
};

export default RestroLists;
