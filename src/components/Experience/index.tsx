import React from "react";
import Image from "next/image";

interface ExperienceProps {
  company: string;
  role: string;
  period: string;
  logo: string;
  description: string[];
  subRole?: {
    title: string;
    period: string;
    description: string[];
  };
  showDivider?: boolean;
}

const Experience: React.FC<ExperienceProps> = ({
  company,
  role,
  period,
  description,
  logo,
  subRole,
  showDivider = true,
}) => {
  return (
    <div className="space-y-8">
      <div className="flex items-start space-x-4">
        <Logo logo={logo} company={company} />
        <div className="flex-1">
          <RoleInfo title={company} role={role} period={period} />
          <DescriptionList description={description} />
          {subRole && <SubRole subRole={subRole} />}
        </div>
      </div>
      {showDivider && <Divider />}
    </div>
  );
};

interface LogoProps {
  logo: string;
  company: string;
}

const Logo: React.FC<LogoProps> = ({ logo, company }) => (
  <div className="w-12 h-12 relative flex-shrink-0">
    <Image
      src={logo}
      alt={company}
      width={48}
      height={48}
      className="rounded-full"
    />
  </div>
);

interface RoleInfoProps {
  title: string;
  role: string;
  period: string;
}

const RoleInfo: React.FC<RoleInfoProps> = ({ title, role, period }) => (
  <div>
    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
      {title}
    </h2>
    <div className="mt-1">
      <h3 className="text-gray-700 dark:text-gray-200">{role}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">{period}</p>
    </div>
  </div>
);

interface DescriptionListProps {
  description: string[];
}

const DescriptionList: React.FC<DescriptionListProps> = ({ description }) => (
  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
    {description.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

interface SubRoleProps {
  subRole: {
    title: string;
    period: string;
    description: string[];
  };
}

const SubRole: React.FC<SubRoleProps> = ({ subRole }) => (
  <div className="mt-8 pl-4 border-l-2 border-gray-200 dark:border-gray-700">
    <div>
      <h3 className="text-gray-700 dark:text-gray-200">{subRole.title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {subRole.period}
      </p>
    </div>
    <DescriptionList description={subRole.description} />
  </div>
);

const Divider: React.FC = () => (
  <div className="border-b border-gray-200 dark:border-gray-800" />
);

export default Experience;
