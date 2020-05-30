import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DataTable from "../components/datatable";
// import Spinner from "../components/spinner";

const AdminCustomers = () => {
  const customers = [
    {
      ID: "12345",
      Name: "Susan Whote",
      Phone: "3123424324",
      Mail: (
        <Link className="text-primary" to="#">
          Mail
        </Link>
      ),
      Details: (
        <Link className="text-primary" to="/admin/customer/id">
          View
        </Link>
      ),
    },
    {
      ID: "12345",
      Name: "Ausan Whote",
      Phone: "3123424324",
      Mail: (
        <Link className="text-primary" to="#">
          Mail
        </Link>
      ),
      Details: (
        <Link className="text-primary" to="#">
          View
        </Link>
      ),
    },
  ];

  // setIsLoading(false);
  return (
    <>
      {/* <Spinner /> */}
      <div className="mt-5">
        <p style={{ fontSize: "20px", fonrWeight: "bold" }}>Customers</p>
        <DataTable data={customers} sort1={"Name"} sort2 sort3 />;
      </div>
    </>
  );
};

export default AdminCustomers;
