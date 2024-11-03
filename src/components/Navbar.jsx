import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-sky-200 p-4">
      <ul className="flex justify-end">
        <li>
          <NavLink to="/" className="text-gray-800 mr-10 font-bold">
            Home
          </NavLink> {/* ผมทำให้ คำว่า HOME สามารถลิงก์ไปยังหน้าแรกของงานได้ ก็คือจะไปหา ไฟล์ home.jsx นั้นแหละโดยใช้ ("/") */}
        </li>

        <li>
          <NavLink to="/owner" className="text-gray-800 mr-8 font-bold">
            Owner
          </NavLink> {/* อันนี้หลักการคล้ายๆ Home เลย พาไปหา ไฟล์ Owner.jsx */}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
