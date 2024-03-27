import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="h-auto bg-white shadow-md z-10 pt-7 pb-7">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span
            className="ant-avatar ant-avatar-circle ant-avatar-image mr-2"
            style={{ width: "32px", height: "32px" }}
          >
            <img
              src="https://rethink-competitions.s3.amazonaws.com/1659457683750_1655746609367slamittlogosmall.png"
              className="w-full h-full object-cover"
            />
          </span>
          <Link href="/dashboard" legacyBehavior>
            <a className="text-black font-medium text-lg leading-5 no-underline">
              Dashboard
            </a>
          </Link>
        </div>
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center text-sm text-gray-500 font-medium mr-4 focus:outline-none"
          >
            <span className="mr-1">Guest</span>
            <span
              className="w-10 h-10 rounded-full overflow-hidden"
              style={{ width: "24px", height: "24px" }}
            >
              <img
                src="https://slamitt-prod.s3.ap-south-1.amazonaws.com/1711451353868_wallpaper640.jpeg"
                className="w-full h-full object-cover"
              />
            </span>
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
              <Link href="/profile" legacyBehavior>
                <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Profile
                </a>
              </Link>
              <Link href="/myaccount" legacyBehavior>
                <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  My Account
                </a>
              </Link>
              <Link href="/logout" legacyBehavior>
                <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Logout
                </a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
