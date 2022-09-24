import React from "react";
import Navbar from "../../layouts/admin/Navbar";
import Footer from "../../layouts/admin/Footer";
import Sidebar from "../../layouts/admin/Sidebar";
const Profile = () => {
  return (
    <div className="wrapper">
      <Navbar />

      <Sidebar />
      <div className="content-wrapper">

      <h1>Profil</h1>
      </div>
    </div>
  );
};

export default Profile;
