import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { RxCountdownTimer } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { sendOtp, signUp } from "../services/operations/authAPI";
import { useNavigate } from "react-router-dom";

function VerifyEmail() {
  const [otp, setOtp] = useState("");
  const { signupData, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!signupData) {
      navigate("/signup");
    }
  }, [signupData, navigate]);

  const handleVerifyAndSignup = (e) => {
    e.preventDefault();
    const { accountType, firstName, lastName, email, password, confirmPassword } = signupData;

    dispatch(
      signUp(
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
        navigate
      )
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-purple-50">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="relative w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Verify Email</h1>
          <p className="text-lg text-gray-600 mb-6 text-center">
            A verification code has been sent to your email. Please enter the code below.
          </p>
          <form onSubmit={handleVerifyAndSignup} className="flex flex-col items-center">
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderInput={(props) => (
                <input
                  {...props}
                  placeholder="-"
                  className="w-12 h-12 border border-gray-300 rounded-md text-center text-lg focus:outline-none focus:border-blue-500"
                />
              )}
              containerStyle="flex justify-between gap-2 mb-6"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md font-medium transition hover:bg-blue-700"
            >
              Verify Email
            </button>
          </form>
          <div className="mt-6 flex justify-between items-center">
            <Link to="/signup" className="text-blue-600 flex items-center gap-2">
              <BiArrowBack /> Back To Signup
            </Link>
            <button
              className="text-blue-600 flex items-center gap-2"
              onClick={() => dispatch(sendOtp(signupData.email))}
            >
              <RxCountdownTimer /> Resend Code
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default VerifyEmail;
