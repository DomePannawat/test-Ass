{/* ถ้าเห็นอักษรทำไมมันจัดสวยจัง ผมใช้ Format document ก่อนขึ้น git เพื่อให้ พี่ TA กับเพื่อนๆ อ่านง่ายขึ้น */}
import React from "react";
import UserAndAdmin from "../components/UserAndAdmin";

const Home = () => {
  return (
    <div>
      <div>
        <h1 className="text-center mt-20 font-bold text-4xl">
          Generation Thailand <br /> React - Assessment
        </h1>
        <br />
      </div>

      <div>
        <UserAndAdmin /> {/* เพื่อนๆไม่ต้องตกใจ เหตุผลที่ผมเลือกใช้วิธีนี้ เพราะจะได้จัดการ เพิ่ม แก้ไข หรือ บริหารไฟล์งานได้สะดวก ไม่ต้องไล่หาโค้ดให้ตาลาย */}
      </div>
    </div>
  );
};

export default Home;
