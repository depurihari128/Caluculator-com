import'./App.css'
import{useState} from "react"
function App(){
  let[input,setInput]=useState("");
const [isLeftBrace, setIsLeftBrace] = useState(true);
  function updateFunction(value){
    setInput(input + value)

  }
  function calculate(){
    let sum=eval(input);
    setInput(sum)

  }
  function Clear(){
    setInput("")
  }
  function handleBraceClick() {
    if (isLeftBrace) {
      updateFunction('(');   
    } else {
      updateFunction(')');   
    }
    setIsLeftBrace(!isLeftBrace); 
  }
  function remove(){
    setInput(input.slice(0,-1))
  }

  
  return(
    <div className="container">
      
       <h1> <u>Calculetar App</u></h1>
      
      <div className='row'>
        <input type="text" value={input}className="output"/>
      </div>
      <div>
      <button className="function" onClick={()=>{
        Clear("")
      }}>AC</button>
      <button className="operator" onClick={()=>{
        updateFunction("%")
      }}>%</button>
      
      <button className="operator" onClick={handleBraceClick}>()</button>
      
      
      <button className='yellow' onClick={()=>{
        updateFunction("+")
      }}>+</button>
      </div>
      <div className='frist'>
        
        <button className='digit'onClick={()=>{
        updateFunction("7")
      }}>7</button>
        <button className="digit" onClick={()=>{
        updateFunction("8")
      }}>8</button>
        <button className="digit" onClick={()=>{
        updateFunction("9")
      }}>9</button>
        <button className='yellow' onClick={()=>{
        updateFunction("/")
      }}>/</button>
      </div>
      <div>
        <button className="digit" onClick={()=>{
        updateFunction("4")
      }}>4</button>
        <button className="digit" onClick={()=>{
        updateFunction("5")
      }}>5</button>
        <button className="digit" onClick={()=>{
        updateFunction("6")
      }}>6</button>
        <button className='yellow' onClick={()=>{
        updateFunction("*")
      }}>*</button>
      </div>
      <div>
        <button className="digit" onClick={()=>{
        updateFunction("1")
      }}>1</button>
        <button className="digit" onClick={()=>{
        updateFunction("2")
      }}>2</button>
        <button className="digit" onClick={()=>{
        updateFunction("3")
      }}>3</button>
        <button className='yellow' onClick={()=>{
        updateFunction("-")
      }}>-</button>
      </div>
      <div>
        <button className="digit" onClick={()=>{
        updateFunction("0")
      }}>0</button>
        <button onClick={()=>{
        updateFunction(".")
      }}>.</button>
        <button className='red' onClick={()=>{
          remove()
        }}>x</button>
        <button className='white' onClick={()=>{
          calculate()
        }}>=</button>
      </div>

    </div>

  )
}
export default App
