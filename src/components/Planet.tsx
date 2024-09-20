import { useParams } from "react-router-dom";
import { useState } from "react";
import data from "../data.json";
import Source from "/images/icon-source.svg";
import Details from "./Details";

interface PlanetData {
  name: string;
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: {
    planet: string;
    internal: string;
    geology: string;
  };
  overview: {
    content: string;
    source: string;
  };
  structure: {
    content: string;
    source: string;
  };
  geology: {
    content: string;
    source: string;
  };
  design: {
    width: string;
    height: string;
    color: string;
  };
}

type Section =
  | "overview"
  | "structure"
  | "geology";

export default function Planet() {
  const { planetName } = useParams();
  const planet = data.find(
    (planet) => planet.name === planetName
  ) as PlanetData | undefined;

  const [selectedSection, setSelectedSection] =
    useState<Section>("overview");

  const handleSectionChange = (
    section: Section
  ) => {
    setSelectedSection(section);
  };

  const sectionContent =
    planet?.[selectedSection]?.content;
  const sectionSource =
    planet?.[selectedSection]?.source;

  return (
    <div className="md:px-[40px] md:pb-[36px] lg:p-0">
      <div>
        <div className="md:hidden lg:hidden">
          <Details
            onSectionChange={handleSectionChange}
            selectedSection={selectedSection}
            color={planet?.design.color || "#fff"}
          />
        </div>
        <div className="flex flex-col items-center mt-[70px] pb-[70px] px-[24px] md:p-0 lg:grid lg:grid-cols-2 lg:p-0">
          <div className="flex justify-center items-center">
            <img
              className="mb-[60px] lg:mb-0"
              src={
                (selectedSection ===
                  "structure" &&
                  planet?.images.internal) ||
                (selectedSection === "geology" &&
                  planet?.images.planet) ||
                planet?.images.planet
              }
              alt="planet img"
            />
            {selectedSection === "geology" && (
              <img
                className="absolute w-[110px] mt-[230px] h-[110px]"
                src={planet?.images.geology}
                alt="geology img"
              />
            )}
          </div>

          <div
            className="md:flex md:justify-between w-full md:items-center
          lg:flex lg:flex-col lg:m-auto"
          >
            <div>
              <h2
                className="text-white text-[40px] mb-[16px] font-medium text-center font-[Antonio] 
              md:text-[48px] md:text-left md:mb-[24px]
              lg:text-[80px] lg:text-left lg:mb-[23px]"
              >
                {planet?.name}
              </h2>
              <p
                className="text-white w-[327px] text-[11px] leading-loose text-center m-auto font-[Spartan]
              md:text-[11px] md:text-left md:w-[339px]
              lg:text-[14px] lg:text-left lg:w-[350px]"
              >
                {sectionContent}
              </p>
              <div
                className="flex justify-center items-center mt-[32px] mb-[28px] 
              md:mt-[44px] md:mb-0 md:justify-start
              lg:mt-[24px] lg:mb-[39px] lg:justify-start"
              >
                <p className="opacity-50 text-white font-[Spartan] text-[12px] leading-[2.08] lg:text-[14px]">
                  Source :{" "}
                  <a href={sectionSource}>
                    <span className="underline">
                      Wikipedia
                    </span>
                  </a>
                </p>
                <img
                  className="w-[12px] h-[12px] ml-[4px]"
                  src={Source}
                  alt="source icon"
                />
              </div>
            </div>

            <div className="hidden md:block lg:block">
              <Details
                onSectionChange={
                  handleSectionChange
                }
                selectedSection={selectedSection}
                color={
                  planet?.design.color || "#fff"
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex items-center flex-col 
      md:flex-row md:px-0 md:pt-[37px] md:pb-0 md:justify-between
      lg:flex-row lg:px-[165px] lg:pt-[87px] lg:pb-[56px] lg:justify-between"
      >
        <div
          className="flex items-center justify-between px-[24px] w-[327px] h-[48px] mb-[8px] border-opacity-20 border-[solid] border-[1px] border-[#fff]
          md:flex md:flex-col md:items-start md:w-[164px] md:h-[88px] md:pt-[16px] md:pb-[19px] md:pl-[15px] md:m-0
         lg:flex lg:flex-col lg:items-start lg:w-[255px] lg:h-[128px] lg:pt-[20px] lg:pb-[27px] lg:pl-[24px] lg:m-0"
        >
          <p className="opacity-50 text-white font-[Spartan] text-[8px] font-bold leading-loose tracking-[0.73px] text-left lg:text-[11px]">
            ROTATION TIME
          </p>
          <p className="font-[Antonio] text-[20px] font-medium tracking-[-0.75px] text-[#fff] lg:text-[40px]">
            {planet?.rotation}
          </p>
        </div>
        <div
          className="flex items-center justify-between px-[24px] w-[327px] h-[48px] mb-[8px] border-opacity-20 border-[solid] border-[1px] border-[#fff]
          md:flex md:flex-col md:items-start md:w-[164px] md:h-[88px] md:pt-[16px] md:pb-[19px] md:pl-[15px] md:m-0
        lg:flex lg:flex-col lg:items-start lg:w-[255px] lg:h-[128px] lg:pt-[20px] lg:pb-[27px] lg:pl-[24px] lg:m-0"
        >
          <p className="opacity-50 text-white font-[Spartan] text-[8px] font-bold leading-loose tracking-[0.73px] text-left lg:text-[11px]">
            REVOLUTION TIME
          </p>
          <p className="font-[Antonio] text-[20px] font-medium tracking-[-0.75px] text-[#fff] lg:text-[40px]">
            {planet?.revolution}
          </p>
        </div>
        <div
          className="flex items-center justify-between px-[24px] w-[327px] h-[48px] mb-[8px] border-opacity-20 border-[solid] border-[1px] border-[#fff]
          md:flex md:flex-col md:items-start md:w-[164px] md:h-[88px] md:pt-[16px] md:pb-[19px] md:pl-[15px] md:m-0
        lg:flex lg:flex-col lg:items-start lg:w-[255px] lg:h-[128px] lg:pt-[20px] lg:pb-[27px] lg:pl-[24px] lg:m-0"
        >
          <p className="opacity-50 text-white font-[Spartan] text-[8px] font-bold leading-loose tracking-[0.73px] text-left lg:text-[11px]">
            RADIUS
          </p>
          <p className="font-[Antonio] text-[20px] font-medium tracking-[-0.75px] text-[#fff] lg:text-[40px]">
            {planet?.radius}
          </p>
        </div>
        <div
          className="flex items-center justify-between px-[24px] w-[327px] h-[48px] border-opacity-20 border-[solid] border-[1px] border-[#fff]
          md:flex md:flex-col md:items-start md:w-[164px] md:h-[88px] md:pt-[16px] md:pb-[19px] md:pl-[15px] md:m-0
        lg:flex lg:flex-col lg:items-start lg:w-[255px] lg:h-[128px] lg:pt-[20px] lg:pb-[27px] lg:pl-[24px] lg:m-0"
        >
          <p className="opacity-50 text-white font-[Spartan] text-[8px] font-bold leading-loose tracking-[0.73px] text-left lg:text-[11px]">
            AVERAGE TEMP.
          </p>
          <p className="font-[Antonio] text-[20px] font-medium tracking-[-0.75px] text-[#fff] lg:text-[40px]">
            {planet?.temperature}
          </p>
        </div>
      </div>
    </div>
  );
}
