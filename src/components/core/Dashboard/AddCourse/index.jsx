import RenderSteps from "./RenderSteps"

export default function AddCourse() {
  return (
    <>
      <div className="flex w-full items-start gap-x-6">
        <div className="flex flex-1 flex-col">
          <h1 className="mb-14 text-3xl font-medium text-richblack-900 text-center">
            Add Course
          </h1>
          <div className="flex-1 w-10/12">
            <RenderSteps />
          </div>
        </div>
      </div>
    </>
  )
}
