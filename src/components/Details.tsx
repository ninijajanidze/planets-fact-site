interface DetailsProps {
  onSectionChange: (
    section: "overview" | "structure" | "geology"
  ) => void;
  selectedSection:
    | "overview"
    | "structure"
    | "geology";
  color: string;
}

export default function Details({
  onSectionChange,
  selectedSection,
  color,
}: DetailsProps) {
  return (
    <div
      className="flex justify-between mt-[20px] px-[24px] border-b border-opacity-10 border-w-[375px] border-[#fff] 
      md:border-none md:flex md:flex-col md:gap-[16px] md:p-0 md:m-0
    lg:border-none lg:flex lg:flex-col lg:p-0 lg:m-0 lg:gap-[16px]"
    >
      <div
        className="flex flex-col items-center cursor-pointer md:hidden lg:hidden"
        onClick={() =>
          onSectionChange("overview")
        }
      >
        <p
          className={`text-[9px] font-bold tracking-[1.93px] ${
            selectedSection === "overview"
              ? "text-white"
              : "text-opacity-50 text-[#fff]"
          }`}
        >
          OVERVIEW
        </p>
        {selectedSection === "overview" && (
          <div
            className="w-full h-[4px] mt-[20px]"
            style={{ backgroundColor: color }}
          ></div>
        )}
      </div>

      <div
        className="hidden cursor-pointer 
        md:w-[281px] md:h-[40px] md:border-[solid] md:border-[1px] md:border-[#fff] md:border-opacity-20 md:pt-[12px] md:pb-[7px] md:pl-[20px] md:items-start md:flex md:flex-row  md:bg-[#070724] md:hover:bg-[#d8d8d8] md:hover:bg-opacity-20
        lg:w-[350px] lg:h-[48px] lg:border-[solid] lg:border-[1px] lg:border-[#fff] lg:border-opacity-20 lg:pt-[12px] lg:pb-[11px] lg:pl-[28px] lg:items-start lg:flex lg:flex-row  lg:bg-[#070724] lg:hover:bg-[#d8d8d8] lg:hover:bg-opacity-20"
        style={{
          backgroundColor:
            selectedSection === "overview"
              ? color
              : " ",
        }}
        onClick={() =>
          onSectionChange("overview")
        }
      >
        <span
          className="md:block md:opacity-50 md:text-white md:text-[9px] md:w-[18px] md:mr-[17px]
        lg:block lg:opacity-50 lg:text-white lg:text-[12px] lg:w-[18px] lg:mr-[28px]"
        >
          01
        </span>
        <p
          className="md:block md:text-[9px] md:tracking-[1.93px] text-white
        lg:block lg:text-[12px] lg:tracking-[2.57px] text-white"
        >
          OVERVIEW
        </p>
      </div>

      <div
        className="flex flex-col items-center cursor-pointer md:hidden lg:hidden"
        onClick={() =>
          onSectionChange("structure")
        }
      >
        <p
          className={`text-[9px] font-bold tracking-[1.93px] ${
            selectedSection === "structure"
              ? "text-white"
              : "text-opacity-50 text-[#fff]"
          }`}
        >
          STRUCTURE
        </p>

        {selectedSection === "structure" && (
          <div
            className="w-full h-[4px] mt-[20px]"
            style={{ backgroundColor: color }}
          ></div>
        )}
      </div>

      <div
        className="hidden cursor-pointer
        md:w-[281px] md:h-[40px] md:border-[solid] md:border-[1px] md:border-[#fff] md:border-opacity-20 md:pt-[12px] md:pb-[7px] md:pl-[20px] md:items-start md:flex md:flex-row  md:bg-[#070724] md:hover:bg-[#d8d8d8] md:hover:bg-opacity-20
        lg:w-[350px] lg:h-[48px] lg:border-[solid] lg:border-[1px] lg:border-[#fff] lg:border-opacity-20 lg:pt-[12px] lg:pb-[11px] lg:pl-[28px] lg:items-start lg:flex lg:flex-row lg:bg-[#070724] lg:hover:bg-[#d8d8d8] lg:hover:bg-opacity-20"
        style={{
          backgroundColor:
            selectedSection === "structure"
              ? color
              : " ",
        }}
        onClick={() =>
          onSectionChange("structure")
        }
      >
        <span
          className="md:block md:opacity-50 md:text-white md:text-[9px] md:w-[18px] md:mr-[17px]
        lg:block lg:opacity-50 lg:text-white lg:text-[12px] lg:mr-[28px]"
        >
          02
        </span>
        <p
          className="md:block md:text-[9px] md:tracking-[1.93px] text-white
         lg:text-[12px] lg:font-bold lg:tracking-[2.57px] text-[#fff] lg:block"
        >
          INTERNAL STRUCTURE
        </p>
      </div>

      <div
        className="flex flex-col items-center cursor-pointer md:hidden lg:hidden"
        onClick={() => onSectionChange("geology")}
      >
        <p
          className={`text-[9px] font-bold tracking-[1.93px] ${
            selectedSection === "geology"
              ? "text-white"
              : "text-opacity-50 text-[#fff]"
          }`}
        >
          SURFACE
        </p>

        {selectedSection === "geology" && (
          <div
            className="w-full h-[4px] mt-[20px]"
            style={{ backgroundColor: color }}
          ></div>
        )}
      </div>

      <div
        className="hidden cursor-pointer
        md:w-[281px] md:h-[40px] md:border-[solid] md:border-[1px] md:border-[#fff] md:border-opacity-20 md:pt-[12px] md:pb-[7px] md:pl-[20px] md:items-start md:flex md:flex-row  md:bg-[#070724] md:hover:bg-[#d8d8d8] md:hover:bg-opacity-20
        lg:w-[350px] lg:h-[48px] lg:border-[solid] lg:border-[1px] lg:border-[#fff] lg:border-opacity-20 lg:pt-[12px] lg:pb-[11px] lg:pl-[28px] lg:items-start lg:flex lg:flex-row  lg:bg-[#070724] lg:hover:bg-[#d8d8d8] lg:hover:bg-opacity-20"
        style={{
          backgroundColor:
            selectedSection === "geology"
              ? color
              : " ",
        }}
        onClick={() => onSectionChange("geology")}
      >
        <span
          className="md:block md:opacity-50 md:text-white md:text-[9px] md:w-[18px] md:mr-[17px]
        lg:block lg:opacity-50 lg:text-white lg:text-[12px] lg:mr-[28px]"
        >
          03
        </span>
        <p
          className="md:block md:text-[9px] md:tracking-[1.93px] text-white
         lg:text-[12px] lg:font-bold lg:tracking-[2.57px] lg:block text-[#fff]"
        >
          SURFACE GEOLOGY
        </p>
      </div>
    </div>
  );
}
