import { Outlet } from "react-router-dom";
import { Header } from "../../widgets/header/index";
import { Footer } from "../../widgets/footer/index";
export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
