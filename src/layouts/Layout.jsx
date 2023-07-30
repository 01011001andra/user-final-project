import React from "react";

const Layout = ({ bg, children, className }) => {
  return (
    <>
      <div className={`${bg && "bg-teritiary"} `}>
        <div className={`container mx-auto px-4 min-h-screen ${className}`}>
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
