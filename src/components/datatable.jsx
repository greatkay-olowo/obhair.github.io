import React from "react";
import { Table } from "reactable";

const DataTable = ({ data, sort1, sort2, sort3 }) => {
  return (
    <div>
      <Table
        className="table"
        id="table"
        data={data}
        sortable={[sort1, sort2, sort3]}
        defaultSort={{ column: sort1, direction: "desc" }}
        filterable={[sort1, sort2]}
      />
      , {document.getElementById("table")}
    </div>
  );
};

export default DataTable;
