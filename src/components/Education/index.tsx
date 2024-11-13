import React from "react";
import Link from "next/link";

interface EducationProps {
  institution: string;
  course: string;
  status: string;
  period: string;
  certified?: string;
  index: number;
}

const Education: React.FC<EducationProps> = ({
  institution,
  course,
  status,
  period,
  certified,
  index,
}) => {
  return (
    <div
      key={`${institution}-${index}`}
      className="relative flex items-start space-x-8"
    >
      {/* Left Column - Institution */}
      <div className="w-1/3">
        <h3 className="font-medium text-gray-900 dark:text-white">
          {institution}
        </h3>
      </div>

      {/* Right Column - Details */}
      <div className="w-2/3 space-y-2">
        <div className="flex items-center">
          <span className="text-gray-500 dark:text-gray-400">| {period}</span>
        </div>
        <p className="text-gray-900 dark:text-white">{course}</p>
        {status.match("Cursando") ? (
          <span className="text-gray-500 dark:text-gray-400">{status}</span>
        ) : (
          <div className="mt-2">
            <Link
              href={`${certified}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
            >
              Exibir certificado →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Education;
