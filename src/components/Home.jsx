import { Outlet } from "react-router";
import {Navbar} from "./Navbar";
import { Footer } from "./Footer";


export const Home = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
};


