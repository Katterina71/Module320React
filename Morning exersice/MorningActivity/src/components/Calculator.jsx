import { useState } from 'react'
import Display from './Display';'./Display'
import Keypad from './Keypad';'./Keypad';

export default function Calculator (){
const [displayValue, setDisplayValue] = useState('');

const handleClick =(value) => {
    setDisplayValue(prev =>prev+value);
}


const calculateResult = () => {
    try {
        setDisplayValue(eval(displayValue).toString());
    }
    catch (error) {
        setDisplayValue('Error'+error);
    }
}
const clearAll = () => {
    setDisplayValue('');
}
return (
    <div>
        <Display value={displayValue} />
        <Keypad onButtonClick = {handleClick} onCalculate = {calculateResult} onClear = {clearAll}/>
    </div>
)
}