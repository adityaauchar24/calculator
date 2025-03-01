import React, { use, useState } from 'react'
import Button from './components/button';
import Input from './components/input';

function Calculator() {
    const numberVal = [1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "/", 0, "X", "C", "="];
    const [inputValue, setInputValue] = useState("");
    const [result, setResult] = useState("");

    const handleButtonValue = (currentNum) => {
        if (currentNum === "X") {
            currentNum = "*";
        }

        if(currentNum === "C") {
            setInputValue("");
            setResult("")
        } else{
          setInputValue((preVal) => preVal + currentNum);
        }
    }

    const calculateResult = () => {

        if (isNaN(inputValue)) {
            setResult(eval(inputValue));
        }else{
            setResult("");   
        }

    };

    return (
        <div style={{ width: "100vw", height: "100vh" , backgroundColor:"red" }} className='flex justify-center items-center'>
            <div className='w-113 h-159 bg-[#0e0d0d] ... rounded-xl p-6'>
                <Input value={inputValue} placeholder="Enter Number" />
                <div className='text-white my-4 text-[24px] ...  font-[Open_Sans] ...'>
                    <span> Result :  {result} </span>
                </div>
                <div>
                    {numberVal.map((num, ind) => {
                        return <Button key={ind} onClick={() => (num === "=") ? calculateResult() : handleButtonValue(num)} num={num} />
                                })}
                </div>
            </div>
        </div>
    );
}

export default Calculator;