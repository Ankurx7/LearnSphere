import IconBtn from "./IconBtn"

export default function ConfirmationModal({ modalData }) {
  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-gray-900 bg-opacity-70">
      <div className="relative w-11/12 max-w-[320px] rounded-lg bg-white p-6 shadow-lg transition-transform duration-300 transform hover:scale-105">
        <div className="text-center">
          <p className="text-2xl font-semibold text-gray-900">
            {modalData?.text1}
          </p>
          <p className="mt-3 mb-5 text-gray-600">
            {modalData?.text2}
          </p>
        </div>
        <div className="flex items-center justify-center gap-x-4">
          <IconBtn
            onclick={modalData?.btn1Handler}
            text={modalData?.btn1Text}
            customClass="w-full bg-blue-600 text-white hover:bg-blue-700"
          />
          <button
            className="w-full cursor-pointer rounded-md bg-red-500 py-2 px-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-600"
            onClick={modalData?.btn2Handler}
          >
            {modalData?.btn2Text}
          </button>
        </div>
      </div>
    </div>
  )
}
