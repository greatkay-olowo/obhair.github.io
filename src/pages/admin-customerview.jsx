import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";

const AdminCustomerView = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
    window.location = "/admin/customers";
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
      bottom: "50px",
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
      <div className="text-center col-lg-4 col-md-6 col-sm-12 mt-5 m-auto">
        <button onClick={closeModal} className="btn btn-danger btn-sm">
          close
        </button>
        <form className="m-3">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="ID" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Name" />
          </div>
          <div className="form-group">
            <input type="tel" className="form-control" placeholder="Phone" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Address" />
          </div>
          <div className="form-group">
            <br />
            <p className="d-inline float-left">Current Order</p>

            <table className="table">
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>
                    <Link
                      className="btn btn-sm btn-primary d-inline float-right"
                      to="#"
                    >
                      Go to Order
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>
                    <Link
                      className="btn btn-sm btn-primary d-inline float-right"
                      to="#"
                    >
                      Go to Order
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>
                    <Link
                      className="btn btn-sm btn-primary d-inline float-right"
                      to="#"
                    >
                      Go to Order
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AdminCustomerView;
