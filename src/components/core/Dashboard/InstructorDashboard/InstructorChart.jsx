import { useDispatch, useSelector } from "react-redux"
import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table"
import { setCourse, setEditCourse } from "../../../../slices/courseSlice"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
import { useState } from "react"
import { FaCheck, FaPencilAlt, FaTrashAlt } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

import { formatDate } from "../../../../services/formatDate"
import { deleteCourse, fetchInstructorCourses } from "../../../../services/operations/courseDetailsAPI"
import { COURSE_STATUS } from "../../../../utils/constants"
import ConfirmationModal from "../../../Common/ConfirmationModal"
import { HiClock } from "react-icons/hi"
export default function CoursesTable({ courses, setCourses }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { token } = useSelector((state) => state.auth)
  const [loading, setLoading] = useState(false)
  const [confirmationModal, setConfirmationModal] = useState(null)
  const TRUNCATE_LENGTH = 30

  const handleCourseDelete = async (courseId) => {
    setLoading(true)
    await deleteCourse({ courseId: courseId }, token)
    const result = await fetchInstructorCourses(token)
    if (result) {
      setCourses(result)
    }
    setConfirmationModal(null)
    setLoading(false)
  }

  return (
    <>
      <Table className="w-full rounded-lg border border-gray-700 bg-gray-900">
        <Thead>
          <Tr className="text-richblack-800 bg-gray-800">
            <Th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">Course</Th>
            <Th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">Duration</Th>
            <Th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">Price</Th>
            <Th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider">Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {courses?.length === 0 ? (
            <Tr>
              <Td colSpan="4" className="py-6 text-center text-lg font-medium text-gray-300">
                No courses available
              </Td>
            </Tr>
          ) : (
            courses?.map((course) => (
              <Tr key={course._id} className="border-b border-gray-700">
                <Td className="flex items-center gap-4 p-4">
                  <img
                    src={course?.thumbnail}
                    alt={course?.courseName}
                    className="h-32 w-48 rounded-lg object-cover"
                  />
                  <div className="flex flex-col">
                    <p className="text-base font-semibold text-gray-50">{course.courseName}</p>
                    <p className="text-sm text-richblack-800">
                      {course.courseDescription.split(" ").length > TRUNCATE_LENGTH
                        ? course.courseDescription.split(" ").slice(0, TRUNCATE_LENGTH).join(" ") + "..."
                        : course.courseDescription}
                    </p>
                    <p className="text-xs text-gray-500">Created: {formatDate(course.createdAt)}</p>
                    {course.status === COURSE_STATUS.DRAFT ? (
                      <p className="mt-2 flex items-center gap-1 rounded-full bg-richblack-800 px-2 py-1 text-xs text-pink-400">
                        <HiClock size={14} />
                        Draft
                      </p>
                    ) : (
                      <p className="mt-2 flex items-center gap-1 rounded-full bg-richblack-800 px-2 py-1 text-xs text-yellow-400">
                        <FaCheck size={12} />
                        Published
                      </p>
                    )}
                  </div>
                </Td>
                <Td className="p-4 text-richblack-800">2hr 30min</Td>
                <Td className="p-4 text-richblack-800">₹{course.price}</Td>
                <Td className="p-4 text-richblack-800">
                  <button
                    disabled={loading}
                    onClick={() => navigate(`/dashboard/edit-course/${course._id}`)}
                    title="Edit"
                    className="mr-2 text-blue-400 hover:text-blue-600 transition-colors duration-200"
                  >
                    <FaPencilAlt size={18} />
                  </button>
                  <button
                    disabled={loading}
                    onClick={() => setConfirmationModal({
                      text1: "Are you sure you want to delete this course?",
                      text2: "This action cannot be undone.",
                      btn1Text: !loading ? "Delete" : "Loading...",
                      btn2Text: "Cancel",
                      btn1Handler: !loading ? () => handleCourseDelete(course._id) : () => {},
                      btn2Handler: !loading ? () => setConfirmationModal(null) : () => {},
                    })}
                    title="Delete"
                    className="text-red-400 hover:text-red-600 transition-colors duration-200"
                  >
                    <FaTrashAlt size={18} />
                  </button>
                </Td>
              </Tr>
            ))
          )}
        </Tbody>
      </Table>
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </>
  )
}
