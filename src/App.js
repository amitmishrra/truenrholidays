import { Route, Routes, BrowserRouter } from "react-router-dom"
import CommonContainer from "./CommanContainer";
import HomePage from "./Pages/HomePage";
import DomesticPackages from "./Pages/PackagesPage/Domestic";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/"
            element={
              <CommonContainer>
                <HomePage />
              </CommonContainer>
            } />

          <Route path="/domesticPackages"
            element={
              <CommonContainer>
                <DomesticPackages/>
              </CommonContainer>
            } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
