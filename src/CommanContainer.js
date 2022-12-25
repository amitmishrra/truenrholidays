import Footer from "./Components/Footer"
import Header from "./Components/Navbar"


const CommonContainer = ({children}) => {
    return (
        
        <>
        <Header/>
      <div className="lg:pl-[120px]">
      {children}
      <Footer/>
      </div>
        
        </>
    )
}

export default CommonContainer