import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/home.scss'

const Home = () => {
  return (
    <main>
        <div className="card-container">
        <Link className='link1' to={'/usestate'}><div>UseState</div></Link>
        <Link className='link2' to={'/usestate'}><div>UseState</div></Link>
        <Link className='link3' to={'/usestate'}><div>UseState</div></Link>
        <Link className='link4' to={'/usestate'}><div>UseState</div></Link>
        <Link className='link5' to={'/usestate'}><div>UseState</div></Link>
        <Link className='link6' to={'/usestate'}><div>UseState</div></Link>
        <Link className='link7' to={'/usestate'}><div>UseState</div></Link>
        <Link className='link8' to={'/usestate'}><div>UseState</div></Link>
        <Link className='link9' to={'/usestate'}><div>UseState</div></Link>
        <Link className='link10' to={'/usestate'}><div>UseState</div></Link>
        </div>
    </main>
  )
}

export default Home