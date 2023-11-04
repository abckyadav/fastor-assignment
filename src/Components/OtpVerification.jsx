import React, { useEffect, useState } from "react";
import { Button, FormControl, Grid } from "@mui/material";
import { MuiOtpInput } from "mui-one-time-password-input";
import "../Components/style.css";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addToken } from "../Store/registrationSlice";
import axios from "axios";
import { toast } from "react-toastify";
import { addData } from "../Store/resturantSlice";

const OtpVerification = () => {
  const [otp, setOtp] = useState("");
  const { state } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (newValue) => {
    setOtp(newValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (otp.length === 6) {
        const input = {
          phone: state.phone,
          dial_code: state.country_code,
          otp: otp,
        };
        const res = await axios.post(
          "https://staging.fastor.in/v1/pwa/user/login",
          input
        );

        if (res.status === 200) {
          const token = res.data.data.token;

          dispatch(addToken({ token: token }));
          localStorage.setItem("token", token);
          navigate("/restro-lists");
        } else {
          toast.error("Invalid OTP");
        }
      } else {
        toast.error("Please enter 6 digit otp");
      }
    } catch (err) {
      toast.error("Invalid OTP, Please try again.");
    }
  };

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
      <Grid
        sx={{
          height: "100vh",
        }}
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item className="heading otp-verification">
          <p>OTP Verification</p>
          <p>Enter the verification code we just sent on your Mobile Number.</p>
        </Grid>
        <FormControl>
          <Grid item className="otp-input">
            <MuiOtpInput
              value={otp}
              length={6}
              type="number"
              onChange={handleChange}
            />
          </Grid>
          <Grid container display="flex">
            <Grid item xs={12} className="verify-button">
              <Button fullWidth id="send-code-button" onClick={handleSubmit}>
                Verify
              </Button>
            </Grid>
          </Grid>
        </FormControl>

        <Grid item className="resend">
          <p>
            Didn’t received code? <span>Resend</span>
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default OtpVerification;
