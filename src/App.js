import { Route, Routes, HashRouter } from "react-router-dom"
import CommonContainer from "./CommanContainer";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>

          <Route path="/"
            element={
             <CommonContainer>
                 <HomePage/>
              </CommonContainer>
            } />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
