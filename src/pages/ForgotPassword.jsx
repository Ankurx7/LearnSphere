import { useState } from "react"
import { BiArrowBack } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getPasswordResetToken } from "../services/operations/authAPI"

function ForgotPassword() {
  const [email, setEmail] = useState("")
  const [emailSent, setEmailSent] = useState(false)
  const dispatch = useDispatch()
  const { loading } = useSelector((state) => state.auth)

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(getPasswordResetToken(email, setEmailSent))
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-purple-50">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="relative w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            {!emailSent ? "Reset Your Password" : "Check Your Email"}
          </h1>
          <p className="text-lg text-gray-600 mb-6 text-center">
            {!emailSent
              ? "Don't worry, we've got you covered. We'll send instructions to your email to help you reset your password."
              : `An email with password reset instructions has been sent to ${email}. Please check your inbox.`}
          </p>
          <form onSubmit={handleOnSubmit} className="flex flex-col items-center">
            {!emailSent && (
              <label className="w-full">
                <p className="mb-2 text-sm text-gray-800">
                  Email Address <sup className="text-red-500">*</sup>
                </p>
                <input
                  required
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              </label>
            )}
            <button
              type="submit"
              className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md font-medium transition hover:bg-blue-700"
            >
              {!emailSent ? "Submit" : "Resend Email"}
            </button>
          </form>
          <div className="mt-6 flex justify-between items-center">
            <Link to="/login" className="text-blue-600 flex items-center gap-2">
              <BiArrowBack /> Back to Login
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default ForgotPassword
