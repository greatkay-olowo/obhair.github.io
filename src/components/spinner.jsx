import React from "react";

const Spinner = () => {
  return (
    <div className="h-100" style={{ margin: "auto" }}>
      <div className="d-flex justify-content-center h-100 justify-content-center align-items-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
