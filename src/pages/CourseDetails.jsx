import React, { useEffect, useState } from "react";
import { BiInfoCircle } from "react-icons/bi";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import ReactMarkdown from 'react-markdown';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import ConfirmationModal from "../components/Common/ConfirmationModal";
import Footer from "../components/Common/Footer";
import RatingStars from "../components/Common/RatingStars";
import CourseAccordionBar from "../components/core/Course/CourseAccordionBar";
import CourseDetailsCard from "../components/core/Course/CourseDetailsCard";
import { formatDate } from "../services/formatDate";
import { fetchCourseDetails } from "../services/operations/courseDetailsAPI";
import { BuyCourse } from "../services/operations/studentFeaturesAPI";
import GetAvgRating from "../utils/avgRating";
import Error from "./Error";

function CourseDetails() {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
  const { loading } = useSelector((state) => state.profile);
  const { paymentLoading } = useSelector((state) => state.course);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { courseId } = useParams();
  const [response, setResponse] = useState(null);
  const [confirmationModal, setConfirmationModal] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetchCourseDetails(courseId);
        setResponse(res);
      } catch (error) {
        console.log("Could not fetch Course Details");
      }
    })();
  }, [courseId]);

  const [avgReviewCount, setAvgReviewCount] = useState(0);
  useEffect(() => {
    const count = GetAvgRating(response?.data?.courseDetails.ratingAndReviews);
    setAvgReviewCount(count);
  }, [response]);

  const [isActive, setIsActive] = useState([]);
  const handleActive = (id) => {
    setIsActive(
      !isActive.includes(id)
        ? isActive.concat([id])
        : isActive.filter((e) => e !== id)
    );
  };

  const [totalNoOfLectures, setTotalNoOfLectures] = useState(0);
  useEffect(() => {
    let lectures = 0;
    response?.data?.courseDetails?.courseContent?.forEach((sec) => {
      lectures += sec.subSection.length || 0;
    });
    setTotalNoOfLectures(lectures);
  }, [response]);

  if (loading || !response) {
    return (
      <div className="grid min-h-screen place-items-center bg-gray-50">
        <div className="loader"></div>
      </div>
    );
  }

  if (!response.success) {
    return <Error />;
  }

  const {
    _id: course_id,
    courseName,
    courseDescription,
    thumbnail,
    price,
    whatYouWillLearn,
    courseContent,
    ratingAndReviews,
    instructor,
    studentsEnroled,
    createdAt,
  } = response.data?.courseDetails;

  const handleBuyCourse = () => {
    if (token) {
      BuyCourse(token, [courseId], user, navigate, dispatch);
      return;
    }
    setConfirmationModal({
      text1: "You are not logged in!",
      text2: "Please login to purchase this course.",
      btn1Text: "Login",
      btn2Text: "Cancel",
      btn1Handler: () => navigate("/login"),
      btn2Handler: () => setConfirmationModal(null),
    });
  };

  if (paymentLoading) {
    return (
      <div className="grid min-h-screen place-items-center bg-gray-50">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 text-white">
        <div className="mx-auto px-6 lg:w-[1260px]">
          <div className="grid lg:grid-cols-2 gap-8 py-10 lg:py-16">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-bold mb-4">{courseName}</h1>
              <p className="text-lg text-gray-200 mb-6">{courseDescription}</p>
              <div className="flex flex-wrap items-center space-x-4 mb-6">
                <div className="flex items-center text-yellow-400">
                  <RatingStars Review_Count={avgReviewCount} Star_Size={24} />
                  <span className="ml-2">{avgReviewCount}</span>
                </div>
                <span className="text-gray-300">{`(${ratingAndReviews.length} reviews)`}</span>
                <span className="text-gray-300">{`${studentsEnroled.length} students enrolled`}</span>
              </div>
              <p className="text-lg font-medium">
                Created by {`${instructor.firstName} ${instructor.lastName}`}
              </p>
              <div className="flex flex-wrap gap-4 mt-4">
                <p className="flex items-center text-gray-200">
                  <BiInfoCircle className="mr-2" /> Created at {formatDate(createdAt)}
                </p>
                <p className="flex items-center text-gray-200">
                  <HiOutlineGlobeAlt className="mr-2" /> English
                </p>
              </div>
            </div>
            <div className="hidden lg:flex flex-col items-end">
              <CourseDetailsCard
                course={response?.data?.courseDetails}
                setConfirmationModal={setConfirmationModal}
                handleBuyCourse={handleBuyCourse}
              />
            </div>
          </div>
          <div className="flex flex-col items-center lg:hidden mt-8">
            <div className="mb-4 text-3xl font-semibold">{`₹ ${price}`}</div>
            <button
              className="w-full mb-4 py-3 text-lg font-medium text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 transition"
              onClick={handleBuyCourse}
            >
              Buy Now
            </button>
            <button className="w-full py-3 text-lg font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-700 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Course Content and Details */}
      <div className="mx-auto px-6 py-10 text-gray-800 lg:w-[1260px]">
        <div className="space-y-10">
          {/* What You'll Learn Section */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-4">What you'll learn</h2>
            <ReactMarkdown className="text-lg">{whatYouWillLearn}</ReactMarkdown>
          </div>

          {/* Course Content Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-4">Course Content</h2>
            <div className="flex justify-between mb-4 text-lg">
              <div className="flex space-x-6">
                <span>{courseContent.length} sections</span>
                <span>{totalNoOfLectures} lectures</span>
                <span>{response.data?.totalDuration} total length</span>
              </div>
              <button
                className="text-indigo-600 font-medium hover:underline"
                onClick={() => setIsActive([])}
              >
                Collapse all sections
              </button>
            </div>
            {courseContent?.map((course, index) => (
              <CourseAccordionBar
                course={course}
                key={index}
                isActive={isActive}
                handleActive={handleActive}
              />
            ))}
          </div>

        </div>
      </div>

      <Footer />
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </>
  );
}

export default CourseDetails;
