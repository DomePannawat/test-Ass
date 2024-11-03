import React from "react"; {/* ไลบรารี ของ React ครับ ไว้สร้าง component สำหรับ ต้องมีนะ  */}
import { NavLink } from "react-router-dom"; {/* สร้างลิงก์ที่นำไปยังเส้นทางต่างๆ */}

const UserAndAdmin = () => {  {/* ผมได้สร้าง components ไว้ ชื่อ UserAndAdmin(ชื่อนี้เปลื่ยนได้นะครับ แล้วแต่ แต่แนะนำว่าต้องชื่อเดียวกับไฟล์ อยากให้ระวังเรื่องอักษรหนาบางอะไรด้วยนะครับ ผมโดนมาแล้วปวดหัวเลย) */}
  return (
    <div>
      <div className="flex justify-center items-center"> 
        <NavLink to="/user"> {/* ผมได้สร้างลิงก์กดไว้ เพื่อเวลาผู้ใช้กด มันจะพาไปไฟล์ User.jsx โดยใช้ ลิงค์ URL เป็น "/user" */}
          <button className="bg-white text-black hover:bg-black hover:text-white font-semibold py-2 px-4 border border-black rounded-lg mr-20 mt-5">
            User Home Sector
          </button>
        </NavLink>
        <NavLink to="/admin"> {/* อันนี้หลักการคล้ายๆกับ user นั้นแหละ แค่อันนี้มันจะพาไปหาไฟล์ Admin.jsx โดยใช้ ลิงค์ URL เป็น "/admin" */}
          <button className="bg-white text-black hover:bg-black hover:text-white font-semibold py-2 px-4 border border-black rounded-lg mt-5">
            Admin Home Sector
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default UserAndAdmin;