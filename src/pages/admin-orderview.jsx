import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";

const AdminOrderView = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
    window.location = "/admin/orders";
  }
  useEffect(() => {
    setIsOpen(true);
  }, []);

  const customStyles = {
    content: {
      position: "absolute",
      top: "50px",
      left: "50px",
      right: "50px",
      bottom: "550px",
      // marginRight: "-50%",
      height: "400px",
      weight: "100px",
      margin: "0 auto",
      // transform: "translate(-50%, -50%)",
    },
  };

  Modal.setAppElement("body");

  // var subtitle;

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Login"
    >
      <div className="text-center  mt-5 m-auto">
        <button onClick={closeModal} className="btn btn-danger btn-sm">
          close
        </button>
        <div className="col-md-8 order-md-2 mt-5 mb-4 mx-auto">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Lilian's Order</span>
            <span className="badge badge-secondary badge-pill">12/4/2020</span>
            <select name="" id="" className=" form-control-sm">
              <option value="">Pending</option>
              <option value="">Delivered</option>
              <option value="">Shipped</option>
            </select>
          </h4>

          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">Product name</h6>
                <small className="text-muted ">13 pieces</small> <br />
              </div>
              <span className="text-muted">&#xa3;12</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">Product name</h6>
                <small className="text-muted ">13 pieces</small> <br />
              </div>
              <span className="text-muted">&#xa3;12</span>
            </li>
          </ul>
          <li className="list-group-item d-flex justify-content-between">
            <span>Total (&#xa3;)</span>
            <strong>&#xa3;20</strong>
          </li>
        </div>
      </div>
    </Modal>
  );
};

export default AdminOrderView;
