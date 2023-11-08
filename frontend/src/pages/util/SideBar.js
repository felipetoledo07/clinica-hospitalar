import React from 'react'

function SideBar() {
  return (
    <div className='side_bar'>
        <div>
            <a className='home_button' href="/">Clínica123</a>
        </div>
        <div className='flex_column'>
            <div>
                <a href='/appointment'>Consultas</a> 
            </div>
            <div>
                <a href='/patient'>Pacientes</a>
            </div>
            <div>
                <a href='/doctor'>Médicos</a>
            </div>
            <div>
                <a href='/recipe'>Receitas</a>
            </div>
            <div>
                <a href='/certificate'>Atestados</a>
            </div>
            <div>
                <a href='/drugstore'>Farmácia</a>
            </div>
        </div>
    </div>
  )
}

export default SideBar
