import React, { useEffect, useRef, useState } from 'react'

const CountDownTimer = () => {

    const [time, SetTime] = useState({
        hour: 0,
        minute: 0,
        second: 0
    })

    const [isrunning, Setisrunning] = useState(false);
    const intervalRef=useRef()

    const handleChange = (e) => {

        const val = parseInt(e.target.value, 10) || 0;

        const copytime = { ...time };

        copytime[e.target.name] = val;
        // console.log(copytime);

        copytime.minute += Math.floor(copytime.second / 60);
        copytime.second = copytime.second % 60;
        copytime.hour += Math.floor(copytime.minute / 60);
        copytime.minute = copytime.minute % 60;
        // when the arrow function is used to return an object directly, you need to wrap the object in parentheses (). 
        //This prevents the curly braces {} from being interpreted as the beginning of the function body.

        SetTime(copytime);

    }


    const handlestart = () => {

        if (time.hour === 0 && time.second === 0 && time.minute === 0) return;

        Setisrunning(!isrunning);

    }

    const handleReset=()=>{
        if(isrunning){
            Setisrunning(!isrunning);
        }
        clearInterval(intervalRef.current)
        SetTime({
            hour: 0,
            minute: 0,
            second: 0
        })

    }


    useEffect(() => {
        if (isrunning) {



            intervalRef.current=setInterval(() => {

                SetTime((prev) => {

                     const {hour,minute,second} =prev;

                     //below code doesnt work because we need to make copy of hour minute and second as react dont allowed to change const states 
                    // second--;

                    // if (second < 0) {
                    //     minute--;
                    //     second = 59;
                    // }
                    // if (minute < 0) {
                    //     hour--;
                    //     minute = 59;
                    //     second = 59;
                    // }
                    // if (hour < 0) {
                    //     clearInterval(intervalRef.current);
                    //     return {

                    //         hour: 0,
                    //         minute: 0,
                    //         second: 0

                    //     }
                    // }

                    // return {hour,minute,second};

                     // Calculate new values
                let newHour = hour;
                let newMinute = minute;
                let newSecond = second - 1;

                // Adjust minute and second if necessary
                if (newSecond < 0) {
                    newSecond = 59;
                    newMinute -= 1;
                }
                if (newMinute < 0) {
                    newMinute = 59;
                    newHour -= 1;
                }

                // Clear interval and reset time if all values are zero
                if (newHour < 0) {
                    clearInterval(intervalRef.current);
                    return {
                        hour: 0,
                        minute: 0,
                        second: 0
                    };
                }

                // Return the updated state
                return {
                    hour: newHour,
                    minute: newMinute,
                    second: newSecond
                };


                })

            }, 1000)

        }


        return()=>{
            clearInterval(intervalRef.current);
        }
    }, [isrunning])




    return (
        <div className='h-screen bg-purple-800 p-4  flex flex-col  items-center justify-center gap-6 '>

            <div className='text-4xl font-bold text-gray-200  text-center my-10 '>Count Down Timer</div>


            <div className='flex gap-3 items-center justify-center  my-10 '>

                <div className='text-violet-400 flex flex-col items-center justify-center gap-3'>
                    <div className='text-2xl font-bold'>Hour</div>
                    <input type='text' className='p-3  bg-gray-900 font-bold  text-center rounded-full' name='hour' value={time.hour} onChange={handleChange} />
                </div>

                <span className='text-5xl font-extrabold text-gray-100'>:</span>

                <div className='text-violet-400 flex flex-col items-center justify-center gap-3'>
                    <div className='text-2xl font-bold'>Minute</div>

                    <input type='text' className='p-3  bg-gray-900 font-bold text-center rounded-full ' name='minute' value={time.minute} onChange={handleChange} />
                </div>

                <span className='text-5xl font-extrabold text-gray-100'>:</span>

                <div className='text-violet-400 flex flex-col items-center justify-center gap-3'>
                    <div className='text-2xl font-bold'>Seconds</div>
                    <input type='text' className='p-3  bg-gray-900 font-bold text-center rounded-full' name='second' value={time.second} onChange={handleChange} />
                </div>


            </div>
            <div className='flex gap-3'>
                <button className='bg-violet-300 text-black p-3 rounded-md font-medium' onClick={handlestart}>{isrunning ? 'Pause' : 'Start'}</button>
                <button className='bg-violet-300 text-black p-3 rounded-md font-medium' onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}

export default CountDownTimer
