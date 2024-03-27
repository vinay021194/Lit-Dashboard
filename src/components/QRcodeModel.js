import React from "react";

const QRcodemodel = ({ closeModal }) => {
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
        <div
          role="dialog"
          aria-modal="true"
          className="ant-modal assignTeamModalParent"
          style={{ width: "520px", transformOrigin: "-206.5px 701.742px" }}
        >
          <div
            tabIndex="0"
            aria-hidden="true"
            style={{
              width: "0px",
              height: "0px",
              overflow: "hidden",
              outline: "none",
            }}
          ></div>
          <div className="ant-modal-content">
            <button
              type="button"
              aria-label="Close"
              className="ant-modal-close"
            >
              <span className="ant-modal-close-x">
                <span
                  role="img"
                  aria-label="close"
                  className="anticon anticon-close ant-modal-close-icon"
                ></span>
              </span>
            </button>
            <div className="ant-modal-body">
              <div className="assignTeamModal">
                <h1 className="ant-typography assignTeamModalHeading">
                  Invite participants to Qualified
                </h1>
                <div className="assignTeamModalContent">
                  <div className="qrCodeInfo">
                    <span className="ant-typography qrCodeInfoTextLink">
                      <span
                        role="img"
                        aria-label="link"
                        className="anticon anticon-link"
                      ></span>{" "}
                      Invite via Link
                    </span>
                  </div>
                  <div className="invitelinkField">
                    <div className="qrCodeInfoText">
                      <span className="ant-typography">
                        <div
                          role="button"
                          tabIndex="0"
                          className="ant-typography-copy"
                          aria-label="Copy"
                          style={{
                            border: "0px",
                            background: "transparent",
                            padding: "0px",
                            lineHeight: "inherit",
                            display: "inline-block",
                          }}
                        >
                          <span
                            role="img"
                            aria-label="copy"
                            className="anticon anticon-copy"
                          ></span>
                        </div>
                      </span>
                    </div>
                  </div>
                  <div className="qrCodeInfo">
                    <span className="ant-typography qrCodeInfoText or">Or</span>
                    <span className="ant-typography qrCodeInfoTextLink">
                      Scan QR Code
                      <a download="" href="">
                        <span role="img" className="anticon"></span>
                      </a>
                    </span>
                    <span className="ant-typography qrCodeInfoTextLink none">
                      Scan or{" "}
                      <a
                        download=""
                        href=""
                        style={{
                          marginRight: "0.2rem",
                          marginLeft: "0.2rem",
                          color: "rgb(102, 102, 102)",
                          textDecoration: "underline",
                        }}
                      >
                        Download
                      </a>{" "}
                      QR Code
                    </span>
                  </div>
                  <div className="qrCodeBox">
                    <div className="ant-image">
                      <img
                        className="ant-image-img"
                        src="URL_HERE"
                        alt="QR Code"
                      />
                    </div>
                  </div>
                  <div className="attentionMessageBlock">
                    <strong className="attentionMessageBlockTitle">
                      ATTENTION:
                    </strong>
                    1. Do not use iPhone's default QR code scanner as it is
                    unreliable for prolonged sessions.
                    <br />
                    2. Try to avoid using Slamitt on an in-app browser (like
                    within Gmail, Instagram, etc). Instead, launch the link into
                    a completely new browser session for uninterrupted use.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            tabIndex="0"
            aria-hidden="true"
            style={{
              width: "0px",
              height: "0px",
              overflow: "hidden",
              outline: "none",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default QRcodemodel;
