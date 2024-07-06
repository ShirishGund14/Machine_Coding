import { useEffect, useRef, useState } from "react"


const Carousel = () => {

    const images = [
        {
            url: 'https://images.unsplash.com/photo-1459603677915-a62079ffd002?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyfGVufDB8fDB8fHww'
        }, {
            url: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnxlbnwwfHwwfHx8MA%3D%3D'
        },
        {
            url: 'https://images.unsplash.com/photo-1484136540910-d66bb475348d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNhcnxlbnwwfHwwfHx8MA%3D%3D'
        }, {
            url: 'https://images.unsplash.com/photo-1556448851-9359658faa54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGNhcnxlbnwwfHwwfHx8MA%3D%3D'
        }
    ]

    const [imgInd, SetImgInd] = useState(0);
    const intervalId=useRef(); // becoz we want to consider same interval id  in useEffcet and onmouse 
    //interval as compo will rerender on state changes and it gives diff intervalid in useeffcr and onmouse
    // so despite of rerendering fact when we want consider same val we used usereff

    const len=images.length-1;

    const handleforward=()=>{
       SetImgInd((prev)=>{
         if(prev===len) return 0;
         else return prev+1;
       })
    }

    const handlebackward=()=>{
        SetImgInd((prev)=>{
            if(prev===0) return len;
            else return prev-1;
          })
    }

    useEffect(()=>{

       
       intervalId.current=  setInterval(() => {
          handleforward();
       }, 3000);

       //we need to stop interval when component unmount other wise it will keep on executing and will
       //cause memort leak we will execute this interval only when we visited this page or compo mount 

       return ()=>{
         clearInterval(intervalId.current);
       }
       
    },[])

    return (
        <div className="h-screen w-full bg-gray-900 p-3">
            <div className="text-gray-400 text-4xl font-bold uppercase text-center my-28" >Img Carousel </div>

            <div className="overflow-hidden flex gap-4 items-center justify-center">

                <button className="text-gray-300  border p-1 md:p-3"
                 onClick={handlebackward}
                 >
                    back</button>

                <div className="w-1/2 h-80 bg-yellow-100">
                    {images.map((img, index) => {
                        return (
                            <img  key={index} src={`${images[imgInd].url}`} className="object-cover w-full h-full hover:cursor-pointer"
                            onMouseEnter={()=>clearInterval(intervalId.current)}
                            onMouseLeave={()=>{
                                intervalId.current=  setInterval(() => {
                                    handleforward();
                                 }, 3000);
                            }}
                            />
                        )
                    })} </div>

                <button className="text-gray-300  border p-1  md:p-3"
                
                onClick={handleforward}
                >forward</button>
            </div>
        </div>
    )
}

export default Carousel
