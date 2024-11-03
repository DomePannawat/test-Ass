import React from "react";
import UserAndAdmin from "../components/UserAndAdmin";
import CreateUserTable from "../components/CreateUserTable";

const Admin = () => {
  return (
    <div>
      <div>
        <h1 className="text-center mt-20 font-bold text-4xl">
          Generation Thailand <br /> Home - Admin Sector
        </h1>
        <br />
      </div>

      <div>
        <UserAndAdmin /> {/* เพื่อนๆไม่ต้องตกใจ เหตุผลที่ผมเลือกใช้วิธีนี้ เพราะจะได้จัดการ เพิ่ม แก้ไข หรือ บริหารไฟล์งานได้สะดวก ไม่ต้องไล่หาโค้ดให้ตาลาย */}
      </div>

      <div className="mt-5">
        <CreateUserTable /> {/* เพื่อนๆไม่ต้องตกใจ เหตุผลที่ผมเลือกใช้วิธีนี้ เพราะจะได้จัดการ เพิ่ม แก้ไข หรือ บริหารไฟล์งานได้สะดวก ไม่ต้องไล่หาโค้ดให้ตาลาย */}
      </div>
    </div>
  );
};

export default Admin;
