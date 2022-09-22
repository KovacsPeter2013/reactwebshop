import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "../../assets/admin/css/adminlte.css";
import "../../assets/admin/js/adminlte.js";

const MasterLayout = () => {
  return (
    <div className="wrapper">
      <Navbar />

      <Sidebar />
      <div className="content-wrapper">
      <h1>Irányítópult</h1>
    </div>
    </div>
  );
};

export default MasterLayout;
