import { Route, Routes, BrowserRouter } from "react-router-dom"
import CommonContainer from "./CommanContainer";
import HomePage from "./Pages/HomePage";
import DomesticPackages from "./Pages/PackagesPage/Domestic";
import InternationalPackages from "./Pages/PackagesPage/International";

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
                <DomesticPackages />
              </CommonContainer>
            } />

          <Route path="/internationalPackages"
            element={
              <CommonContainer>
                <InternationalPackages/>
              </CommonContainer>
            } />

        </Routes>


      </BrowserRouter>
    </>
  );
}

export default App;
