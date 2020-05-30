import React from "react";

const Spinner = () => {
  return (
    <div className="vh-100 align-middle" style={{ margin: "auto" }}>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
