import { Route, Routes, BrowserRouter } from "react-router-dom"
import CommonContainer from "./CommanContainer";
import Destination from "./Components/Destination";
import HomePage from "./Pages/HomePage";
import DomesticPackages from "./Pages/PackagesPage/Domestic";
import InternationalPackages from "./Pages/PackagesPage/International";
import domDest from "./JSON/domestic.json";
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

          {
            domDest.map((dest) => {
              return (
                <Route path={`${dest.path}`}
                  element={
                    <CommonContainer>
                      <Destination description={dest.description} title={dest.place} image={dest.img}/>
                    </CommonContainer>
                  } />
              )
            })
          }
        </Routes>


      </BrowserRouter>
    </>
  );
}

export default App;
