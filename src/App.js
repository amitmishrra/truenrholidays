import { Route, Routes, BrowserRouter } from "react-router-dom"
import CommonContainer from "./CommanContainer";
import Destination from "./Components/Destination";
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
                <InternationalPackages />
              </CommonContainer>
            } />

          <Route path="/internationalPackages/Thailand"
            element={
              <CommonContainer>
                <Destination />
              </CommonContainer>
            } />


        </Routes>


      </BrowserRouter>
    </>
  );
}

export default App;
