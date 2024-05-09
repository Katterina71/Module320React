import '../App.css'
// Calculator buttons
export default function Keypad ({onButtonClick, onCalculate, onClear}){
    const buttons = [
        '0','1', '2', '3', '4','5','6', '7', '8', '9', '+', '-','*', '/'
    ]

    return (
        <div>
            {buttons.map(button => (
                <button key={button} onClick = {() => onButtonClick(button)} className="button">
                {button}
                </button> ))}
            <button onClick = {onCalculate} className="button">=</button>
            <button onClick = {onClear} className="button">AC</button>
        </div>
    )
}