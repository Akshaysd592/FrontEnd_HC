import { useState ,useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
   const [length,setLength] = useState(8);
   const [numberAllowed, setnumberAllowed] = useState(false);
   const [charAllowed, setcharAllowed] = useState(false);
   const [password, setPassword] = useState("")
   
 // useCallback(func , [dependencies]); 
   const passwordGenerator = useCallback( // this react hook to use memoisation put it in cache memory use when required
    ()=>{
      let pass = ""
      let str = "ABCEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

      if(numberAllowed) str+= "0123456789"
      if(charAllowed) str +=")(*&^%$#@!"

      for(let i = 1;i<=length;i++){
          let char = Math.floor(Math.random()*str.length ); //random index generate from 1 to length of str
          pass= pass + str[char];
          // pass +=  str.charAt(char)
      }
      setPassword(pass);
    }
    ,
    [length,numberAllowed,charAllowed,setPassword]
   )


   useEffect(
    ()=>{
      passwordGenerator()
    },
    [length,numberAllowed,charAllowed]
   )
   

   // To copy the data
  const passwordRef = useRef(null);

  const copyPasswordToClipboard = useCallback(
    ()=>{
      passwordRef.current?.select();// to show how much area is selected
      passwordRef.current?.setSelectionRange(0,100); // to select only first three value
      window.navigator.clipboard.writeText(passwordRef.current?.value)
    },
    [password]
  )


  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
            <h1 className='mb-4'>Password generator</h1> 
            <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
              <input 
                type='text'
                value={password}
                className='outline-none w-full py-1 px-3 '
                placeholder='Password '
                readOnly
                ref={passwordRef}
              />
              <button className='outline-none bg-blue-700 text-white px-3 py-1 shrink-0' onClick={copyPasswordToClipboard}>
                copy
              </button>

           </div>

           <div className='flex text-sm gap-x-2 '>
              <div  className='flex items-center gap-x-1'>
                 <input type="range" id='range' min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>(setLength(e.target.value))}/>
                 <label htmlFor='range'>Length: {length}</label>
              </div>
              <div>
                <input type='checkbox' id='charallowed' onChange={()=>(setcharAllowed(!charAllowed))}/>
                 <label htmlFor='charallowed'> Characters </label>
              </div>
              <div>
                <input type='checkbox' id='numberallowed' onChange={()=>(setnumberAllowed(!numberAllowed))}/>
                <label htmlFor='numberallowed'> Numbers </label>
              </div>
           </div>
            
            
    </div>
    </>
  )
}

export default App
