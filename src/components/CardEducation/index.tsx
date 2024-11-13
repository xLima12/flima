import React from "react";
import Link from "next/link";

interface EducationProps {
  institution: string;
  course: string;
  status: string;
  period: string;
  certified?: string;
}

const CardEducation: React.FC<EducationProps> = ({
  institution,
  course,
  status,
  period,
  certified,
}) => {
  return (
    <div
      key={course}
      className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
    >
      <h3 className="font-medium text-gray-900 dark:text-white">
        {institution}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{course}</p>
      <div className="mt-1 flex items-center">
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
        <span className="ml-auto text-sm text-gray-500 dark:text-gray-400">
          {period}
        </span>
      </div>
    </div>
  );
};

export default CardEducation;
