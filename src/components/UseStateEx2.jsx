import React, { useState } from 'react'
import '../styles/usestateex2.scss'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'

const UseStateEx2 = () => {
  const [Text, setText] = useState("Hi Mom!");
  let inputText = (event) => {
    setText(event.target.value);
  }
  return (
    <section>
      <div id="container">
      </div><h1 className='heading-card'>{Text}</h1>
      <input type="text" placeholder='Type Here...' onChange={inputText} />
      
      <Link className='l-arrow' to={'/usestate'}><BsFillArrowLeftCircleFill /></Link> 
    </section>
  )
}

export default UseStateEx2