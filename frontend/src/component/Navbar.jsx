import React from 'react'
import styles from './navbar.module.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className={styles['navbar']}>
        <ul>
            <li><Link to='/getalldata'>Get all data</Link></li>
            
            <li><Link to='/senddata'>send data</Link></li>

        </ul>
    </nav>
  )
}

export default Navbar

