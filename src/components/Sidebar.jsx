import Logo from "./Logo";
import AppNav from "./AppNav";
import Footer from "./Footer";

import styles from "./Sidebar.module.css";
import { Outlet } from "react-router-dom";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <p>List of cities</p>
      <Footer />
    </div>
  );
}

export default Sidebar;
