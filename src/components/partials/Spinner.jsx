import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Spinner = () => {
  return (
    <div className="spinner">
      <ClipLoader color={"#888"} size={100} />
    </div>
  );
};

export default Spinner;
