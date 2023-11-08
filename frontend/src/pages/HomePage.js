import React from 'react'
import '../App.css';

function HomePage() {

  return (

    <div className='main_content'>
        <div className='login_div'>
          <a className='doctor_login_button' href="/doctor/login">Médico</a>
          <a className='drugstore_login_button' href="/drugstore/login">Farmácia</a>
        </div>
    </div>

  )
}

export default HomePage
