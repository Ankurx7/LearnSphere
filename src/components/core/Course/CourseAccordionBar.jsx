import { useEffect, useRef, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import CourseSubSectionAccordion from "./CourseSubSectionAccordion";

export default function CourseAccordionBar({ course, isActive, handleActive }) {
  const contentEl = useRef(null);

  // Accordian state
  const [active, setActive] = useState(false);
  useEffect(() => {
    setActive(isActive?.includes(course._id));
  }, [isActive]);

  const [sectionHeight, setSectionHeight] = useState(0);
  useEffect(() => {
    setSectionHeight(active ? contentEl.current.scrollHeight : 0);
  }, [active]);

  return (
    <div className="overflow-hidden border border-gray-700 bg-gray-800 text-gray-300 rounded-lg mb-4 shadow-lg">
      <div>
        <div
          className={`flex cursor-pointer items-start justify-between px-6 py-5 bg-gray-800 hover:bg-gray-700 transition duration-300 ease-in-out rounded-lg`}
          onClick={() => {
            handleActive(course._id);
          }}
        >
          <div className="flex items-center gap-3">
            <i
              className={`transform transition-transform duration-300 ease-in-out ${
                isActive.includes(course._id) ? "rotate-180" : "rotate-0"
              }`}
            >
              <AiOutlineDown className="text-lg" />
            </i>
            <p className="font-semibold text-lg">{course?.sectionName}</p>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-yellow-400 font-medium">
              {`${course.subSection.length || 0} lecture(s)`}
            </span>
          </div>
        </div>
      </div>
      <div
        ref={contentEl}
        className={`transition-[height] duration-[0.35s] ease-in-out overflow-hidden bg-gray-900 rounded-b-lg`}
        style={{
          height: sectionHeight,
        }}
      >
        <div className="px-6 py-5 space-y-3">
          {course?.subSection?.map((subSec, i) => {
            return <CourseSubSectionAccordion subSec={subSec} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
}
