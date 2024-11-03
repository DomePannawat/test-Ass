import React, { useState, useEffect } from "react";

const ViewUserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = localStorage.getItem("users"); //ดึงข้อมูลจาก localStorage
    if (storedUsers) { //ตัวเช็คก่อนว่ามีข้อมูลอะป่าว
      setUsers(JSON.parse(storedUsers)); //  ถ้ามี เสร็จโจร เอาข้อมูลมาแปลงจาก JSON เป็น JavaScript object และเก็บใน state users
    }
  }, []); //ทำงานครั้งเดียวหลัง components รันเสร็จ

  return (
    <div className="p-4 rounded-md">
      
      <div className="flex justify-center items-center">
        <table className="w-[1000px] mt-20 mb-10 border border-black">
          <thead className="bg-sky-200">
            <tr>
              <th className="border border-black p-2">Name</th>
              <th className="border border-black p-2">Last Name</th>
              <th className="border border-black p-2">Position</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td className="border border-black p-2 text-center">
                  {user.name}
                </td>
                <td className="border border-black p-2 text-center">
                  {user.lastName}
                </td>
                <td className="border border-black p-2 text-center">
                  {user.position}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewUserTable;
