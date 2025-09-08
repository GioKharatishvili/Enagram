import type { ComponentProps } from "../../utilities/types.ts";
import translations from "../../utilities/translations.ts";

export const Sidebar = ({ language }: ComponentProps) => {
  const t = translations[language];

  return (
    <div className="flex flex-col items-center justify-between w-1/6 h-screen bg-[#132450]">
      <div className="flex flex-col items-center cursor-pointer">
        <div className="flex items-center pt-11 pr-12 pb-12 gap-3">
          <img src="logo.svg" alt="ENAGRAM Logo" />
          <img src="logo-text.svg" alt="ENAGRAM Text" />
        </div>
        <div className="flex flex-col gap-8 text-sm text-white font-normal font-[Helvetica]">
          <div className="flex items-center gap-2 cursor-pointer">
            <img src="check.svg" alt="Checkmark" />
            <p>{t.spellChecker}</p>
          </div>
          <div className="relative flex items-center gap-2 bg-white cursor-pointer">
            <img src="white-outline.png" alt="Outline" className="absolute scale-155 translate-x-4" />
            <img src="spelling.svg" alt="Spelling" className="relative" />
            <p className="text-[#132450] relative">{t.textCompare}</p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <img src="mic.svg" alt="Microphone" />
            <p>{t.speech}</p>
            <img src="arrow-right.svg" alt="Right Arrow" />
            <p>{t.text}</p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <img src="sound.svg" alt="Sound Waves" />
            <p>{t.text}</p>
            <img src="arrow-right.svg" alt="Right Arrow" />
            <p>{t.speech}</p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <img src="document.svg" alt="Programming Document" />
            <p>{t.pdfConvert}</p>
          </div>
        </div>
      </div>
      <div className="text-white">
        <hr className="w-[240px] text-[#9EB9FF33]" />
        <div className="flex justify-evenly">
          <div className="flex items-center gap-[5px] m-3 cursor-pointer">
            <div className="flex items-center justify-center w-[20px] h-[20px] bg-[#9EC8FF] border rounded-2xl">
              <p className="text-[#132450] text-[10px] font-bold pb-[2px]">თ</p>
            </div>
            <p>თამარ ონიანი</p>
          </div>
          <img className="cursor-pointer" src="dots-menu.svg" alt="Dots Menu" />
        </div>
      </div>
    </div>
  );
};
