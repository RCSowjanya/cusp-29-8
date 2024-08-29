import React, { useState, useEffect } from "react";
import InSidebar from "./InSidebar";
import DashboardHeader from "./DashboardHeader";
import Orders from "../InstallerDashboardsPages/Orders";
import Profile from "./Profile";
import Proposals from "./Proposals";
import Quotations from "./Quotations";
import Quotations3 from "./Quotations3";
import Quotations4 from "./Quotations4";
const InDashboard = () => {
  const [isActiveItem, setIsActiveItem] = useState("dashboard");
  const [sidebarWidth, setSidebarWidth] = useState("w-60"); // Default sidebar width

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSidebarWidth("w-0"); // Sidebar collapsed on mobile
      } else {
        setSidebarWidth("w-60"); // Sidebar expanded on desktop
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once to set initial width

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getTitle = () => {
    switch (isActiveItem) {
      case "dashboard":
        return "Dashboard";
      case "orders":
        return "Orders";
      case "quotations":
        return "Quotations";
      case "proposals":
        return "Proposals";
      case "profile":
        return "Profile";
      case "quotations3":
        return "Quotations3";
      case "quotations4":
        return "Quotations4";
      default:
        return "Dashboard";
    }
  };

  const renderContent = () => {
    switch (isActiveItem) {
      case "dashboard":
        return <div className="m-[2%]"></div>;

      case "orders":
        return <Orders />;
      case "quotations":
        return <Quotations />;
      case "proposals":
        return <Proposals />;
      case "profile":
        return <Profile />;
      case "quotations3":
        return <Quotations3 />;
      case "quotations4":
        return <Quotations4 />;
      default:
        return <div>Dashboard Content</div>;
    }
  };
  const getBackLink = () => {
    switch (isActiveItem) {
      case "quotations3":
        return "/quotations1";
      case "quotations4":
        return "/quotations2";
      default:
        return null; // No back link for other pages
    }
  };

  return (
    <div className="flex">
      <InSidebar
        className={`fixed top-0 left-0 h-full ${sidebarWidth} transition-all duration-300`}
        isActiveItem={isActiveItem}
        setIsActiveItem={setIsActiveItem} // Pass setIsActiveItem as prop
      />
      <div
        className={`transition-all duration-300`}
        style={{
          marginLeft: sidebarWidth === "w-60" ? "16rem" : "4rem",
          width: `calc(100% - ${sidebarWidth === "w-60" ? "16rem" : "4rem"})`,
        }}
      >
        <DashboardHeader
          title={getTitle()}
          showBackButton={
            isActiveItem === "quotations3" || isActiveItem === "quotations4"
          }
          backLink={getBackLink()}
        />
        {renderContent()}
      </div>
    </div>
  );
};

export default InDashboard;
