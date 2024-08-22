import { FcGoogle } from "react-icons/fc"
import { useSelector } from "react-redux"
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"

function Template({ title, description1, description2, formType }) {
  const { loading } = useSelector((state) => state.auth)

  return (
    <div className="mt-4 flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-purple-50">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="relative flex flex-col items-center justify-center w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 opacity-50 rounded-lg"></div>
          <div className="relative z-10 w-full max-w-md">
            <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">{title}</h1>
            <p className="text-lg text-gray-600 mb-6 text-center">
              <span className="font-medium">{description1}</span>{" "}
              <span className="font-semibold text-blue-600">{description2}</span>
            </p>
            {formType === "signup" ? <SignupForm /> : <LoginForm />}
            <div className="flex justify-center mt-6">
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Template
