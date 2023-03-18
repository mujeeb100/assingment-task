import React from "react";
import "./SideNavBar.css";
import { MdDashboard, MdPayments } from "react-icons/md";
import { BsFillBoxSeamFill, BsBoxes } from "react-icons/bs";
import { IoMdPeople, IoIosInformationCircle } from "react-icons/io";
import { FaHandshake } from "react-icons/fa";
import { AiFillTrophy } from "react-icons/ai";
import { Outlet, NavLink } from "react-router-dom";

function SideNavBar() {
  return (
    <div className="main_sidebar">
      <div className="Sidebar">
        {/* <Outlet></Outlet> */}
        <div className="Dashboard ">
          <MdDashboard />
          &nbsp; DashBoard
        </div>
        <div className="Orders">
          <BsFillBoxSeamFill />
          &nbsp; Orders
        </div>

        <div className="Team_members">
          {" "}
          <IoMdPeople />
          &nbsp; Team Members
        </div>
        <div className="Partners">
          <FaHandshake />
          &nbsp; Partners
        </div>
        <div className="Product_Listings">
          <BsBoxes />
          &nbsp; Product Listings
        </div>
        <div className="Award_hounours">
          <AiFillTrophy />
          &nbsp; Awards & Hounours
        </div>
        {/* about start */}
        <NavLink
          // className="About  active_nav"
          className={({ isActive }) =>
            isActive ? "About  active_nav" : "About"
          }
        >
          <IoIosInformationCircle />
          &nbsp; About
        </NavLink>
        {/* about end */}
        <div className="Payment_info">
          <MdPayments />
          &nbsp; Payment info
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default SideNavBar;
