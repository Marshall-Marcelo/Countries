import React from "react";

const Input = () => {
  return (
    <>
      <div className="relative flex flex-row w-full max-w-[200px]">
        <img className="absolute top-2" src="" alt="place" />
        <input
          className="p-2 box-border border-solid border rounded-sm placeholder:pl-4"
          type="text"
          placeholder="Search for a country..."
        />
      </div>
    </>
  );
};

export default Input;
