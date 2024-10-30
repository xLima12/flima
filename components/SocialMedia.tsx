import Link from "next/link";
import React from "react";

interface SocialMediaProps {
  text?: string;
  icon?: React.ReactNode;
  className?: string;
  href?: string;
}

const SocialMedia: React.FC<SocialMediaProps> = ({
  text,
  icon,
  className,
  href = "",
}) => {
  return (
    <Link target="_blank" rel="noopener noreferrer" href={href}>
      <span
        className={className}
        style={{
          display: "inline-flex",
          alignItems: "center",
        }}
      >
        <span style={{ marginRight: "16px" }}>{icon}</span>
        {text}
      </span>
    </Link>
  );
};

export default SocialMedia;
