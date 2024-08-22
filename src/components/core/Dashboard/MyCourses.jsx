import { useEffect, useState } from "react"
import { VscAdd } from "react-icons/vsc"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { fetchInstructorCourses } from "../../../services/operations/courseDetailsAPI"
import IconBtn from "../../Common/IconBtn"
import CoursesTable from "./InstructorCourses/CoursesTable"

export default function MyCourses() {
  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const fetchCourses = async () => {
      const result = await fetchInstructorCourses(token)
      if (result) {
        setCourses(result)
      }
    }
    fetchCourses()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="p-6 bg-gray-200 min-h-screen">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-4xl font-semibold text-gray-900">My Courses</h1>
        <IconBtn
          text="Add Course"
          onclick={() => navigate("/dashboard/add-course")}
          className="bg-teal-600 text-white hover:bg-teal-700 transition-colors duration-300"
        >
          <VscAdd className="text-lg" />
        </IconBtn>
      </div>
      {courses.length > 0 ? (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <CoursesTable courses={courses} setCourses={setCourses} />
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-lg p-6 text-center text-gray-600">
          <p className="text-lg font-medium">You have no courses yet.</p>
          <button
            onClick={() => navigate("/dashboard/add-course")}
            className="mt-4 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors duration-300"
          >
            Create Your First Course
          </button>
        </div>
      )}
    </div>
  )
}
