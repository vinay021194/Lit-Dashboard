import React from "react";

const CsvUploadModel = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-10 p-10">
      {/* Backdrop overlay */}
      <div className="fixed inset-0 bg-black opacity-50"></div>

      <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-md">
        <div className="absolute top-0 right-0">
          <button
            onClick={closeModal}
            className="text-gray-500 hover:text-gray-700"
          >
            Close
          </button>
        </div>
        <div className="mt-4">
          <div>
            <div>
              <h4 className="text-lg font-semibold">
                Invite Team Codes by CSV
              </h4>
              <span className="block mb-4">
                Download a{" "}
                <a
                  href="https://rethink-competitions.s3.amazonaws.com/1705065981510_1700490578855BulkRegisterSampleSheet14_2.csv"
                  className="text-blue-500 hover:underline"
                  title="Sample CSV Template"
                >
                  Sample CSV Template
                </a>{" "}
                to see an example of the format required
              </span>
              <input
                accept="text/csv, .csv, application/vnd.ms-excel"
                type="file"
                className="hidden"
              />
              <div className="flex flex-col items-center justify-center border-dashed border border-gray-300 rounded-lg h-40 p-8">
                Drop CSV file here or click to upload. Rows with missing values
                will be skipped. Only the first 3 members will be selected in
                each team.
              </div>
              <div className="flex justify-end mt-4">
                <button
                  type="button"
                  className="mr-2 px-4 py-2 text-gray-500 hover:text-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300 disabled:text-gray-500"
                  disabled
                >
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CsvUploadModel;
