import { useState } from "react"


function App() {
    const [screenColor,setscreenColor] = useState("black")

    function setColor(color){
      setscreenColor(color);
     
    }

  return (

    <div className=" relative w-full h-screen" style={{backgroundColor:screenColor}}>

       <div className="flex gap-2 " >
           <div className="p-2 min-w-20 m-4 rounded-xl  border-2 border-black  text-lg cursor-pointer" style={{backgroundColor:"green"}} onClick={()=>(setColor("green"))}>Green</div>
           <div className="p-2 min-w-20 m-4 rounded-xl  border-2 border-black text-lg cursor-pointer" style={{backgroundColor:"yellow"}} onClick={()=>(setColor("yellow"))}>Yellow</div>
           <div className="p-2 min-w-20 m-4 rounded-xl  border-2 border-black text-lg cursor-pointer" style={{backgroundColor:"pink"}} onClick={()=>(setColor("pink"))}>Pink</div>
           <div className="p-2  min-w-20 m-4 rounded-xl  border-2 border-black  text-lg cursor-pointer" style={{backgroundColor:"orange"}} onClick={()=>(setColor("orange"))}>Orange</div>
           <div className="p-2 min-w-20 m-4 rounded-xl border-2 border-black text-lg cursor-pointer" style={{backgroundColor:"red"}} onClick={()=>(setColor("red"))}>red</div>
       </div>
    </div>
  )
}

export default App
