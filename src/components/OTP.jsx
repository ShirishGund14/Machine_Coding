import React, { useEffect, useRef, useState } from 'react'

const OTP = ({ digits }) => {

    const [otp, SetOtp] = useState(new Array(digits).fill(''));
    const inputRef = useRef([]);


    const [randomotp, Setrandomotp] = useState();

    const handleRandomOtemp = (digits) => {
        const min = Math.pow(10, digits - 1);
        const max = Math.pow(10, digits) - 1;

        Setrandomotp(Math.floor(Math.random() * (max - min + 1)) + min);
        SetOtp(new Array(digits).fill(''))
    }

    const handleKey = (e, index) => {
        const copyOtp = [...otp];

        

        // console.log(e.key);
        if (e.key === 'Backspace') {
            copyOtp[index] = '';
            SetOtp(copyOtp);
            if (index - 1 >= 0) inputRef.current[index - 1].focus();
            return;
        }
        if (e.key === 'ArrowLeft') {
            if (index - 1 >= 0) inputRef.current[index - 1].focus();
        }
        if (e.key === 'ArrowRight') {
            if (index + 1 < otp.length) inputRef.current[index + 1].focus();
        }


        // console.log(e.key)

        if (isNaN(e.key)) return; //only digits allowed


        copyOtp[index] = e.key;
        SetOtp(copyOtp);

       


        if (index + 1 < otp.length) inputRef.current[index + 1].focus();

// becoz the state updated in react are asynchronus so that after immediate change when we try to join it doesnt consider the last digit
        if(index===otp.length-1){
            setTimeout(() => {
                const enteredOtp = parseInt(copyOtp.join(''));
                // console.log('Entered OTP:', enteredOtp);
                console.log('enteredOtp',enteredOtp);
                console.log('randomotp',randomotp);
                if(enteredOtp==randomotp){
                   
                window.alert('OTP VERFIED')
                  
                }
                
            }, 0);
        }
    }


    //to make 1st box input in focus
    useEffect(() => {
        inputRef.current[0].focus();
    }, [])

    return (
        <div className='bg-gray-800 p-4 h-screen w-full flex flex-col items-center justify-center py-10'>
            <div className='text-pink-600 text-4xl font-bold my-10 tracking-wider'>OTP</div>

            <div className='flex  items-center gap-6 my-5'>
                <div className='font-bold text-gray-400'>
                    Enter this OTP : {randomotp}
                </div>
                <button className='p-3 bg-pink-700 text-gray-300 rounded-lg' onClick={() => handleRandomOtemp(digits)}>Random OTP</button>
            </div>

            <div className='flex gap-2 md:gap-5'>
                {
                    otp.map((box, index) => {
                        return (
                            <input type='text' className={`bg-transparent  w-4 h-4 md:w-20 md:h-20 p-4 text-gray-200 border-4 rounded-lg text-center`}
                                value={box}
                                onKeyDown={(e) => handleKey(e, index)}
                                ref={(inputval) => inputRef.current[index] = inputval}
                                key={index} />
                        )
                    })
                }



            </div>

        </div>
    )
}

export default OTP
