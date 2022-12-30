import { Route, Routes, BrowserRouter } from "react-router-dom"
import CommonContainer from "./CommanContainer";
import Destination from "./Components/Destination";
import HomePage from "./Pages/HomePage";
import DomesticPackages from "./Pages/PackagesPage/Domestic";
import InternationalPackages from "./Pages/PackagesPage/International";
import domDest from "./JSON/domestic.json";
import intDest from "./JSON/international.json";
import About from "./Pages/AboutPage";
import Contact from "./Pages/ContactPage";
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

          <Route path="/about"
            element={
              <CommonContainer>
                <About />
              </CommonContainer>
            } />

          <Route path="/contact"
            element={
              <CommonContainer>
               <Contact/>
              </CommonContainer>
            } />
          {
            domDest.map((dest) => {
              return (
                <Route path={`${dest.path}`}
                  element={
                    <CommonContainer>
                      <Destination description={dest.description} title={dest.place} image={dest.img} duration={dest.duration} places={dest.places} offer={dest.offer} pricing={dest.pricing} />
                    </CommonContainer>
                  } />
              )
            })
          }

          {
            intDest.map((dest) => {
              return (
                <Route path={`${dest.path}`}
                  element={
                    <CommonContainer>
                      <Destination description={dest.description} title={dest.country} image={dest.img} duration={dest.duration} places={dest.places} offer={dest.offer} pricing={dest.pricing} />
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
