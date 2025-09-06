import Home from "../pages/Home.tsx";
import Sidebar from "../components/Sidebar.tsx";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Home />
    </div>
  );
};

export default App;
