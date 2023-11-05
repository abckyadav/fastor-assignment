import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { IoMdWallet } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import { addData } from "../Store/resturantSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import ResturantShops from "./ResturantShops";

export const RestroLists = () => {
  const dispatch = useDispatch();

  const fetchResturantData = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.get(
        "https://staging.fastor.in/v1/m/restaurant?city_id=118&&",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      if (response.status === 200) {
        dispatch(addData(response.data));
        localStorage.setItem("resturantData", JSON.stringify(response.data));
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    fetchResturantData();
  }, []);

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

      {/* <Grid container className="your-taste">
        <Grid item>
          <p>Your Taste</p>
        </Grid>
      </Grid>
      <Grid container xs={12} className="restro-carousal">
        <Grid item xs={12}>
          <RestroCarousal />
        </Grid>
      </Grid>
      <Grid container xs={12}>
        <Grid item xs={12}>
          <CategoryCarousal />
        </Grid>
      </Grid> */}
      <Grid container className="your-taste">
        <Grid item>
          <p>Popular Ones</p>
        </Grid>
      </Grid>
      <Grid container xs={12}>
        <Grid item xs={12}>
          <ResturantShops />
        </Grid>
      </Grid>
    </div>
  );
};

export default RestroLists;
