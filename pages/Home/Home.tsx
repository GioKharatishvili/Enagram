import { useState } from "react";
import { translations } from "../../utilities";
import type { ExtendedHomeProps } from "../../utilities";

export const Home = ({ language, setLanguage, loading, setLoading }: ExtendedHomeProps) => {
  const t = translations[language];

  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [keepFormat, setKeepFormat] = useState(false);
  const [highlightedA, setHighlightedA] = useState<React.ReactNode[] | null>(null);
  const [highlightedB, setHighlightedB] = useState<React.ReactNode[] | null>(null);
  const [reset, setReset] = useState(false);

  const normalize = (str: string) => str.replace(/\s+/g, " ").trim();

  const handleCompare = () => {
    if (reset) {
      setText1("");
      setText2("");
      setHighlightedA(null);
      setHighlightedB(null);
      setReset(false);

      return;
    }

    setLoading(true);

    setTimeout(() => {
      let a = text1;
      let b = text2;

      if (!keepFormat) {
        a = normalize(a);
        b = normalize(b);
      }

      if (a === b) {
        setHighlightedA([
          <span key="matchA" className="bg-green-300 text-green-900 px-1 rounded">
            {a}
          </span>,
        ]);
        setHighlightedB([
          <span key="matchB" className="bg-green-300 text-green-900 px-1 rounded">
            {b}
          </span>,
        ]);
      } else {
        const wordsA = a.split(" ");
        const wordsB = b.split(" ");
        const maxLen = Math.max(wordsA.length, wordsB.length);

        const highlightA: React.ReactNode[] = [];
        const highlightB: React.ReactNode[] = [];

        for (let i = 0; i < maxLen; i++) {
          const wordA = wordsA[i] || "";
          const wordB = wordsB[i] || "";

          if (wordA === wordB) {
            highlightA.push(<span key={`a${i}`}>{wordA} </span>);
            highlightB.push(<span key={`b${i}`}>{wordB} </span>);
          } else {
            if (wordA) {
              highlightA.push(
                <span key={`a${i}`} className="bg-red-300 text-red-900 px-1 rounded">
                  {wordA}{" "}
                </span>
              );
            }
            if (wordB) {
              highlightB.push(
                <span key={`b${i}`} className="bg-red-300 text-red-900 px-1 rounded">
                  {wordB}{" "}
                </span>
              );
            }
          }
        }

        setHighlightedA(highlightA);
        setHighlightedB(highlightB);
      }

      setReset(true);
      setLoading(false);
    }, 2000); // simulate delay
  };

  return (
    <div>
      <div className="p-6">
        <div className="flex items-center gap-6 max-sm:flex-col max-sm:items-start">
          <div>
            <select
              className="border rounded-lg py-2 px-3 max-sm:w-72"
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
        <hr className="text-[#EDEDED] mt-4" />
        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-3 max-sm:flex-col">
            <div className="bg-[#F0F7FF] w-135 h-108 mt-6 p-3 overflow-auto whitespace-pre-wrap text-start align-top resize-none max-lg:w-83 max-sm:w-72 max-sm:h-48">
              {highlightedA ? (
                highlightedA
              ) : (
                <textarea
                  className="bg-[#F0F7FF] p-3 text-start align-top resize-none 
             focus:outline-none focus:ring-0"
                  placeholder={t.startWriting}
                  value={text1}
                  onChange={(e) => setText1(e.target.value)}
                  disabled={reset}
                ></textarea>
              )}
            </div>

            <img src="Arrow.svg" className="w-8 h-8 max-sm:rotate-90" alt="Arrow" />

            <div className="bg-[#F0F7FF] w-135 h-108 mt-6 p-3 overflow-auto whitespace-pre-wrap text-start align-top resize-none max-lg:w-83 max-sm:w-70 max-sm:h-480">
              {highlightedB ? (
                highlightedB
              ) : (
                <textarea
                  className="bg-[#F0F7FF] p-3 text-start align-top resize-none 
             focus:outline-none focus:ring-0"
                  placeholder={t.startWriting}
                  value={text2}
                  onChange={(e) => setText2(e.target.value)}
                  disabled={reset}
                ></textarea>
              )}
            </div>
          </div>

          <button
            onClick={handleCompare}
            disabled={loading || !text1 || !text2}
            className="flex gap-2 bg-[#4571E4] text-white py-[10px] px-4 rounded-md text-sm cursor-pointer hover:opacity-90 disabled:bg-[#383A4899] disabled:cursor-not-allowed"
          >
            {reset && <img src="reset.svg" alt="Reset" />}
            {t.compare}
          </button>
        </div>
      </div>
    </div>
  );
};
