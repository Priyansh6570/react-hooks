import React, {useState} from 'react'
import '../styles/usestate.scss'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'

const UseState = () => {
  let [counter, setCounter] = useState(0);
  let imcrement =() => {
    setCounter(counter + 1);
    console.log(counter);
  }
  let reset = ()=> {
    setCounter(0);
  }
  return (
    <main className='use-section'>
      <h1>UseState Hook</h1>
    <div className="">{counter}</div>
    <div className='button'>
    <button onClick={imcrement}>Add</button>
    <button onClick={reset} className='reset'>Reset</button>
      <Link className='r-arrow' to={'/useState-ex2'}><BsFillArrowRightCircleFill /></Link> 
    </div>
    </main>
  )
}

export default UseState