import {
  Outlet,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Header from "../components/Header";
import { useEffect } from "react";
const navigationLinks: string[] = [
  "/MERCURY",
  "/VENUS",
  "/EARTH",
  "/MARS",
  "/JUPITER",
  "/SATURN",
  "/URANUS",
  "/NEPTUNE",
];
export default function Layout() {
  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();
  useEffect(() => {
    if (navigationLinks.includes(pathname)) {
      navigate(pathname);
    } else {
      navigate("/EARTH");
    }
  }, []);
  return (
    <div className="w-full min-h-screen bg-[#070724] bg-[url(/images/background-stars.svg)]">
      <Header />
      <Outlet />
    </div>
  );
}
