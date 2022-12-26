import Footer from "./Components/Footer"
import Header from "./Components/Navbar"


const CommonContainer = ({children}) => {
    return (
        
        <>
        <Header/>
      <div className="lg:pl-[150px]">
     <div className="min-h-[100vh]">
     {children}
     </div>
      <Footer/>
      </div>
        
        </>
    )
}

export default CommonContainer