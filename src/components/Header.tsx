import { Link } from "react-router-dom";
import Burger from "/images/icon-hamburger.svg";
import { useState } from "react";
import Arrow from "/images/icon-chevron.svg";

type Planet = {
  name: string;
  color: string;
};

const navigation: Planet[] = [
  { name: "MERCURY", color: "#def4fc" },
  { name: "VENUS", color: "#f7cc7f" },
  { name: "EARTH", color: "#545bfe" },
  { name: "MARS", color: "#ff6a45" },
  { name: "JUPITER", color: "#ecad7a" },
  { name: "SATURN", color: "#fccb6b" },
  { name: "URANUS", color: "#65f0d5" },
  { name: "NEPTUNE", color: "#497efa" },
];

export default function Header() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <header
      className="flex h-[68px] px-[24px] py-[16px] justify-between items-center border-b border-opacity-10 border-w-[375px] border-[#fff]
     md:flex-col md:pt-[32px] md:px-[52px] md:pb-[27px] md:h-[159px]
     lg:flex-row lg:pr-[41px] lg:h-[68px]"
    >
      <h1 className="font-[Antonio] text-white text-[28px] font-medium tracking-[-1.05px]">
        THE PLANETS
      </h1>
      <img
        className="w-[24px] h-[20px] mt-[6px] ml-[196px] cursor-pointer md:hidden lg:hidden"
        src={Burger}
        alt="hamburger icon"
        onClick={toggleMenu}
      />

      {menu && (
        <nav className="absolute top-[70px] left-0 h-screen w-full bg-[#070724] z-50 lg:hidden">
          <ul className="p-[24px] pb-[47px] text-white">
            {navigation.map((planet) => {
              return (
                <li
                  className="flex items-center justify-between text-[15px] py-[20px] font-bold leading-[1.67] tracking-[1.36px] border-b border-opacity-10 border-[#fff] last:border-b-0"
                  key={planet.name}
                  onClick={() => setMenu(false)}
                >
                  <div className="flex items-center">
                    <div
                      className="w-[20px] h-[20px] mr-[24px] rounded-[50%] bg-white"
                      style={{
                        backgroundColor:
                          planet.color,
                      }}
                    ></div>
                    <Link to={planet.name}>
                      {planet.name}
                    </Link>
                  </div>
                  <img
                    src={Arrow}
                    alt="arrow icon"
                  />
                </li>
              );
            })}
          </ul>
        </nav>
      )}
      <ul className="hidden md:block md:flex lg:flex items-center space-x-6">
        {navigation.map((planet) => (
          <li
            key={planet.name}
            className="opacity-75 font-[Spartan] text-[11px] font-bold leading-[2.27] tracking-[1px] text-[#fff] lg:hover:opacity-100"
          >
            <Link to={planet.name}>
              {planet.name}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
