import React, { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import Button from "../Button";

interface NavbarProps {
  showLogo?: boolean;
}

const navigationItems = [
  { name: "About", path: "/about" },
  { name: "Education", path: "/education" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
  { name: "Contacts", path: "/contacts" },
];

const Navbar = ({ showLogo = true }: NavbarProps) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Memoriza a função toggleTheme para evitar re-criação
  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  // Memoriza a função toggleMenu para evitar re-criação
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="pl-4 flex-shrink-0">
            <div
              className={`w-12 h-12 rounded-full overflow-hidden transition-opacity duration-300 ${
                showLogo ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src="/images/profile.jpeg"
                alt="Felipe Lima"
                width={48}
                height={48}
                className="object-cover"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                  ${
                    router.pathname === item.path
                      ? "text-gray-900 dark:text-white"
                      : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Theme Toggle and Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            {theme === "dark" ? (
              <Button
                type="button"
                onClick={toggleTheme} // Usando a função memoizada
                icon={<FiSun className="w-5 h-5" />}
                className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700"
              />
            ) : (
              <Button
                type="button"
                onClick={toggleTheme} // Usando a função memoizada
                icon={<FiMoon className="w-5 h-5" />}
                className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700"
              />
            )}

            {isMenuOpen ? (
              <Button
                type="button"
                onClick={toggleMenu} // Usando a função memoizada
                icon={<FiX className="w-6 h-6" />}
                className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              />
            ) : (
              <Button
                type="button"
                onClick={toggleMenu} // Usando a função memoizada
                icon={<FiMenu className="w-6 h-6" />}
                className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              />
            )}
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                    ${
                      router.pathname === item.path
                        ? "text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800"
                        : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

// Envolva o Navbar com React.memo para evitar re-renderizações desnecessárias
export default React.memo(Navbar);
