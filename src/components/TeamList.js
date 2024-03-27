import React, { useState } from "react";
import CsvUploadModel from "./CsvUploadModel";
import Dropdown from "./Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faFileCsv,
  faSearch,
  faToggleOn,
  faToggleOff,
  faCog,
  faShare,
  faUser,
  faCheck,
  faVectorSquare,
  faUpDown,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import Registrationmodel from "./Registrationmodel";
import QRcodemodel from "./QRcodeModel";

const TeamList = () => {
  const [userInput, setUserInput] = useState("");
  const [list, setList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModalRegistration, setShowModalRegistration] = useState(false);
  const [showModalQRcode, setShowModalQRcode] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  const updateInput = (value) => setUserInput(value);
  const toggle = () => {
    setIsToggled(!isToggled);
  };
  const addItem = () => {
    if (userInput.trim() !== "") {
      setList([...list, { id: Math.random(), value: userInput.trim() }]);
      setUserInput("");
    }
  };

  const handleSearch = (value) => setSearchInput(value);

  const handleSearchClick = () => setShowSearchInput(true);

  return (
    <div
      className="flex flex-col justify-between  border-gray-200"
      style={{ height: "600px" }}
    >
      {/* Header */}
      <div>
        <div className="flex items-center">
          {/* User profile */}
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              alt="img"
              className="w-full h-full object-cover"
              src="https://slamitt-prod.s3.ap-south-1.amazonaws.com/1711451353868_wallpaper640.jpeg"
            />
          </div>
          <h1 className="cursor-pointer ml-4">
            <span className="seprator">Guest |</span>{" "}
            <span className="subCategory">Business</span>
          </h1>
          {/* Dummy button */}
          <button
            type="button"
            className="hidden ml-2 md:block btn btn-default btn-icon-only"
          >
            <span role="img" className="anticon"></span>
          </button>
        </div>

        {/* Add participants */}
        <div className="block text-sm leading-6 text-gray-500 font-medium mb-3 mt-3">
          Add Participants by entering a participant ID
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Add a new task..."
            value={userInput}
            onChange={(e) => updateInput(e.target.value)}
            className="border p-2 w-288 h-47 top-252 left-62 gap-0 mr-3"
          />
          <button onClick={addItem} className="addButton mr-3">
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <button onClick={() => setShowModal(true)} className="csvAddButton">
            <FontAwesomeIcon icon={faFileCsv} />
          </button>
        </div>

        {/* Search */}
        <div className="flex items-baseline">
          <Dropdown searchInput={searchInput} />
          <button onClick={handleSearchClick} className="SearchButton ml-11">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        {showSearchInput && (
          <input
            type="text"
            placeholder="Search..."
            value={searchInput}
            onChange={(e) => handleSearch(e.target.value)}
            className="border p-2 mt-2"
          />
        )}
        {/* List */}
        <ul style={{ "overflow-y": "scroll", height: "380px" }}>
          <div className="text-center">
            {list
              .filter((item) =>
                item.value.toLowerCase().includes(searchInput.toLowerCase())
              )
              .map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center p-4 font-gilroy text-14px rounded-lg shadow-md mb-2 bg-purple-600 text-white"
                >
                  <span>{item.value}</span>
                  <FontAwesomeIcon icon={faShare} />
                </div>
              ))}
          </div>
          ;
        </ul>
      </div>

      {/* Modals */}
      {showModalQRcode && (
        <QRcodemodel closeModal={() => setShowModalQRcode(false)} />
      )}
      {showModalRegistration && (
        <Registrationmodel closeModal={() => setShowModalRegistration(false)} />
      )}
      {showModal && <CsvUploadModel closeModal={() => setShowModal(false)} />}

      {/* Buttons */}
      <div className="border-gray-600 w-10 text-center pt-25">
        <div className="flex items-center registrationButton">
          {isToggled ? (
            <span className="ml-3 cursor-pointer">Registration Is On</span>
          ) : (
            <span className="ml-2 cursor-pointer">Turn On Registration</span>
          )}
          {isToggled && (
            <FontAwesomeIcon
              size="lg"
              icon={faCog}
              className="ml-2 cursor-pointer"
              onClick={() => setShowModalRegistration(true)}
            />
          )}
          {isToggled && (
            <FontAwesomeIcon
              //   size="lg"
              icon={faLink}
              className="ml-2 cursor-pointer"
              onClick={() => setShowModalQRcode(true)}
            />
          )}
          <button onClick={toggle}>
            {isToggled ? (
              <FontAwesomeIcon
                // size="lg"
                style={{ color: "green" }}
                icon={faToggleOn}
                className="ml-2 cursor-pointer"
              />
            ) : (
              <FontAwesomeIcon
                size="lg"
                icon={faToggleOff}
                className="ml-2 cursor-pointer"
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamList;
