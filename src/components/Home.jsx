import React, { use, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const { title, setTitle } = useState("");
  const { value, setValue } = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();

  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(32),
      createdAt: new Date().toISOString(),
    };

    if(pasteId){
          //update
          dispatch(updateToPastes(paste));
    }
    else{
          //create
           dispatch(addToPastes(paste));
    }
         // after creation or updation
         setTitle("");
         setValue("");
         setSearchParams({});

  }
  return (
    <div>
      <div className="flex flex-row gap-7 place-content-between">
        <input
          className="p-2 w-80 rounded-2xl border-2 border-black mt-4 dark:text-white text-black "
          type="text"
          placeholder="Enter title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /> 
        <button
          onClick={createPaste}
          className="p-2 rounded-2xl mt-4 border-2 border-black dark:text-white text-black"
        >
          {pasteId ? "Update My Paste" : "Create New Paste"}
        </button>
      </div>
      <div>
        <textarea
          className="rounded-2xl mt-4 min-w-[500px] border-black border-2 dark:text-white text-black p-2"
          value={value}
          placeholder="Enter content here"
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  );
};

export default Home;
