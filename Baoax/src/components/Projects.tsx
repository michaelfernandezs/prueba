import img from '../assets/img.jpg.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'

const Projects=()=>{
    return(
   
        <div id='Projects' className="p-20 flex flex-col items-center justify-center ">
        <h1 data-aos-="fade-left" className="text-[50px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500">Projects</h1>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  justify-around  gap-10">
            <img data-aos="fade-up" height={100} width={200} className="text[-26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3x1 h-36 w-42 border-2 p-1 border-fuchsia-500 b_glow" src={img} alt=""/>
            <img data-aos="fade-down" height={100} width={200} className="text[-26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3x1 h-36 w-42 border-2 p-1 border-fuchsia-500 b_glow" src={img2} alt=""/>
            <img data-aos="fade-up" height={100} width={200} className="text[-26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3x1 h-36 w-42 border-2 p-1 border-fuchsia-500 b_glow" src={img3} alt=""/>
           
        </div>    
        </div>
    );

}
export default Projects;
