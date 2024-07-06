import React, { useEffect, useState } from 'react'
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const Pagination = ({NumberOfProductsToShow=8}) => {



    const [data, SetData] = useState([]);
    const[pageNumber,SetPageNumber]=useState(6);
    const [pagination_Btns,setPagination_Btns]=useState([]);


    

    useEffect(()=>{
        console.log(pageNumber)
        const btns=[];
        for(let i=pageNumber;i>=pageNumber-3;i--) {
            btns.push(i);
            // console.log(i)
        } //prev 3 btns
        btns.reverse();

        for(let i=pageNumber+1;i<=pageNumber+3;i++) btns.push(i); //next 3 btns

        setPagination_Btns(btns);
        console.log(pagination_Btns);
       
    },[pageNumber])

    // console.log(pagination_Btns);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/photos');
                const data = await response.json();

                SetData(data);
               // console.log(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, [NumberOfProductsToShow,pageNumber])


    const handleClick=({btn})=>{
        console.log(pageNumber)
        console.log('btnNo',btn)
        SetPageNumber(btn);
       
    }

    const handleNext=()=>{
        SetPageNumber(pageNumber+1);
    }
    const handlePrev=()=>{
        SetPageNumber(pageNumber-1);
    }

    return (
        <div className='bg-zinc-700 h-screen flex flex-col justify-between items-center p-4'>

            <div className='text-4xl font-bold text-blue-300'>Pagination</div>



            <div className='grid grid-cols-4 w-full '>

                {
                    //p1    1-8  = p,p*8
                    //p2    9-16 =p*2
                    //p3    17-24

                    data.slice(pageNumber* NumberOfProductsToShow-(NumberOfProductsToShow-1),pageNumber* NumberOfProductsToShow).map((data, index) => {
                        return (
                            <div className='bg-white h-60 w-80 p-4 gap-3 my-3' key={index}>
                                <div className='font-bold'>Title: {data.title}</div>
                                <img src={`${data.url}`} alt={`${data.thumbnailUrl}`} className='w-full h-40 object-cover' />
                            </div>
                        )
                    })
                }
            </div>

            
            <div className='flex text-gray-300 justify-center gap-2'>
                <button onClick={handlePrev}><GrFormPrevious/></button>
                 {pagination_Btns.filter((val)=>  val>0).map((btn,index)=>{
                    return (
                        <button className={`p-3 border ${pageNumber===btn ? 'bg-blue-400 text-black' :''}`} key={index} onClick={()=>handleClick({btn})}>{btn}</button>
                    )
                 })}
                 <button onClick={handleNext}> <MdOutlineNavigateNext/></button>
                </div>

        </div>
    )
}

export default Pagination
