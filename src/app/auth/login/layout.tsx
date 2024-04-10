import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-screen min-h-screen flex justify-center items-center bg-gray-50">
      {children}
    </div>
  );
};

export default layout;
