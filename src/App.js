import { Route, Routes, BrowserRouter } from "react-router-dom"
import CommonContainer from "./CommanContainer";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/"
            element={
             <CommonContainer>
                 <HomePage/>
              </CommonContainer>
            } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
