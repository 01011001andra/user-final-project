import React from "react";

const Layout = ({ bg, children, className, id }) => {
  return (
    <>
      <div className={`${bg && "bg-teritiary"} `} id={id}>
        <div className={`container mx-auto px-4 min-h-screen ${className}`}>
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
