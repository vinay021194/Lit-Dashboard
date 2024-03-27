import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";
const Registrationmodel = ({ closeModal }) => {
  const [isOrganizationRequired, setIsOrganizationRequired] = useState(false);
  const [isTeamRegistrationRequired, setIsTeamRegistrationRequired] =
    useState(false);

  const toggleOrganizationRequired = () => {
    setIsOrganizationRequired(!isOrganizationRequired);
  };

  const toggleTeamRegistrationRequired = () => {
    setIsTeamRegistrationRequired(!isTeamRegistrationRequired);
  };
  const [minTeamSize, setMinTeamSize] = useState(2);
  const [maxTeamSize, setMaxTeamSize] = useState(3);

  const incrementMinTeamSize = () => {
    setMinTeamSize(minTeamSize + 1);
  };

  const decrementMinTeamSize = () => {
    if (minTeamSize > 1) {
      setMinTeamSize(minTeamSize - 1);
    }
  };

  const incrementMaxTeamSize = () => {
    setMaxTeamSize(maxTeamSize + 1);
  };

  const decrementMaxTeamSize = () => {
    if (maxTeamSize > 1) {
      setMaxTeamSize(maxTeamSize - 1);
    }
  };
  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center z-10">
        {/* Backdrop overlay */}
        <div className="fixed inset-0 bg-black opacity-50"></div>

        <div className="bg-white p-4 rounded-lg shadow-lg relative flex items-center justify-center">
          <div className="absolute top-0 right-0">
            <button
              onClick={closeModal}
              className="text-gray-500 hover:text-gray-700"
            >
              Close
            </button>
          </div>
          <div className="flex flex-col w-full px-4 py-8 bg-white rounded-md shadow-md">
            <h2 className="text-xl font-medium mb-4">Setup Team Size</h2>
            <p className="text-gray-600 mb-8">
              You may edit these settings later.
            </p>
            <div className="flex items-center mb-4">
              <span className="text-gray-700 mr-4">Team</span>

              <div className="flex justify-center">
                <button className="border border-black bg-white mr-8 text-gray-700 px-4 py-2 rounded-md hover:bg-purple-600 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50">
                  Team
                </button>
                <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-purple-600 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50">
                  Solo
                </button>
              </div>
              <div className="absolute top-0 right-0 flex items-center h-full">
                <svg
                  className="w-4 h-4 text-gray-400 hover:text-primary-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 5v5h8L16 5zM5 19v-5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v5m-4-8v-3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3"></path>
                </svg>
              </div>
            </div>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <span className="text-gray-700 mr-4">Min Team Size</span>
                <button
                  onClick={decrementMinTeamSize}
                  className="px-3 py-1 border rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                >
                  -
                </button>
                <input
                  type="text"
                  value={minTeamSize}
                  readOnly
                  className="w-16 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                />
                <button
                  onClick={incrementMinTeamSize}
                  className="px-3 py-1 border rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                >
                  +
                </button>
              </div>
              <div className="flex items-center">
                <span className="text-gray-700 mr-4">Max Team Size</span>
                <button
                  onClick={decrementMaxTeamSize}
                  className="px-3 py-1 border rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                >
                  -
                </button>
                <input
                  type="text"
                  value={maxTeamSize}
                  readOnly
                  className="w-16 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                />
                <button
                  onClick={incrementMaxTeamSize}
                  className="px-3 py-1 border rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                >
                  +
                </button>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-8">
                <label className="flex items-center mr-4">
                  <span className="text-gray-700">
                    Require participants within a team to belong to the same
                    Organisation/Institute
                  </span>
                  <button
                    onClick={toggleOrganizationRequired}
                    className="ml-5 focus:outline-none"
                  >
                    <FontAwesomeIcon
                      size="lg"
                      icon={isOrganizationRequired ? faToggleOn : faToggleOff}
                      className={
                        isOrganizationRequired
                          ? "text-green-500"
                          : "text-gray-500"
                      }
                    />
                  </button>
                </label>
              </div>
              <div className="flex items-center mb-8">
                <label className="flex items-center mr-4">
                  <span className="text-gray-700">
                    Require teams to register by choosing from unassigned team
                    (1)
                  </span>
                  <button
                    onClick={toggleTeamRegistrationRequired}
                    className="ml-5 focus:outline-none"
                  >
                    <FontAwesomeIcon
                      size="lg"
                      icon={
                        isTeamRegistrationRequired ? faToggleOn : faToggleOff
                      }
                      className={
                        isTeamRegistrationRequired
                          ? "text-green-500"
                          : "text-gray-500"
                      }
                    />
                  </button>
                </label>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="border border-black bg-white mr-8 text-gray-700 px-4 py-2 rounded-md hover:bg-purple-600 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50">
                Cancel
              </button>
              <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-purple-600 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50">
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registrationmodel;
