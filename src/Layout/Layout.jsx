import { Suspense } from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import PulseLoader from "react-spinners/ClipLoader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Layout() {
  const toglleTheme = (e) => {
    const data = e.target.textContent;
  };
  return (
    <>
      <Suspense
        fallback={
          <PulseLoader
            color="#36d7b7"
            cssOverride={{}}
            margin={10}
            size={30}
            speedMultiplier={1}
          />
        }
      >
        <div style={{ width: "1184px", margin: "0 auto" }}>
          <Header />
        </div>
        <div style={{ width: "1312px", margin: "0 auto" }}>
          <Outlet />
        </div>
        <ToastContainer autoClose={1000} closeOnClick />
      </Suspense>
    </>
  );
}

export default Layout;
