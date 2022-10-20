import { Routes, Route } from "react-router-dom";
import Health from "./pages/Health/Health";
import Pets from "./pages/Pets/Pets";
// import { createContext } from "react";
import PetsProvider from "./contexts/PetsProvider";
import NightModeProvider from "./contexts/NightModeProvider";
import LangModeProvider from "./contexts/LangModeProvider";

const App = () => {
  // susikurti  dar viena context/ provider su kalba LT, EN
  // spaudziant keiciasi spalva
  return (
    <NightModeProvider>
      <LangModeProvider>
        <PetsProvider>
          <Routes>
            <Route path="/" element={<Pets />} exact />
            <Route path="/health/:id" element={<Health />} exact />
          </Routes>
        </PetsProvider>
      </LangModeProvider>
    </NightModeProvider>
  );
};
export default App;
