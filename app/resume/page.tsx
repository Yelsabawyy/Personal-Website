import React from "react";
import Resume from "../components/resume";

export default function Page() {
  return (
    <div className=" bg-white  flex flex-col">
      {/* Main content */}
      <div className="flex-1">
        <Resume />
      </div>
    </div>
  );
}
