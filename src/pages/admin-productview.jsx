import React, { useEffect, useState } from "react";
import Modal from "react-modal";

const AdminProductView = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
    window.location = "/admin/products";
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
            <input type="text" className="form-control" placeholder="Name" />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Category"
            />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Price" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Colour" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Qty" />
          </div>
          <div className="form-group">
            <label>Add product image</label>
            <input type="file" className="form-control" placeholder="File" />
          </div>

          <button className="btn btn-primary btn-sm col-12">Save</button>
        </form>
      </div>
    </Modal>
  );
};

export default AdminProductView;
