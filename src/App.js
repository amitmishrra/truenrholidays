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
import { useEffect, useState } from "react";
import Loader from "./Components/Loader";
function App() {

  const [loading, setLoading] = useState(false);
  function preloadImages(array) {

    console.log("Preloading images");

    if (!preloadImages.list) {
      preloadImages.list = [];
    }
    var list = preloadImages.list;
    for (var i = 0; i < array.length; i++) {
      
      var img = new Image();
      img.onload = function () {
        var index = list.indexOf(this);
        if (index !== -1) {
          list.splice(index, 1);
        }
        if (list.length === 0) {
          setLoading(true);
        }
        else {
        }
      }
      list.push(img);
      img.src = array[i];
    }
  }

  useEffect(() => {
    const imageUrls = [
      "/assets/icons/package.png",
      "/assets/icons/planTrip.png",
      "/assets/icons/business.png",
      "/assets/icons/international.svg",
      "/assets/icons/airTicket.png",
      "/assets/icons/planTrip.png",
      "/assets/icons/visa.png",
      "/assets/icons/hotel.png",
      "/assets/international/0.jpg",
      "/assets/international/1.jpg",
      "/assets/international/2.jpg",
      "/assets/international/3.jpg",
      "/assets/international/4.jpg",
      "/assets/international/5.jpg",
      "/assets/international/6.jpg",
      "/assets/international/7.jpg",
      "/assets/international/8.jpg",
      "/assets/domestic/0.jpg",
      "/assets/domestic/1.jpg",
      "/assets/domestic/2.jpg",
      "/assets/domestic/3.jpg",
      "/assets/domestic/4.jpg",
      "/assets/domestic/5.jpg",
      "/assets/domestic/6.jpg",
      "/assets/domestic/7.jpg",
      "/assets/about.jpg",
      "/assets/logo.png"
    ]
    preloadImages(imageUrls)
  }, [])

  return (
    <> 
      <BrowserRouter>
       <Routes>

          <Route path="/"
            element={ loading== true ? 
              <CommonContainer>
             <HomePage />
              </CommonContainer> :<Loader/> 
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
                <Contact />
              </CommonContainer>
            } />
          {
            domDest.map((dest) => {
              return (
                <Route path={`${dest.path}`}
                  element={
                    <CommonContainer>
                      <Destination description={dest.description} title={dest.place} image={dest.img} duration={dest.duration} places={dest.places} offer={dest.offer} pricing={dest.pricing} hotelType={dest.hotel}  start={dest.start}/>
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
                      <Destination description={dest.description} title={dest.country} image={dest.img} duration={dest.duration} places={dest.places} offer={dest.offer} pricing={dest.pricing}  hotelType={dest.hotel}  start={dest.start} />
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
