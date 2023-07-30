import React from "react";
import { Helmet } from "react-helmet";
import { Footer, Navbar } from "../components";

const MainLayout = ({ children, title }) => {
  const [y, setY] = React.useState(window.scrollY);

  const handleNavigation = React.useCallback(
    (e) => {
      const window = e.currentTarget;

      setY(window.scrollY);
    },
    [y]
  );

  React.useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);
  return (
    <div className="relative">
      <button
        className={`${
          y > 200
            ? "fixed w-20 h-20 border rounded-full bottom-7 right-7 lg:bottom-32 lg:right-20 bg-highlight btn border-stroke"
            : "hidden"
        }`}
      >
        UP
      </button>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
