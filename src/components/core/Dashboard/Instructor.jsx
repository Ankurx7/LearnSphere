import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { fetchInstructorCourses } from "../../../services/operations/courseDetailsAPI"
import { getInstructorData } from "../../../services/operations/profileAPI"
import InstructorChart from "./InstructorDashboard/InstructorChart"

export default function Instructor() {
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const [loading, setLoading] = useState(false)
  const [instructorData, setInstructorData] = useState(null)
  const [courses, setCourses] = useState([])

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      const instructorApiData = await getInstructorData(token)
      const result = await fetchInstructorCourses(token)
      console.log(instructorApiData)
      if (instructorApiData.length) setInstructorData(instructorApiData)
      if (result) {
        setCourses(result)
      }
      setLoading(false)
    })()
  }, [token])

  const totalAmount = instructorData?.reduce(
    (acc, curr) => acc + curr.totalAmountGenerated,
    0
  )

  const totalStudents = instructorData?.reduce(
    (acc, curr) => acc + curr.totalStudentsEnrolled,
    0
  )

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome {user?.firstName} 👋
        </h1>
        <p className="text-gray-600">Ready to make an impact?</p>
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin border-t-4 border-blue-500 border-solid w-16 h-16 rounded-full"></div>
        </div>
      ) : courses.length > 0 ? (
        <div className="flex gap-6">
          <div className="flex-1 bg-white rounded-lg shadow-lg p-6">
            {totalAmount > 0 || totalStudents > 0 ? (
              <InstructorChart courses={instructorData} />
            ) : (
              <div className="flex flex-col items-center justify-center h-full">
                <p className="text-lg font-semibold text-gray-700">Visualize</p>
                <p className="mt-4 text-xl text-gray-500">Insufficient Data</p>
              </div>
            )}
          </div>
          <div className="min-w-[300px] bg-white rounded-lg shadow-lg p-6">
            <p className="text-lg font-semibold text-gray-700">Statistics</p>
            <div className="mt-4 space-y-6">
              <div>
                <p className="text-gray-600">Total Courses</p>
                <p className="text-2xl font-bold text-gray-900">{courses.length}</p>
              </div>
              <div>
                <p className="text-gray-600">Total Students</p>
                <p className="text-2xl font-bold text-gray-900">{totalStudents}</p>
              </div>
              <div>
                <p className="text-gray-600">Total Income</p>
                <p className="text-2xl font-bold text-gray-900">₹{totalAmount}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-20 bg-white rounded-lg shadow-lg p-6">
          <p className="text-xl font-bold text-gray-800">No Courses Created Yet</p>
          <Link to="/dashboard/add-course">
            <p className="mt-2 text-lg font-semibold text-blue-500">Create a Course</p>
          </Link>
        </div>
      )}
      {courses.length > 0 && (
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <p className="text-lg font-semibold text-gray-800">Your Courses</p>
            <Link to="/dashboard/my-courses">
              <p className="text-sm font-medium text-blue-500">View All</p>
            </Link>
          </div>
          <div className="flex gap-4">
            {courses.slice(0, 3).map((course) => (
              <div key={course._id} className="w-1/3 bg-gray-50 rounded-lg shadow-md">
                <img
                  src={course.thumbnail}
                  alt={course.courseName}
                  className="h-40 w-full rounded-t-lg object-cover"
                />
                <div className="p-4">
                  <p className="text-md font-semibold text-gray-800">{course.courseName}</p>
                  <div className="mt-2 flex items-center justify-between text-sm text-gray-600">
                    <p>{course.studentsEnroled.length} students</p>
                    <p>₹{course.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
