import { useState } from "react";
import { translations } from "../../utilities";
import type { ComponentProps } from "../../utilities";

export const Sidebar = ({ language }: ComponentProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const t = translations[language];

  return (
    <div
      className={`flex flex-col items-center justify-between h-208 md:max-xl:h-285 max-lg:h-15 bg-[#132450] transition-all duration-300 max-sm:w-80 ${
        isOpen ? "w-60" : "w-18"
      }`}
    >
      <img
        className={`absolute top-3 cursor-pointer transition-transform duration-300 max-lg:hidden ${
          isOpen ? "left-48 rotate-0" : "left-10 rotate-180"
        }`}
        src="chevrons-left.svg"
        alt="Toggle Sidebar"
        onClick={() => setIsOpen((prev) => !prev)}
      />

      {isOpen && (
        <div className="flex flex-col items-center cursor-pointer max-lg:p-0">
          <div className="flex items-center max-lg:justify-between pt-11 pr-12 pb-12 gap-3 max-lg:w-screen max-lg:p-2">
            <div className="flex gap-3 max-lg:flex max-lg:gap-2">
              <img src="logo.svg" alt="ENAGRAM Logo" />
              <img src="logo-text.svg" alt="ENAGRAM Text" />
            </div>
            {/* burger menu does not function */}
            <img className="lg:hidden" src="menu.svg" alt="Burger Menu" />
          </div>
          <div className="flex flex-col gap-8 text-sm text-white font-normal font-[Helvetica] max-lg:hidden">
            <div className="flex items-center gap-2 cursor-pointer">
              <img src="check.svg" alt="Checkmark" />
              <p>{t.spellChecker}</p>
            </div>
            <div className="relative flex items-center gap-2 bg-white cursor-pointer">
              <img src="white-outline.svg" alt="Outline" className="absolute scale-155 translate-x-4 max-lg:hidden" />
              <img src="spelling.svg" alt="Spelling" className="relative" />
              <p className="text-[#132450] relative">{t.textCompare}</p>
            </div>
            <div className="flex items-center gap-2 cursor-pointer max-lg:hidden">
              <img src="mic.svg" alt="Microphone" />
              <p>{t.speech}</p>
              <img src="arrow-right.svg" alt="Right Arrow" />
              <p>{t.text}</p>
            </div>
            <div className="flex items-center gap-2 cursor-pointer max-lg:hidden">
              <img src="sound.svg" alt="Sound Waves" />
              <p>{t.text}</p>
              <img src="arrow-right.svg" alt="Right Arrow" />
              <p>{t.speech}</p>
            </div>
            <div className="flex items-center gap-2 cursor-pointer max-lg:hidden">
              <img src="document.svg" alt="Programming Document" />
              <p>{t.pdfConvert}</p>
            </div>
          </div>
        </div>
      )}

      {isOpen && (
        <div className="text-white max-lg:hidden">
          <hr className="lg:w-60 text-[#9EB9FF33]" />
          <div className="flex justify-evenly">
            <div className="flex items-center gap-1 m-3 cursor-pointer">
              <div className="flex items-center justify-center w-5 h-5 bg-[#9EC8FF] border rounded-2xl">
                <p className="text-[#132450] text-[10px] font-bold pb-[2px]">თ</p>
              </div>
              <p>თამარ ონიანი</p>
            </div>
            <img className="cursor-pointer" src="dots-menu.svg" alt="Dots Menu" />
          </div>
        </div>
      )}
    </div>
  );
};
