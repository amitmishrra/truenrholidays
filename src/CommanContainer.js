import Header from "./Components/Navbar"
// import Footer from "./Components/Footer"

const CommonContainer = ({children}) => {
    return (
        
        <>
        <Header/>
      <div className="lg:pl-[120px]">
      {children}
      </div>
        {/* <Footer /> */}
        </>
    )
}

export default CommonContainer