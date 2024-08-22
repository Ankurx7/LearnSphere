import React from "react";
import copy from "copy-to-clipboard";
import { toast } from "react-hot-toast";
import { BsFillCaretRightFill } from "react-icons/bs";
import { FaShareSquare } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addToCart } from "../../../slices/cartSlice";
import { ACCOUNT_TYPE } from "../../../utils/constants";

function CourseDetailsCard({ course, setConfirmationModal, handleBuyCourse }) {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { thumbnail: ThumbnailImage, price: CurrentPrice, _id: courseId } = course;

  const handleShare = () => {
    copy(window.location.href);
    toast.success("Link copied to clipboard");
  };

  const handleAddToCart = () => {
    if (user && user?.accountType === ACCOUNT_TYPE.INSTRUCTOR) {
      toast.error("You are not eligble--Only for students.");
      return;
    }
    if (token) {
      dispatch(addToCart(course));
      return;
    }
    setConfirmationModal({
      text1: "Not logged in!",
      text2: "Please log in to add this course to your cart.",
      btn1Text: "Login",
      btn2Text: "Cancel",
      btn1Handler: () => navigate("/login"),
      btn2Handler: () => setConfirmationModal(null),
    });
  };

  return (
    <div className="bg-richblack-800 rounded-lg shadow-lg p-6 text-white space-y-6">
      {/* Course Image */}
      <div className="w-full h-56 md:h-72 rounded-lg overflow-hidden">
        <img
          src={ThumbnailImage}
          alt={course?.courseName}
          className="h-full w-full object-cover rounded-lg"
        />
      </div>

      {/* Course Info */}
      <div className="space-y-4">
        <div className="text-4xl font-bold text-yellow-400">
          ₹ {CurrentPrice}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-richblack-900 font-semibold py-3 rounded-lg transition duration-300"
            onClick={
              user && course?.studentsEnroled.includes(user?._id)
                ? () => navigate("/dashboard/enrolled-courses")
                : handleBuyCourse
            }
          >
            {user && course?.studentsEnroled.includes(user?._id)
              ? "Go To Course"
              : "Buy Now"}
          </button>

          {(!user || !course?.studentsEnroled.includes(user?._id)) && (
            <button
              onClick={handleAddToCart}
              className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 rounded-lg transition duration-300"
            >
              Add to Cart
            </button>
          )}
        </div>


      </div>
    </div>
  );
}

export default CourseDetailsCard;
