import { useState } from "react";
const Card = () => {
  const [isPurple, setIsPurple] = useState(false);
  function handleColor() {
    setIsPurple(!isPurple);
  }

  return (
    <div className={`text-white min-h-[150px] mt-10 sm:mt-12 md:mt-16 lg:mt-20 w-full sm:w-[300px] md:w-[350px] lg:w-[400px] p-3 rounded-xl m-5 ease-in-out hover:shadow-xl transition-shadow ${isPurple ? "bg-green-400" : "bg-purple-500"}`}>
      <h1 className="font-bold text-2xl">
        <input className="w-full bg-inherit outline-none" placeholder="Title" />
      </h1>
      <p className="text-[16px] mt-2">
        <textarea
          className="text-xl bg-inherit h-[140px] w-full p-2 resize-none overflow-y-auto outline-none"
          style={{ textAlign: "left", verticalAlign: "top" }}
          placeholder="Write something..."
        />
      </p>
      <div>
        <p className="flex justify-end">
          <i
            class="fa-solid fa-square-check text-[40px]"
            onClick={handleColor}
          ></i>
        </p>
      </div>
    </div>
  );
};

export default Card;
