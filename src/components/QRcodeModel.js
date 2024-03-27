import React from "react";
import { useRef, useState } from "react";

const QRcodemodel = ({ closeModal, text }) => {
  const inputRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    inputRef.current.select();
    document.execCommand("copy");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-10">
      {/* Backdrop overlay */}
      <div className="fixed inset-0 bg-black opacity-50"></div>

      <div className="bg-white p-10 h-100 rounded-lg shadow-lg relative">
        <div className="absolute top-0 right-0">
          <button
            onClick={closeModal}
            className="text-gray-500 hover:text-gray-700"
          >
            Close
          </button>
        </div>
        <div className="qrCodeModalContent">
          <h1 className="modalHeading">Invite participants to Qualified</h1>
          <div className="modalBody">
            <div className="qrCodeInfo">
              <span className="qrCodeInfoTextLink">
                <span className="linkIcon">🔗</span> Invite via Link
              </span>
            </div>
            <div className="flex items-center">
              <input
                ref={inputRef}
                type="text"
                value={text}
                readOnly
                className="w-32 p-2 border border-gray-300 rounded-md mr-2 focus:outline-none"
              />
              <button
                onClick={copyToClipboard}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            <div className="qrCodeInfo">
              <span className="orText">Or</span>
              <span className="qrCodeInfoTextLink">
                Scan QR Code
                <a download="" href="">
                  <span className="downloadIcon">⬇️</span>
                </a>
              </span>
            </div>
            <div className="qrCodeBox">
              <div className="qrCodeImage">
                <img
                  src="download.png"
                  alt="QR Code"
                  className="qrImage"
                  style={{ width: "200px", height: "200px" }} // Adjust width and height as needed
                />
              </div>
            </div>
            <div className="attentionMessageBlock">
              <strong>ATTENTION:</strong>
              <p>
                1. Do not use iPhone's default QR code scanner as it is
                unreliable for prolonged sessions.
              </p>
              <p>
                2. Try to avoid using Slamitt on an in-app browser (like within
                Gmail, Instagram, etc). Instead, launch the link into a
                completely new browser session for uninterrupted use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRcodemodel;
