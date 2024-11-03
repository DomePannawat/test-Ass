{/* อันนี้ไม่มีไรเลย ไม่ต้องคิดไรเยอะสำหรับหน้านี้ */}
{/* ถ้าเห็นอักษรทำไมมันจัดสวยจัง ผมใช้ Format document ก่อนขึ้น git เพื่อให้ พี่ TA กับเพื่อนๆ อ่านง่ายขึ้น */}
import React from "react";

const Owner = () => {
  return (
    <div>
      <div>
        <h1 className="flex justify-center text-4xl mt-10 font-medium">
          22_DomePannawat GroupMatem : A / JSD8
        </h1>
      </div>

      <div>
        <div className="flex justify-center items-center mt-10">
          <img
            className="w-60"
            src="/Domepannawat.jpg"
            alt="DomePannawat"
          />
        </div>
      </div>

      <div className="flex justify-center items-center mt-10 mb-40">
        <div>
          <p className="flex justify-center items-center font-medium">
            Short Biography:
          </p>
          <br />
          <p className="flex justify-center items-center text-center ">
            My nickname is Dome, or pen name DomePannawat. <br /> I simplify
            complex things constantly seek new challenges, and enjoy pushing my
            limits. <br /> My hobbies include coding, exploring new
            technologies, mindset development <br /> and following motorsports,
            especially Formula 1.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Owner;
