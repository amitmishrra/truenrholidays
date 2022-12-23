import Header from "./Components/Navbar"
// import Footer from "./Components/Footer"

const CommonContainer = ({children}) => {
    return (
        
        <>
        <Header/>
        {children}
        {/* <Footer /> */}
        </>
    )
}

export default CommonContainer