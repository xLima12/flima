import React from "react";
import Image from "next/image";

interface ExperienceProps {
  company: string;
  role: string;
  period: string;
  logo: string;
  showDivider: boolean;
}

const CardExperience: React.FC<ExperienceProps> = ({
  company,
  logo,
  period,
  role,
  showDivider = true,
}) => {
  return (
    <div key={company}>
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 relative flex-shrink-0">
          <Image
            src={logo}
            alt={company}
            width={48}
            height={48}
            className="rounded-full"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-gray-900 dark:text-white">
            {company}
          </h3>
          <div className="flex items-center justify-between w-full mt-1">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {role}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400 ml-4">
              {period}
            </span>
          </div>
        </div>
      </div>
      {showDivider && (
        <div className="my-8 border-b border-gray-200 dark:border-gray-700" />
      )}
    </div>
  );
};

export default CardExperience;
