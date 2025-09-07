import { useState } from "react";
import Home from "../pages/Home.tsx";
import Sidebar from "../components/Sidebar.tsx";
import Loading from "../components/Loading.tsx";

const App = () => {
  const [language, setLanguage] = useState<"georgian" | "english">("georgian");
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex">
      <Sidebar language={language} />
      <Home language={language} setLanguage={setLanguage} setLoading={setLoading} />
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/70">
          <Loading language={language} />
        </div>
      )}
    </div>
  );
};

export default App;
