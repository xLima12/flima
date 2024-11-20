import React from "react";
import Link from "next/link";

const navigationItems = [
  { name: "About", path: "/about" },
  { name: "Education", path: "/education" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
  { name: "Contacts", path: "/contacts" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-auto border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-[2vw] px-4">
        <div className="flex flex-col sm:pt-4 sm:pb-4 md:flex-row items-center justify-between h-20">
          {/* Navigation */}
          <nav className="flex flex-wrap items-center gap-4">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {currentYear} Felipe Lima. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
