import { FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { deleteProfile } from "../../../../services/operations/SettingsAPI";

export default function DeleteAccount() {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleDeleteAccount() {
    try {
      dispatch(deleteProfile(token, navigate));
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message);
    }
  }

  return (
    <div className="my-10 flex flex-row gap-x-6 rounded-lg border border-red-300 bg-red-50 p-6 shadow-md">
      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-500 text-white">
        <FiTrash2 className="text-2xl" />
      </div>
      <div className="flex flex-col space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">
          Delete Account
        </h2>
        <div className="text-gray-600">
          <p>Are you sure you want to delete your account?</p>
          <p>
            This action is permanent and will remove all associated data, including any purchased courses.
          </p>
        </div>
        <button
          type="button"
          className="text-red-600 hover:text-red-700 font-medium underline"
          onClick={handleDeleteAccount}
        >
          I want to delete my account.
        </button>
      </div>
    </div>
  );
}
