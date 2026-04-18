import { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [otp, setOtp] = useState("");
  const email = location.state?.email;

  const handleVerify = async () => {
    try {
      await axios.post("http://localhost:5500/api/auth/verify", {
        email,
        otp,
      });

      alert("OTP Verified");
      navigate("/login");

    } catch (err) {
      alert("Invalid OTP");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96 space-y-4 text-center">
        <h2 className="text-2xl font-bold text-indigo-600">Verify OTP</h2>

        <p className="text-sm text-gray-500">
          OTP sent to: {email}
        </p>

        <input
          type="text"
          placeholder="Enter OTP"
          className="w-full border p-3 rounded-lg text-center"
          onChange={(e) => setOtp(e.target.value)}
        />

        <button
          onClick={handleVerify}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg"
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default VerifyOtp;