import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  console.log(pastes);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) => {
    // Only include pastes with a valid title
    if (!paste.title) return false;
    return paste.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className=" text-black dark:text-white flex flex-col items-center justify-center mt-10">
      <input
        className="p-2 rounded-2xl min-w-[500px] mt-5"
        type="search"
        placeholder="Search by title"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="flex flex-col gap-5">
        {filteredData.length > 0 &&
          filteredData.map((paste) => {
            return <div key={paste.id || paste.title}>{paste.title}</div>;
          })}
      </div>
    </div>
  );
};

export default Paste;
