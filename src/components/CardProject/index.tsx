import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  photo: string;
  url: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, description, photo, url }) => {
  return (
    <div className="group space-y-3">
      {/* Project Image */}
      <div className="aspect-square relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
        <Image
          src={photo}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Project Info */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {description}
        </p>
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
          <span className="text-sm">github.com</span>
        </Link>
      </div>
    </div>
  );
};

export default Card;
