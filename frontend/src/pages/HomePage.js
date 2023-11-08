import React from 'react'
import '../App.css';

function HomePage() {

  return (
    <div>
      <div className='home_page'>
          <a className='home_button ' href="/">Clínica123</a>
      </div>
      <div className='main_content'>
          <div className='login_div'>
            <a className='doctor_login_button' href="/doctor/login">Login como Médico</a>
            <a className='drugstore_login_button' href="/drugstore/login">Login como Farmácia</a>
          </div>
      </div>
    </div>

  )
}

export default HomePage
