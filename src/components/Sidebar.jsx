import React from 'react';
import {
  FaTh,
  FaBars,
  FaUserAlt
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar = ({ children }) => {
  const menuItems = [
    {
      path: "/Dashboard",
      name: "Dashboard",
      icon: <FaTh />
    },
    {
      path: "/Projects",
      name: "Projects",
      icon: <FaUserAlt />
    },
    {
      path: "/Tasks",
      name: "Tasks",
      icon: <FaUserAlt />
    },
    {
      path: "/User",
      name: "User",
      icon: <FaUserAlt />
    },
    {
      path: "/About",
      name: "About",
      icon: <FaUserAlt />
    },
  ]

  return (
    <div className='container'>
      <div className="sidebar">
        <div className="top-section">
          <h1 className="logo">Logo</h1>
          <div className="bars">
            <FaBars />
          </div>
        </div>
        {
          menuItems.map((item, index) => (
            <NavLink to={item.path} key={index} className="link" activeClassName="active">
              <div className="icon">{item.icon}</div>
              <div className="link-text">{item.name}</div>
            </NavLink>
          ))
        }
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
