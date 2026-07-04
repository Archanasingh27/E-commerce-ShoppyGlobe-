import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";


function Layout() {
  // Page layout includes the header and a main outlet and footer for nested routes.
  return (
    <>
      <Header />
      <main className="container">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
