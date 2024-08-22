import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-hot-toast"
import { IoAddCircleOutline } from "react-icons/io5"
import { MdNavigateNext } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"

import {
  createSection,
  updateSection,
} from "../../../../../services/operations/courseDetailsAPI"
import {
  setCourse,
  setEditCourse,
  setStep,
} from "../../../../../slices/courseSlice"
import IconBtn from "../../../../Common/IconBtn"
import NestedView from "./NestedView"

export default function CourseBuilderForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm()

  const { course } = useSelector((state) => state.course)
  const { token } = useSelector((state) => state.auth)
  const [loading, setLoading] = useState(false)
  const [editSectionName, setEditSectionName] = useState(null)
  const dispatch = useDispatch()

  // handle form submission
  const onSubmit = async (data) => {
    setLoading(true)

    let result

    if (editSectionName) {
      result = await updateSection(
        {
          sectionName: data.sectionName,
          sectionId: editSectionName,
          courseId: course._id,
        },
        token
      )
    } else {
      result = await createSection(
        {
          sectionName: data.sectionName,
          courseId: course._id,
        },
        token
      )
    }
    if (result) {
      dispatch(setCourse(result))
      setEditSectionName(null)
      setValue("sectionName", "")
    }
    setLoading(false)
  }

  const cancelEdit = () => {
    setEditSectionName(null)
    setValue("sectionName", "")
  }

  const handleChangeEditSectionName = (sectionId, sectionName) => {
    if (editSectionName === sectionId) {
      cancelEdit()
      return
    }
    setEditSectionName(sectionId)
    setValue("sectionName", sectionName)
  }

  const goToNext = () => {
    if (course.courseContent.length === 0) {
      toast.error("Please add at least one section")
      return
    }
    if (
      course.courseContent.some((section) => section.subSection.length === 0)
    ) {
      toast.error("Please add at least one lecture in each section")
      return
    }
    dispatch(setStep(3))
  }

  const goBack = () => {
    dispatch(setStep(1))
    dispatch(setEditCourse(true))
  }

  return (
    <div className="p-8 bg-gradient-to-r from-teal-50 to-coral-50 min-h-screen rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Build Your Course
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex flex-col space-y-3">
          <label className="text-base font-medium text-gray-700" htmlFor="sectionName">
            Section Name <span className="text-red-500">*</span>
          </label>
          <input
            id="sectionName"
            disabled={loading}
            placeholder="Enter section name"
            {...register("sectionName", { required: true })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          {errors.sectionName && (
            <span className="text-sm text-red-500">
              Section name is required
            </span>
          )}
        </div>
        <div className="flex items-center gap-x-4">
          <IconBtn
            type="submit"
            disabled={loading}
            text={editSectionName ? "Update Section" : "Add Section"}
            outline={true}
            className="bg-teal-600 text-white hover:bg-teal-700 transition-colors duration-300"
          >
            <IoAddCircleOutline size={24} />
          </IconBtn>
          {editSectionName && (
            <button
              type="button"
              onClick={cancelEdit}
              className="text-base font-medium text-gray-600 hover:text-gray-800 underline"
            >
              Cancel Edit
            </button>
          )}
        </div>
      </form>
      {course.courseContent.length > 0 && (
        <NestedView handleChangeEditSectionName={handleChangeEditSectionName} />
      )}
      <div className="flex justify-end gap-x-4 mt-8">
        <button
          onClick={goBack}
          className="flex items-center gap-x-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg shadow-md hover:bg-gray-300 transition-colors duration-300"
        >
          Back
        </button>
        <IconBtn disabled={loading} text="Next" onclick={goToNext} className="bg-coral-600 text-white hover:bg-coral-700 transition-colors duration-300">
          <MdNavigateNext size={24} />
        </IconBtn>
      </div>
    </div>
  )
}
