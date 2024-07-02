import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import About from "./components/About"
import Services from "./components/Services"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import { useEffect, useState } from "react"
import {Circles } from "react-loader-spinner"
import Contact from "./components/Contact"

const App=()=> {
 
  const[loading,setLoading]=useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
},1000)

 },[])
  return (

   
      
    <>
    {
      loading ?
    <div className="bg-blue-600 h-100 flex justify-center items-center">
      <Circles
      height="80"
      width="80"
      color="#d946ef"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      /> 
     </div>
      

      :
      <div className="bg-gradient-to-r from-blue-600 to-blue-900">

      <Navbar/>
      <Banner/>
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
      </div>
    }
    </>
     


    

  )

}
  

export default App;
