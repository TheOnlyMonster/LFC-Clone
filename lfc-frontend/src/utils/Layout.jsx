import { Outlet } from "react-router-dom";
import { Footer, NavigationBar } from "../components";
export default function Layout() {
  return (
    <>
      <NavigationBar />
      <Outlet />
      <Footer />
    </>
  );
}