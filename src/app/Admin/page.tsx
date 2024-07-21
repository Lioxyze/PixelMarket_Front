import AdminDashboard from "@/Components/Admin/MainAdmin";
import MainAdmin from "@/Components/Admin/MainAdmin";
import Footer from "@/Components/Footer/Footer";
import NavBar from "@/Components/NavBar/NavBar";
import React from "react";

const page = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="">
        <AdminDashboard />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default page;
