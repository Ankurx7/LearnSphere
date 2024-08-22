import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function RequirementsField({
  name,
  label,
  register,
  setValue,
  errors,
  getValues,
}) {
  const { editCourse, course } = useSelector((state) => state.course);
  const [requirement, setRequirement] = useState("");
  const [requirementsList, setRequirementsList] = useState([]);

  useEffect(() => {
    if (editCourse) {
      setRequirementsList(course?.instructions || []);
    }
    register(name, { required: true, validate: (value) => value.length > 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setValue(name, requirementsList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requirementsList]);

  const handleAddRequirement = () => {
    if (requirement) {
      setRequirementsList([...requirementsList, requirement]);
      setRequirement("");
    }
  };

  const handleRemoveRequirement = (index) => {
    const updatedRequirements = [...requirementsList];
    updatedRequirements.splice(index, 1);
    setRequirementsList(updatedRequirements);
  };

  return (
    <div className="flex flex-col space-y-4">
      <label className="text-sm text-gray-800" htmlFor={name}>
        {label} <sup className="text-red-500">*</sup>
      </label>
      <div className="flex flex-col items-start space-y-2">
        <input
          type="text"
          id={name}
          value={requirement}
          onChange={(e) => setRequirement(e.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-gray-800 placeholder-gray-500 focus:border-blue-500 focus:outline-none"
          placeholder={`Add ${label}`}
        />
        <button
          type="button"
          onClick={handleAddRequirement}
          className="rounded-lg bg-blue-600 py-2 px-4 font-semibold text-white hover:bg-blue-700"
        >
          Add
        </button>
      </div>
      {requirementsList.length > 0 && (
        <ul className="mt-2 list-inside list-disc space-y-1">
          {requirementsList.map((req, index) => (
            <li key={index} className="flex items-center text-gray-800">
              <span className="flex-grow">{req}</span>
              <button
                type="button"
                className="ml-2 text-xs text-red-500 hover:underline"
                onClick={() => handleRemoveRequirement(index)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      {errors[name] && (
        <span className="text-xs text-red-500">
          {label} is required
        </span>
      )}
    </div>
  );
}
