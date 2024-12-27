import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const OTPVerification = ({ onAuthenticate }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [step, setStep] = useState(1);

  const navigate = useNavigate();

  const handlePhoneChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handleSendOtp = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await axios.post(
        "https://sneakers-rough-frost-7777.fly.dev/signup",
        { phone_number: phoneNumber },
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Response:", response.data);
      setSuccess("OTP sent to your phone number!");
      setStep(2);
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      setError(error.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await axios.post(
        "https://sneakers-rough-frost-7777.fly.dev/verify_otp",
        { phone_number: phoneNumber, otp_code: otp },
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Response:", response.data);
      setSuccess("OTP Verified Successfully!");
      setError("");

      // Update localStorage and inform App.js
      localStorage.setItem("isAuthenticated", "'true'");
      onAuthenticate(); // Inform parent component

      navigate("/", { replace: true });
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      setError(error.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="container " style={{height : ""}}>
        <div className="container " style={{ backgroundColor: "#dcdcdc2e" }}>
          {" "}
          <div className="row h-100 d-flex justify-content-center align-items-center">
          <div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
          <div class="col-lg-4 col-sm-6 col-md-6 p-4 shadow">
              <h3>Enter PhoneNumber</h3>

              {step === 1 && (
                <form onSubmit={handleSendOtp}>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    placeholder="Enter phone number"
                    required
                  />
                  <button type="submit" disabled={loading} style={{backgroundColor : "black" , color : "white"}}>
                    {loading ? "Sending OTP..." : "Send OTP"}
                  </button>
                </form>
              )}

              {step === 2 && (
                <form onSubmit={handleVerifyOtp}>
                  <input
                    type="text"
                    value={otp}
                    onChange={handleOtpChange}
                    placeholder="Enter OTP"
                    required
                  />
                  <button type="submit" disabled={loading}  style={{backgroundColor : "black" , color : "white"}}>
                    {loading ? "Verifying..." : "Verify OTP"}
                  </button>
                </form>
              )}

              {success && <p style={{ color: "green" }}>{success}</p>}
              {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
          </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;
