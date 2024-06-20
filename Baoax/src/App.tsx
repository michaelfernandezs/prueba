import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import About from "./components/About"
import Services from "./components/Services"
import Projects from "./components/Projects"
import Contact from "./components/Contac"
import Footer from "./components/Footer"
import { useEffect, useState } from "react"
import {Circles } from "react-loader-spinner"

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
    <div className="bg-slate-900 h-100 flex justify-center items-center">
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
      <div className="bg-slate-900">

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
