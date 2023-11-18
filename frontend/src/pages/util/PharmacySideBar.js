import React from 'react'
import { useNavigate } from 'react-router-dom'

function PharmacySideBar() {

    const navigate = useNavigate()

  return (
    <div className='sideBar'>
        <div>
            <a className='home_button' href="/">Clínica123</a>
        </div>
        <div className='sidebarItemsContainer'>
            <div className='sidebarItem hover'  onClick={() => {navigate("/pharmacy/recipe")}}>
                <a href='/pharmacy/recipe'>Receitas</a> 
            </div>
            <div className='sidebarItem hover' onClick={() => {navigate("/pharmacy/drugstore")}}>
                <a href='/pharmacy/drugstore'>Farmácias</a>
            </div>
            <div className='sidebarItem hover' onClick={() => {navigate("/pharmacy/doctor")}}>
                <a href='/pharmacy/doctor'>Médicos</a>
            </div>
        </div>
    </div>
  )
}

export default PharmacySideBar
