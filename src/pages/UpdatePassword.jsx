import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { BiArrowBack } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation, useNavigate } from "react-router-dom"

import { resetPassword } from "../services/operations/authAPI"

function UpdatePassword() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()
  const { loading } = useSelector((state) => state.auth)
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const { password, confirmPassword } = formData

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    const token = location.pathname.split("/").at(-1)
    dispatch(resetPassword(password, confirmPassword, token, navigate))
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-purple-50">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="relative w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Choose New Password
          </h1>
          <p className="text-lg text-gray-600 mb-6 text-center">
            Almost done! Enter your new password below to reset your account.
          </p>
          <form onSubmit={handleOnSubmit} className="flex flex-col">
            <label className="relative mb-4">
              <p className="text-sm text-gray-800 mb-2">
                New Password <sup className="text-red-500">*</sup>
              </p>
              <input
                required
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={handleOnChange}
                placeholder="Enter new password"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-10 z-10 cursor-pointer"
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#A0AEC0" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#A0AEC0" />
                )}
              </span>
            </label>
            <label className="relative mb-6">
              <p className="text-sm text-gray-800 mb-2">
                Confirm New Password <sup className="text-red-500">*</sup>
              </p>
              <input
                required
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleOnChange}
                placeholder="Confirm your password"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              <span
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute right-3 top-10 z-10 cursor-pointer"
              >
                {showConfirmPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#A0AEC0" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#A0AEC0" />
                )}
              </span>
            </label>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md font-medium transition hover:bg-blue-700"
            >
              Reset Password
            </button>
          </form>
          <div className="mt-6 text-center">
            <Link to="/login" className="text-blue-600 flex items-center justify-center gap-2">
              <BiArrowBack /> Back to Login
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default UpdatePassword
