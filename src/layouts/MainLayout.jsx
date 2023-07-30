import React from "react";
import { Helmet } from "react-helmet";
import { Footer, Navbar } from "../components";
import { animateScroll as scroll } from "react-scroll";

const MainLayout = ({ children, title }) => {
  const [y, setY] = React.useState(window.scrollY);

  const handleNavigation = React.useCallback(
    (e) => {
      const window = e.currentTarget;

      setY(window.scrollY);
    },
    [y]
  );

  function handleUp() {
    scroll.scrollToTop({
      duration: 1000,
      delay: 0,
      smooth: "easeInOutQuint",
    });
  }

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
        onClick={handleUp}
        className={`${
          y > 200
            ? "fixed w-20 h-20 border rounded-full bottom-7 right-7 lg:bottom-32 lg:right-20 bg-highlight btn border-stroke z-50"
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
