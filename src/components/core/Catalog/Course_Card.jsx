import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RatingStars from "../../Common/RatingStars";
import GetAvgRating from "../../../utils/avgRating";

function Course_Card({ course, Height }) {
  const [avgReviewCount, setAvgReviewCount] = useState(0);

  useEffect(() => {
    const count = GetAvgRating(course.ratingAndReviews);
    setAvgReviewCount(count);
  }, [course]);

  return (
    <Link to={`/courses/${course._id}`}>
      <div className="rounded-lg border border-gray-300 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <img
          src={course?.thumbnail}
          alt="course thumbnail"
          className={`${Height} w-full rounded-t-lg object-cover`}
        />
        <div className="p-4 bg-white rounded-b-lg">
          <h3 className="text-xl font-semibold text-gray-800">{course?.courseName}</h3>
          <p className="text-sm text-gray-600">
            {course?.instructor?.firstName} {course?.instructor?.lastName}
          </p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-yellow-500 font-bold">{avgReviewCount || 0}</span>
            <RatingStars Review_Count={avgReviewCount} />
            <span className="text-gray-500 text-sm">
              ({course?.ratingAndReviews?.length} Ratings)
            </span>
          </div>
          <p className="text-xl font-bold text-gray-800 mt-2">₹ {course?.price}</p>
        </div>
      </div>
    </Link>
  );
}

export default Course_Card;
