import { Menu } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function Topbar() {
  return (
    <div className='topbar bg-black flex justify-between '>
      <div>
        <Link to='/'><img src="/spotify-white-icon.webp" alt="logo" className='logo'/></Link>
      </div>
      <div>
        <Menu color={"white"}/>
      </div>
    </div>
  )
}

export default Topbar