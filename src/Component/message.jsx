import React from "react";

export default function Message() {
  return (
    <>
      <style>
        {
          "@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,300;0,400;0,500;1,300&display=swap'); body { background-color: #f7f2e9; font-family: 'Roboto Mono', monospace; margin: 0; }"
        }
      </style>

      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f7f2e9",
        }}
      >
        <h1
          style={{
            fontFamily: '"Roboto Mono", monospace',
            fontWeight: 500,
            fontSize: "1.6rem",
            color: "#333333",
            textAlign: "center",
            margin: 0,
          }}
        >
          We are under maintenance. Stay tuned.....
        </h1>
      </div>
    </>
  );
}
