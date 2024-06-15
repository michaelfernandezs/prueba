const Services=()=>{
    return(
        <div  id="Services" className="p-20 flex flex-col items-center justify-center">
        <h1 className="text-[50px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500">Services</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  justify-around  gap-20">
            <h2 className="text[-26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3x1 h-36 w-44 border-2 border-fuchsia-500 b_glow">HTML5</h2>
            <h2 className="text[-26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3x1 h-36 w-44 border-2 border-fuchsia-500 b_glow">CSS3</h2>
            <h2 className="text[-26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3x1 h-36 w-44 border-2 border-fuchsia-500 b_glow">JavaScript</h2>
            <h2 className="text[-26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3x1 h-36 w-44 border-2 border-fuchsia-500 b_glow">React</h2>
        </div>
        </div>
    );
}

export default Services;