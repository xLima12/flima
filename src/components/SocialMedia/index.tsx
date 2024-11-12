import Link from "next/link";
import React from "react";

interface SocialMediaProps {
  url: string;
  icon: React.ReactNode;
  name: string;
  className: string;
}

const SocialMedia: React.FC<SocialMediaProps> = ({
  url,
  icon,
  name,
  className,
}) => {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {icon} <span>{name}</span>
    </Link>
  );
};

export default SocialMedia;
