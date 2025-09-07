import { useState } from "react";
import type { HomeProps } from "../utilities/types.ts";
import translations from "../utilities/translations";

interface ExtendedHomeProps extends HomeProps {
  setLoading: (val: boolean) => void;
}

const Home = ({ language, setLanguage, setLoading }: ExtendedHomeProps) => {
  const t = translations[language];

  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [keepFormat, setKeepFormat] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const normalize = (str: string) => str.replace(/\s+/g, " ").trim();

  const handleCompare = () => {
    setLoading(true);
    

    setTimeout(() => {
      let a = text1;
      let b = text2;

      if (!keepFormat) {
        a = normalize(a);
        b = normalize(b);
      }

      if (a === b) {
        setResult(language === "georgian" ? "ტექსტები იდენტურია" : "Texts are identical");
      } else {
        setResult(language === "georgian" ? "ტექსტები განსხვავებულია" : "Texts are different");
      }

      setLoading(false);
    }, 2000); // simulate delay
  };

  return (
    <div>
      <div className="p-6">
        <div className="flex items-center gap-6">
          <div>
            <select
              className="border rounded-lg py-2 px-3"
              name="language"
              id="language-select"
              value={language}
              onChange={(e) => setLanguage(e.target.value as "georgian" | "english")}
            >
              <option value="georgian">ქართული</option>
              <option value="english">English</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <input
              className="scale-150"
              type="checkbox"
              checked={keepFormat}
              onChange={(e) => setKeepFormat(e.target.checked)}
            />
            <p>{t.keepFormat}</p>
          </div>
        </div>
        <hr className="text-[#EDEDED] mt-[17px]" />
        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-3">
            <textarea
              className="bg-[#F0F7FF] w-[542px] h-[432px] mt-6 p-3 text-start align-top resize-none 
             focus:outline-none focus:ring-0"
              placeholder={t.startWriting}
              value={text1}
              onChange={(e) => setText1(e.target.value)}
            ></textarea>
            <img src="../public/Arrow.png" className="w-[32px] h-[32px]" alt="Arrow" />
            <textarea
              className="bg-[#F0F7FF] w-[542px] h-[432px] mt-6 p-3 text-start align-top resize-none 
             focus:outline-none focus:ring-0"
              placeholder={t.startWriting}
              value={text2}
              onChange={(e) => setText2(e.target.value)}
            ></textarea>
          </div>

          <button
            onClick={handleCompare}
            className="bg-[#383A4899] text-white py-[10px] px-4 rounded-md text-sm cursor-pointer hover:opacity-90"
          >
            {t.compare}
          </button>

          {result && <div className="text-lg font-medium mt-2">{result}</div>}
        </div>
      </div>
    </div>
  );
};

export default Home;
