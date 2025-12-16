import React from "react";

function Model({ error, isVisible }) {
  // console.log(isVisible);
  if (isVisible) {
    return (
      <div className="absolute bg-black bg-opacity-50 w-full h-full flex justify-center items-center">
        <div>
          <h1
            style={{ color: error == null ? "green" : "red" }}
            className="bg-white text-3xl font-bold p-4 relative px-96"
          >
            {error == null ? "The Form Has Been Submitted Successfully" : error}
          </h1>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default Model;
