import React from "react";

const OrderCard = ({ data }) => {
  return (
    <div className="card  shadow mb-4">
      <div className="card-header" style={style.header}>
        <strong>
          Status:{" "}
          <span className={`text-${data.statusKey}`}>{data.status}</span>
        </strong>
      </div>
      <div className="card-body m-0 p-1">
        <div className="card mb-3" style={style.cardBody}>
          <div className="row no-gutters">
            <div className="col-md-3 col-sm-12">
              <img
                src={data.img}
                className="card-img "
                alt="..."
                style={style.imgSize}
              />
            </div>
            <div className="col-md-9 col-sm-12">
              <div className="card-body">
                <p className="card-text mb-3">{data.productName}</p>
                <p className="card-text mb-1">Qty: {data.productQty}</p>
                <p className="card-text mb-1">Length: {data.productLength}</p>
                <p className="card-text mb-1">
                  Price: &#xa3; {data.productPrice}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const style = {
  cardBody: { width: "100%", border: "0px" },
  imgSize: {
    width: "200px",
    padding: "5px",
  },
  header: {
    backgroundColor: "#fff",
  },
};

export default OrderCard;

// data;
// data.statusKey;
// data.status;
// data.productName;
// data.productQty;
// data.productLength;
// data.productPrice;
