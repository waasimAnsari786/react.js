import React , {useState , useEffect} from 'react'

export default function UseEffect() {
    const [count , setCount] = useState(0);

    useEffect(() => {
        document.title = `chats(${count})`
    });

  return (
    <div className='main-div'>
        <h1 className='heading'>useEffects</h1>
        <button className='btn' onClick={() => {
          setCount(count + 1)
        }}>Click me</button>
    </div>    
  )
}
