import { useEffect, useState } from "react";
import type { ComponentProps } from "../../utilities/types.ts";
import translations from "../../utilities/translations.ts";

export const Loading = ({ language }: ComponentProps) => {
  const [progress, setProgress] = useState(0);
  const t = translations[language];

  useEffect(() => {
    const duration = 2000;
    const steps = 100;
    const intervalTime = duration / steps;

    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setProgress(current);
      if (current >= 100) clearInterval(interval);
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center px-4 gap-2 w-[280px] h-[80px] border rounded-lg text-[#E1E1E1]">
      <img src="circle.svg" alt="Circle" />
      <div className="flex flex-col gap-2">
        <p className="text-[#383A4899] text-[10px]">{t.converting}</p>
        <div className="flex items-center gap-2">
          <p className="text-[#383A48] text-base font-bold">{progress}%</p>
          <div className="w-[158px] h-[8px] border rounded-[64px] overflow-hidden">
            <div className="h-full bg-[#4571E4] transition-all duration-100" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
};
