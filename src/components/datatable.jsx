import React from "react";
import { Link } from "react-router-dom";
import { Table } from "reactable";

const DataTable = () => {
  return (
    <div>
      <Table
        className="table"
        id="table"
        data={[
          { State: "New York", Description: "this is some text", Tag: "new" },
          { State: "New Mexico", Description: "lorem ipsum", Tag: "old" },
          {
            State: "Colorado",
            Description: "new description that shouldn't match filter",
            Tag: "old",
          },
          {
            State: "Alaska",
            Description: "bacon",
            Tag: <Link to="/admin">Home</Link>,
          },
        ]}
        sortable={["State", "Tag"]}
        defaultSort={{ column: "State", direction: "desc" }}
        filterable={["State", "Tag"]}
      />
      , {document.getElementById("table")}
    </div>
  );
};

export default DataTable;
