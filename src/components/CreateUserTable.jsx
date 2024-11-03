import React, { useState, useEffect } from "react";

const CreateUserTable = () => {   {/* ผมได้สร้าง components ไว้ ชื่อ CreateUserTable (ชื่อนี้เปลื่ยนได้นะครับ แล้วแต่ แต่แนะนำว่าต้องชื่อเดียวกับไฟล์ อยากให้ระวังเรื่องอักษรหนาบางอะไรด้วยนะครับ ผมโดนมาแล้วปวดหัวเลย)  */}
  const [users, setUsers] = useState([]); {/* ผมกำหนด สถานะ users ให้เป็นอาร์เรย์ว่างไว้ เพื่อเก็บข้อมูล */}
  const [formData, setFormData] = useState({  // ผมกำหนด สถานะ formData สำหรับเก็บข้อมูลฟอร์มไว้
    name: "",
    lastName: "",
    position: "",
  });

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");  //อันนี้น่าจะยาววว พอมีผมเจอปัญหาตอนระหว่างทำแล้ว เวลาเปลื่ยนไปหน้าอื่นข้อมูลที่เก็บไว้จะหายไป ผมก็เลยมีไอเดียลองไปดึงข้อมูลผู้ใช้จาก  localStorage ต่อให้ผู้ใช้เปลื่ยนหน้าไป(ไม่ใช่รีเซ็ตนะครับ) ข้อมูลที่เก็บไว้ยังอยู่
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers)); // อันนี้ผมทำให้มัน แปลงข้อมูลเป็นอาร์เรย์
    }

    const handleRefresh = (event) => {   // อันนี้เป็นกรณีที่ ถ้าผู้ใช้ รีเช็ตหน้า หรือ กดปุ่ม F5 จะทำการลบข้อมูลใน localStorage (ต้องเข้าไปอยู่ในหน้าของฝั่ง admin เท่านั้น แล้วรีเช็ตหน้า หรือ กดปุ่ม f5 แล้วข้อมูลจะหายไป ถ้าไปรีเช็ตหน้าอื่นที่ไม่ใช่หน้า admin ข้อมูลยังอยู่นะบอกก่อน)
      if (event.persisted || event.type === "beforeunload") {
        localStorage.removeItem("users");  //อันนี้เป็น ตัวลบข้อมูลผู้ใช้จาก localStorage
      }
    };

    window.addEventListener("beforeunload", handleRefresh);

    return () => {
      window.removeEventListener("beforeunload", handleRefresh);
    };
  }, []);

  const handleInputChange = (e) => { // อันนี้เป็นตัวจัดการการเปลี่ยนแปลงข้อมูลในฟอร์ม
    const { name, value } = e.target; //ไปดึงชื่อและค่าจาก input ที่เปลี่ยนแปลง แล้ว อัปเดตข้อมูลนั้นแหละ
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddUser = () => {  //อันนี้เป็นตัวเพิ่มข้อมูลใหม่
    const updatedUsers = [...users, formData];  // สร้างอาร์เรย์
    setUsers(updatedUsers); // อัปเดตสถานนะ ไม่มีไร
    localStorage.setItem("users", JSON.stringify(updatedUsers)); // อันนี้เป็นตัวบันทึกข้อมูลลง localStorage
    setFormData({ name: "", lastName: "", position: "" }); // อันนี้รีเซ็ตข้อมูลฟอร์ม ยังคีย์เสร็จ
  };

  const handleDeleteUser = (index) => {  // ลบชื่อผู้ใช้
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers)); //อันนีเป็นหลังลบข้อมูลเสร็จแล้ว อัปเดตข้อมูลใน localStorage ด้วย
  };

  return (
    <div className="p-4 rounded-md">
      <h2 className="text-xl font-bold mb-4 ml-32">Create User Here</h2>

      <div className="flex justify-center items-center gap-4 mb-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Name"
          className="p-2 border border-black rounded-md w-80"
        />

        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          placeholder="Last Name"
          className="p-2 border border-black rounded-md w-80"
        />

        <input
          type="text"
          name="position"
          value={formData.position}
          onChange={handleInputChange}
          placeholder="Position"
          className="p-2 border border-black rounded-md w-80"
        />

        <button
          onClick={handleAddUser}
          className="p-2 bg-blue-500 text-white rounded-md w-20"
        >
          Save
        </button>
      </div>

      <div className="flex justify-center items-center">
        <table className="w-[1000px] mt-20 mb-10 border border-black">
          <thead className="bg-sky-200">
            <tr>
              <th className="border border-black p-2">Name</th>
              <th className="border border-black p-2">Last Name</th>
              <th className="border border-black p-2">Position</th>
              <th className="border border-black p-2">Action</th>
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
                <td className="border border-black p-2 text-center">
                  <button
                    onClick={() => handleDeleteUser(index)}
                    className="text-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CreateUserTable;
